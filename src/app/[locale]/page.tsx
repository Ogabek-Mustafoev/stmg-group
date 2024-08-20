"use server"

import {IParams} from "@/types";
import {HomePage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stmg-group.com/${params.locale}`),
    alternates: {
      canonical: `https://stmg-group.com/${params.locale}`,
      languages: {
        en: "https://stmg-group.com",
        ru: "https://stmg-group.com/ru",
        uz: "https://stmg-group.com/uz",
      }
    },
  };
}

export default async function Home() {
  return <HomePage/>
}
