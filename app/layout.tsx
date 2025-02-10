import '@/app/ui/global.css';
import '@/app/ui/assets/css/assets.css';
import { roboto } from '@/app/ui/fonts';
import { Metadata } from 'next';
import ScriptLoader from '@/app/ui/assets/js/ScriptLoader';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>

				<ScriptLoader />

      </head>
    	<body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
