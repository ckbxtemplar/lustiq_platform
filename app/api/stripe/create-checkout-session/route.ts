import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    // A kérésből JSON adatot nyerünk ki
    const { priceId, locale } = await request.json();
		// console.log('priceId', priceId);
    // Stripe session létrehozása a feliratkozáshoz
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
					quantity: 1,
					price: priceId
        },
      ],
      success_url: `${process.env.BASE_PROTOCOL+'://'+process.env.BASE_URL+"/"+locale}/subscribe/success`, // Sikeres vásárlás után hova irányítsuk a felhasználót
      cancel_url: `${process.env.BASE_PROTOCOL+'://'+process.env.BASE_URL+"/"+locale}/subscribe/cancel`, // Ha a felhasználó megszakítja a vásárlást
			client_reference_id: '9',
			metadata: {
				userId: 8, 
			}			
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
