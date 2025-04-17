import { NextRequest } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'

// Nyers body olvasásához kell
export const config = {
  api: {
    bodyParser: false,
  },
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
	const requestHeaders = await headers()
  const sig = requestHeaders.get('stripe-signature') || ''

  if (!webhookSecret) {
    console.error('❌ STRIPE_WEBHOOK_SECRET not found in env')
    return new Response('Server error: missing webhook secret', { status: 500 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err: any) {
    console.error(`❌ Webhook error: ${err.message}`)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // ✅ Sikeres webhook fogadás
  console.log('✅ Webhook received:', event.type)

  // Példa: ha előfizetés létrejött
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    console.log('💰 Új előfizetés:', session)
    // Itt feldolgozhatod az adatokat pl. adatbázisba mentés stb.
  }

  return new Response('Webhook received ✅', { status: 200 })
}
