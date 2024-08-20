"use server"

import {IParams} from "@/types";
import {ServicesPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("services");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stmg-group.com/${params.locale}/services`),
    alternates: {
      canonical: `https://stmg-group.com/${params.locale}/services`,
      languages: {
        en: "https://stmg-group.com/services",
        ru: "https://stmg-group.com/ru/services",
        uz: "https://stmg-group.com/uz/services",
      }
    },
  };
}

export default async function Services() {
  return <ServicesPage/>
}