import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { priceId, locale, userId } = await request.json();

    const nextReq = request as any; 
    const domain = nextReq.nextUrl?.hostname;
    const baseUrl = domain ? domain : process.env.BASE_URL!;

		console.log('BASE URL:',baseUrl);

		const customer = await stripe.customers.create({
			metadata: {
				userId: userId,
			},
		})
		
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
					quantity: 1,
					price: priceId
        },
      ],
      success_url: `${process.env.BASE_PROTOCOL+'://'+baseUrl+'/'+locale}/subscribe/success`, // Sikeres vásárlás után hova irányítsuk a felhasználót
      cancel_url: `${process.env.BASE_PROTOCOL+'://'+baseUrl+'/'+locale}/subscribe/cancel`, // Ha a felhasználó megszakítja a vásárlást
			customer: customer.id,
			client_reference_id: userId, // A felhasználó azonosítója
			metadata: {
				userId: userId, 
			}			
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
