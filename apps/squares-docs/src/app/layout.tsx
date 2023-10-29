

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import '@cubik/presets/styles/style.css';
import '@cubik/presets/styles/lightColor.style.css';
import '@cubik/presets/styles/darkColors.styles.css';
import '@cubik/presets/styles/component.style.css';

import Background from './home-page-components/components';
import Header from './home-page-components/header';
import Sidebar from './home-page-components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light" lang="en">
      <body className={`${inter.className} bg-[var(--color-bg-secondary)]`}>
        <Background />
        <Header />
        <div className="Z-1 flex w-full flex-row">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
