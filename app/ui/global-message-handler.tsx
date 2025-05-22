'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import {useTranslations} from 'next-intl';

export default function GlobalMessageHandler() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState({title:'',msg:''});
  const modalRef = useRef<HTMLDivElement | null>(null);
	
	const t = useTranslations('components.messagePopup');
	
const messages = {
  auth_problem: {
    title: t('auth_problem.title'),
    msg: t('auth_problem.msg'),
  },
  session_expired: {
    title: t('session_expired.title'),
    msg: t('session_expired.msg'),
  },
  payment_required: {
    title: t('payment_required.title'),
    msg: t('payment_required.msg'),
  },
  start_soon: {
    title: t('start_soon.title'),
    msg: t('start_soon.msg'),
  },
};

  useEffect(() => {
    const msgKey = searchParams.get('msg');

    if (msgKey && messages[msgKey]) {
      setMessage(messages[msgKey]);
      const bootstrap = require('bootstrap');
      const modal = new bootstrap.Modal(modalRef.current!);
      modal.show();
    }
  }, [searchParams]);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="globalMessageModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="globalMessageModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="globalMessageModalLabel">{message.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={t('close')}></button>
          </div>
          <div className="modal-body">{message.msg}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn_dark btn_small" data-bs-dismiss="modal"><span><small>{t('close')}</small><small>{t('close')}</small></span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
