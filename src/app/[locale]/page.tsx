"use server"

import { logoShortImg } from "@/constants";
import { IParams } from "@/types";
import { HomePage } from "@/views";
import { Metadata, ResolvingMetadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: IParams }, parent: ResolvingMetadata): Promise<Metadata> {
  const t = await getTranslations();
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stmg-group.com/${params.locale}`),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    alternates: {
      canonical: params.locale === 'en'
        ? "https://stmg-group.com"
        : `https://stmg-group.com/${params.locale}`,
      languages: {
        en: "https://stmg-group.com",
        ru: "https://stmg-group.com/ru",
        uz: "https://stmg-group.com/uz",
      }
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: params.locale === 'en'
        ? "https://stmg-group.com"
        : `https://stmg-group.com/${params.locale}`,
      type: "website",
      siteName: "STMG-group",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: "About STMG-group",
        },
        ...previousImages,
      ],
    },
    twitter: {
      title: t('seo.title'),
      description: t('seo.description'),
      card: "summary_large_image",
      site: "@stmg_group",
      creator: "@stmg_group",
      images: [
        {
          url: logoShortImg.src,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: "About STMG-group",
        },
        ...previousImages,
      ],
    },
  };
}

export default async function Home() {
  return <HomePage />
}
