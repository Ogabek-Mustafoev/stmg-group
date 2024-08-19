import { BaseLayout } from "@/components";
import { logoIconImg, logoShortImg } from "@/constants";
import { Providers } from "@/providers";
import { IChildren, IParams } from "@/types";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Saira_Condensed } from 'next/font/google';

import '@/styles/global.scss';

const saira = Saira_Condensed({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://stmg-group.com'),
  title: {
    default: "STMG-group - Leading Provider of Mining Equipment",
    template: "%s | STMG-group",
  },
  description: "Welcome to STMG-group. We offer a comprehensive range of high-quality mining equipment tailored to meet the diverse needs of our customers. Explore our services, projects, and partnerships for superior mining solutions.",
  keywords: "STMG-group, stmg-group, STMG-group, mining equipment, high-quality, reliable, dump trucks, drill rigs, mining solutions",
  openGraph: {
    type: "website",
    siteName: "STMG-group",
    images: [
      {
        url: logoShortImg.src,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: "STMG-group Mining Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stmg_group",
    creator: "@stmg_group",
    images: [
      {
        url: logoShortImg.src,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: "STMG-group Mining Equipment",
      },
    ],
  },
  authors: [
    { name: "Ogabek Mustafoev", url: "https://mustafoev-ogabek.vercel.app/" },
    { name: "VANGUARD-TECH-GROUP", url: "https://vanguar-group.com" },
  ],
  icons: [
    {
      url: logoIconImg.src,
      type: "image/png",
      sizes: "1200x630",
    },
    {
      url: logoIconImg.src,
      type: "image/png",
      sizes: "32x32",
    },
    {
      url: logoIconImg.src,
      type: "image/png",
      sizes: "16x16",
    },
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

interface IRootLayout extends IChildren {
  params: IParams;
}

export default function RootLayout({ children, params: { locale } }: Readonly<IRootLayout>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={saira.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers locale={locale}>
            <BaseLayout>{children}</BaseLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
