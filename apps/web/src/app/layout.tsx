import './globals.css';
import '@cubik/presets/styles/style.css';
import '@cubik/presets/styles/lightColor.style.css';
import '@cubik/presets/styles/darkColors.styles.css';
import '@cubik/presets/styles/component.style.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/app/provider';
import Background from '@/components/common/bg/background';
import TopNavbar from '@/components/header/navigation';
import BottomNav from '@/components/mobile-bottom-nav';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@cubik/ui/lib/utils';

const APP_NAME = 'Cubik';
const APP_DEFAULT_TITLE = 'Cubik';
const APP_TITLE_TEMPLATE = '%s - PWA App';
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

export const viewport = {
  themeColor: '#fff',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light" lang="en">
      <body
        className={cn(inter.className, 'bg-[var(--color-bg-primary-depth)]')}
      >
        <Provider>
          <main className="relative z-[0]">
            <TopNavbar />
            <Background />
            {children}
            <BottomNav name={'home'} />
          </main>
        </Provider>
      </body>
    </html>
  );
}
