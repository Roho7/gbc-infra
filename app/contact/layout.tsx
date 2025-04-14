import { Metadata } from 'next';
import React from 'react';
import { DataProvider } from '../_hooks/useData';
import { siteConfig } from '../_utils/utils';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig().title,
    description: siteConfig().description,
    openGraph: {
      title: siteConfig().title,
      description: siteConfig().description,
      type: 'website',
      url: siteConfig().baseUrl,
      images: [
        {
          url: siteConfig().ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig().name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig().title,
      description: siteConfig().description,
      images: [siteConfig().ogImage],
      creator: siteConfig().twitter,
    },
  };
}
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  )
}

export default ContactLayout