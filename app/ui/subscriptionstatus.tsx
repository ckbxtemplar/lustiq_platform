'use client';

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { redirect } from 'next/navigation';

export default function SubscriptionStatus() {
  const { data: session, update } = useSession();
	const def_message = {icon:0, head:'...',sub:'Dolgozunk az előfizetésed frissítésén...'};
	const [ message, setMessage ] = useState(def_message)
  const attemptRef = useRef(0);
  const maxAttempts = 10;
	const delayAttempts = 2000;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const getIcon = (icon: number) => {
		switch (icon) {
			case 0:
				return <i className="fas fa-circle-notch fa-spin me-2"></i>;
			case 1:
				return <i className="fas fa-times text-yellow me-2"></i>;
			case 2:
				return <i className="fas fa-exclamation-circle text-yellow me-2"></i>;
			case 3:
				return <i className="far fa-check-circle text-green me-2"></i>;
			default:
				return null;
		}
	};

  useEffect(() => {
    const checkSubscriber = async () => {
      if (!session?.user?.id) redirect('/pricing?msg=session_expired');

			const res = await fetch('/api/user/data', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},			
				body: JSON.stringify({ 
					get: ['subscriber'] 
				}),
			});
      const user = await res.json();

      if (user?.subscriber === 3) {
        clearInterval(intervalRef.current!);
				update({
					user: {
							...session.user,
							subscriber: user?.subscriber,
					}
				})
				setMessage({icon:3, head:'Sikeres fizetés!',sub:'Elérhető az összes kurzus, kattints a gombra a folytatáshoz!'})					
      } else {
        attemptRef.current += 1;
        if (attemptRef.current >= maxAttempts) {
					update({
						user: {
								...session.user,
								subscriber: user?.subscriber,
						}
					})					
          clearInterval(intervalRef.current!);
        }
				switch(user?.subscriber)
				{
					case 2:
						setMessage({icon:2, head:'Függőben lévő előfizetés!',sub:'Dolgozunk az előfizetésed frissítésén...'})
						break;
					case 1:
						setMessage({icon:1, head:'Sikertelen fizetés!',sub:'Dolgozunk az előfizetésed frissítésén...'})
						break;
						case 0:
							setMessage({icon:1, head:'Nincs aktív fizetés!',sub:'Dolgozunk az előfizetésed frissítésén...'})
							break;						
					default:
						setMessage(def_message)
				}								
      }		
    };

    intervalRef.current = setInterval(checkSubscriber, delayAttempts);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [session?.user?.email]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
				{getIcon(message.icon)}			
				{message.head}
			</h1>
      <p>{message.sub}</p>			
			{message.icon === 3 && ( <a className="btn border_dark" href="/dashboard"><span><small>Dashboard</small><small>Dashboard</small></span></a>	)}	
    </div>
  );
}