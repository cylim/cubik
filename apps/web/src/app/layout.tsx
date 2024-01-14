import './globals.css';
import '@cubik/presets/styles/style.css';
import '@cubik/presets/styles/lightColor.style.css';
import '@cubik/presets/styles/darkColors.styles.css';
import '@cubik/presets/styles/component.style.css';

import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import TopNavbar from '@/components/header/navigation';
import { Provider } from '@/providers/provider';
import { Toaster } from 'sonner';

import { cn } from '@cubik/ui/lib/utils';

const CookiesProvider = dynamic(() =>
  import('next-client-cookies/server').then((e) => e.CookiesProvider),
);
const APP_NAME = 'Cubik';
const APP_DEFAULT_TITLE = 'Cubik';
const APP_TITLE_TEMPLATE = '';
const APP_DESCRIPTION = 'The genesis for leading Solana initiatives';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#272727',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body
        className={cn(inter.className, 'bg-[var(--color-bg-primary-depth)]')}
      >
        <CookiesProvider>
          <Provider>
            <>
              <main className="relative z-[0]">
                <TopNavbar />
                {children}
              </main>
              <Toaster />
            </>
          </Provider>
        </CookiesProvider>
      </body>
    </html>
  );
}
