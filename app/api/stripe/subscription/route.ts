import { NextRequest } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { logStripeWebhookEvent, updateUser } from '@/app/lib/data';

export const config = {
  api: {
    bodyParser: false,
  },
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const requestHeaders = await headers()
  const sig = requestHeaders.get('stripe-signature') || ''

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err: any) {
    console.error(`❌ Webhook error: ${err.message}`)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  const payload = event.data.object as any
  const eventType = event.type
  let userId: string | null = null
  let shouldLogFullPayload = false
	let customerId: string | null = null
	let status: string | null = null

  try {
    switch (eventType) {
      case 'checkout.session.completed':
      case 'checkout.session.expired': {
        const session = payload as Stripe.Checkout.Session
				customerId = session.customer as string
				status = session.status as string
        userId = session.metadata?.userId ?? session.client_reference_id ?? null
        shouldLogFullPayload = true
        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
			case 'customer.subscription.deleted':
			{
        const subscription = payload as Stripe.Subscription
        customerId = subscription.customer as string
				status = subscription.status as string
        const customer = await stripe.customers.retrieve(customerId)
				console.log('>> CUSTOMER: ',customer)
        if (customer && !('deleted' in customer)) {
          userId = customer.metadata?.userId ?? null
        }
        shouldLogFullPayload = true
        break
      }

      case 'invoice.payment_succeeded':
      case 'invoice.payment_failed': {
        const invoice = payload as Stripe.Invoice
        customerId = invoice.customer as string
				status = invoice.status as string
        const customer = await stripe.customers.retrieve(customerId)
				console.log('>> CUSTOMER: ',customer)
        if (customer && !('deleted' in customer)) {
          userId = customer.metadata?.userId ?? null
        }
        shouldLogFullPayload = true
        break
      }

      default:
        console.log(`ℹ️ Nem kezelt esemény logolva: ${eventType}`)
    }

    await logStripeWebhookEvent(event.id, customerId, status, eventType, userId, shouldLogFullPayload ? payload : {})

    if (userId) {
      let subscriber = 1 // alapértelmezett érték minden másra

      if (
        (eventType === 'customer.subscription.updated' && status === 'active') ||
        (eventType === 'invoice.payment_succeeded' && status === 'paid') ||
        (eventType === 'customer.subscription.created' && status === 'active')
      ) {
        subscriber = 3
      } else if (eventType === 'checkout.session.completed' && status === 'complete') {
        subscriber = 2
      }

      await updateUser(userId, {
        subscriber,
        ...(customerId ? { customer: customerId } : {}) // csak ha van customerId
      })
    }

    return new Response('✅ Webhook processed', { status: 200 })
  } catch (err) {
    console.error('🔥 Error processing webhook:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
