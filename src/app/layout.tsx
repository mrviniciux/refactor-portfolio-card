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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
