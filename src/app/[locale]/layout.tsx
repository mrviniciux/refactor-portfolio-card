import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const PUBLIC_URL = 'https://mrviniciux.netlify.app/';
const meta = {
  metadataBase: new URL(PUBLIC_URL),
  title: 'mrviniciux',
  description: 'Brazilian Frontend developer',
  keywords: 'frontend, developer, programador, web',
  robots: 'index, follow',
};

export const metadata: Metadata = {
  ...meta,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: '/me.png',
    url: PUBLIC_URL,
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
