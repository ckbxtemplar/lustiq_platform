import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  dictionary: Record<string, any>;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
			<NextIntlClientProvider>
      	{children}
			</NextIntlClientProvider>
    </SessionProvider>
  );
}

export default Providers;
