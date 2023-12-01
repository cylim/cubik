import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { AxiomWebVitals } from 'next-axiom';
import { ClientCookiesProvider } from '../app/home-page-components/providers/cookies';

import './globals.css';
import '@cubik/presets/styles/style.css';
import '@cubik/presets/styles/lightColor.style.css';
import '@cubik/presets/styles/darkColors.styles.css';
import '@cubik/presets/styles/component.style.css';

import { Toaster } from 'sonner';

import Background from './home-page-components/components';
import Header from './home-page-components/header';
import { WalletProvider } from './home-page-components/providers/wallet';
import Sidebar from './home-page-components/sidebar';
import { ThemeProvider } from './home-page-components/utils';

const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'Squares';
const APP_DEFAULT_TITLE = 'Squares Documentation';
const APP_TITLE_TEMPLATE = '%s - PWA App';
const APP_DESCRIPTION =
  'The component library designed and built for use @ CUBIK';

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
  themeColor: '#272727'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  const announcement = {
    bg: 'bg-[var(--color-surface-secondary)]',
    text: '',
    link: '',
  };
  return (
    <html lang="en" dir="ltr" >
      <body className={`${inter.className} ${announcement.bg} bg-[var(--color-bg-primary-depth)]`}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <ThemeProvider>
            <WalletProvider>
            <div className="absolute min-h-screen overflow-hidden">
              <div className="relative z-[-1]">
                <Background />
              </div>{' '}
              <div className="z-1 fixed overflow-visible">
                {announcement.text.length > 0 && (
                  <div
                    className={`h-[60px] w-screen ${announcement.bg}`}
                  ></div>
                )}
                <Header />
              </div>
              <AxiomWebVitals />
              <div className="z-0 mt-0 flex w-full flex-row md:mt-[70px]">
                <Toaster />
                <div className={`fixed h-[calc(100vh-72px)]`}>
                  <Sidebar />
                </div>
                <div className="w-screen overflow-y-scroll pt-[70px] md:pl-[285px] md:pt-0">
                  {children}
                </div>
              </div>
            </div>
          </WalletProvider>
         </ThemeProvider>
        </ClientCookiesProvider>
      </body>
    </html>
  );
}
