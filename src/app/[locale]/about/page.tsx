"use server"

import {IParams} from "@/types";
import {AboutPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("about");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stmg-group.com/${params.locale}/about`),
    alternates: {
      canonical: `https://stmg-group.com/${params.locale}/about`,
      languages: {
        en: "https://stmg-group.com/about",
        ru: "https://stmg-group.com/ru/about",
        uz: "https://stmg-group.com/uz/about",
      }
    },
  };
}

export default async function About() {
  return <AboutPage/>
}