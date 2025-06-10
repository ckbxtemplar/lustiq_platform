'use client';

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { redirect } from 'next/navigation';
import {useTranslations} from 'next-intl';
import UnSubscribeButton from '@/app/ui/unsubscribebutton'

export default function SubscriptionStatus({retry=false}: {retry?: boolean}) {
	const t = useTranslations('components.subscriptionstatus');
  const { data: session, update, status  } = useSession();

  const attemptRef = useRef(0);
  const maxAttempts = (retry ? 10 : 1);
	const delayAttempts = (retry ? 2000 : 100);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);	
	const def_message = {icon: 0, head: '...', sub: t('onprogress')};
	const [message, setMessage] = useState(def_message);
	
	const getIcon = (icon: number) => {
		switch (icon) {
			case 0:
				return <i className="fas fa-circle-notch fa-spin me-3"></i>;
			case 1:
				return <i className="fas fa-times text-red me-3"></i>;
			case 2:
				return <i className="fas fa-exclamation-circle text-red me-3"></i>;
			case 3:
				return <i className="far fa-check-circle text-green me-3"></i>;
			default:
				return null;
		}
	};

  const checkSubscriber = async () => {
    if (!session?.user?.id) return redirect('/pricing?msg=session_expired');

    const res = await fetch('/api/user/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ get: ['subscriber'] }),
    });
    const user = await res.json();

    if (user?.subscriber === 3) {
      clearInterval(intervalRef.current!);
      update({ user: { ...session.user, subscriber: user.subscriber } });
      setMessage({icon:3, head: t('ssuccess.head'), sub: t('ssuccess.sub')});
    } else {
      attemptRef.current += 1;
      if (attemptRef.current >= maxAttempts) {
        update({ user: { ...session.user, subscriber: user.subscriber } });
        clearInterval(intervalRef.current!);
      }

      switch(user?.subscriber) {
        case 4:
          setMessage({icon:1, head: t('scancel.head'), sub: (retry ? t('onprogress') : t('scancel.sub'))});
          break;				
        case 2:
          setMessage({icon:2, head: t('spending.head'), sub: (retry ? t('onprogress') : t('spending.sub'))});
          break;
        case 1:
          setMessage({icon:1, head: t('sfailed.head'), sub: (retry ? t('onprogress') : t('sfailed.sub'))});
          break;
        case 0:
          setMessage({icon:1, head: t('sno.head'), sub: (retry ? t('onprogress') : t('sno.sub'))});
          break;
        default:
          setMessage(def_message);
      }
    }
  };

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated" || !session?.user?.id) redirect('/pricing?msg=session_expired');
    
    intervalRef.current = setInterval(checkSubscriber, delayAttempts);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [session?.user?.email]);

  const handleUnsubscribe = async () => {
    await checkSubscriber(); // újra lekéri a státuszt
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
				{getIcon(message.icon)}			
				{message.head}
			</h1>
      <p>{message.sub}</p>			
			{message.icon === 3 && ( <a className="btn btn_dark" href="/dashboard/courses"><span><small>{t('btncourses')}</small><small>{t('btncourses')}</small></span></a>	)}	
			{message.icon === 3 && !retry ? <UnSubscribeButton onUnsubscribe={handleUnsubscribe}/> : null }
			{message.icon === 1 ? <a className="btn border_dark" href="/pricing" ><span><small>{t('offers')}</small><small>{t('offers')}</small></span></a> : null }
    </div>
  );
}