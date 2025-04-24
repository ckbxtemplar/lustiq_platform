'use client';

import { useState } from 'react';
import getStripe from '@/app/utils/get-stripejs';
import { useLocale } from 'next-intl';
import { useSession } from "next-auth/react";

type CheckoutFormProps = {
  priceId: string;
	title: string;
	btnClass?: string;
};

export default function CheckoutForm({ priceId, title, btnClass }: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);
	const locale = useLocale();

	const { data: session, status } = useSession();

	const ButtonContent = (
		<span>
			<small>{loading ? 'Töltés...' : title}</small>
			<small>{loading ? 'Töltés...' : title}</small>
		</span>
	);	

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},			
			body: JSON.stringify({ 
				priceId: priceId, 
				locale: locale, 
				userId: session?.user?.id }),
    });

    const stripeSession = await response.json();

    const stripe = await getStripe();

    if (!stripe) {
      console.error('Stripe not loaded');
      return;
    }

    const result = await stripe.redirectToCheckout({
      sessionId: stripeSession.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }

    setLoading(false);
  };

  return (
		<form onSubmit={handleSubmit}>
    {!session?.user?.id ? (
      <a className={`btn ${btnClass || 'border_dark'}`} href="/regist?callbackUrl=pricing">
        {ButtonContent}
      </a>
    ) : (
      <button type="submit" className={`btn ${btnClass || 'border_dark'}`} disabled={loading}>
        {ButtonContent}
      </button>
    )}
 		</form>
	);
}
