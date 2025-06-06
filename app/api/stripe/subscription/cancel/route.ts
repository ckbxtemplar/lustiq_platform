import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@/auth';
import { getUser, updateUser } from '@/app/lib/data';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const customer = await getUser(session.user.email);
    const subscriptionId = customer?.id_subscription;

    if (!subscriptionId) {
      return NextResponse.json({ success: false, error: "No active subscription found." }, { status: 400 });
    }

		const customerUpdate = await updateUser(session.user.id, {subscriber:4} );
		if (customerUpdate)
		{
			const cancelled = await stripe.subscriptions.cancel(subscriptionId);

			if (cancelled.status === 'canceled') {
				return NextResponse.json({
					success: true,
					status: cancelled.status,
					message: "Subscription cancelled successfully."
				});
			} else {
				return NextResponse.json({
					success: false,
					status: cancelled.status,
					message: "Cancellation attempted, but subscription not fully cancelled."
				}, { status: 200 });
			}
		}

		return NextResponse.json({
			success: false,
			status: 500,
			message: "Cancellation attempted, but subscription not fully cancelled."
		}, { status: 200 });


  } catch (error: any) {
    console.error('>> STRIPE ERROR:', error);
    return NextResponse.json({
      success: false,
      error: error.message || "Something went wrong"
    }, { status: 500 });
  }
}
