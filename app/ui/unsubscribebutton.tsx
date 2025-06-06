'use client';

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import Modal from '@/components/modal'; // importáld

export default function UnSubscribeButton({ onUnsubscribe }: { onUnsubscribe?: () => void }) {
  const t = useTranslations('components.unsubscribebutton');
  const { update } = useSession();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleUnsubscribe = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/subscription/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const user = await res.json();
      if (user?.success) {
        setResult(t('success'));
				
        update({					
            user: {
							subscriber: 4
            }
        }).then(() => {
					console.log('User session-data updated successfully');
					onUnsubscribe?.();
				});

      } else {
        setResult(t('error'));
      }
    } catch (err) {
      console.error('Unsubscribe failed:', err);
      setResult(t('error'));
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="pt-4 text-end">
        <hr />
        <button
          className="btn_unfill text-black"
          onClick={() => setShowModal(true)}
          disabled={loading}
        >
          <i className="fas fa-ban me-2"></i>
          <span><small>{loading ? t('loading') : t('btn')}</small></span>
        </button>
        {result && <p className="mt-2 text-sm">{result}</p>}
      </div>

      <Modal
        show={showModal}
        title={t('modal.confirm_title')}
        onClose={() => setShowModal(false)}
        onConfirm={handleUnsubscribe}
        confirmLabel={t('modal.yes')}
        cancelLabel={t('modal.no')}
        confirmButtonClass="btn-danger"
        loading={loading}
      >
        {t('modal.confirm_text')}
      </Modal>
    </>
  );
}
