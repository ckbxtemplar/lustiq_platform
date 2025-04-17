'use client';

import { useState } from 'react';
import getStripe from '@/app/utils/get-stripejs';
import { useLocale } from 'next-intl';

type CheckoutFormProps = {
  priceId: string;
};

export default function CheckoutForm({ priceId }: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);
	const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},			
			body: JSON.stringify({ priceId: priceId, locale: locale }),
    });

    const session = await response.json();

    const stripe = await getStripe();

    if (!stripe) {
      console.error('Stripe not loaded');
      return;
    }

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? 'Töltés...' : 'Feliratkozás'}
      </button>
    </form>
  );
}
