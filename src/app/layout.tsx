import './globals.css';
import type { Metadata } from 'next';
import siteContentData from '@/data/siteContent.json';
import type { SiteContent } from '@/types/siteContent';

const siteContent = siteContentData as SiteContent;

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteContent.metadata.language}>
      <body>{children}</body>
    </html>
  );
}
