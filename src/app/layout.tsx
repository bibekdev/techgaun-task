import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FestivalProvider } from '@/providers/festival-provider';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'TechGaun Task',
  description: 'Completed by bibekdev'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <FestivalProvider>{children}</FestivalProvider>
      </body>
    </html>
  );
}
