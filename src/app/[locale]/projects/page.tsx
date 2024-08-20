"use server"

import {IParams} from "@/types";
import {ProjectsPage} from "@/views";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: { params: IParams }): Promise<Metadata> {
  const t = await getTranslations("projects");

  return {
    title: t('seo.title'),
    keywords: t('seo.keywords'),
    description: t('seo.description'),
    metadataBase: new URL(`https://stmg-group.com/${params.locale}/projects`),
    alternates: {
      canonical: `https://stmg-group.com/${params.locale}/projects`,
      languages: {
        en: "https://stmg-group.com/projects",
        ru: "https://stmg-group.com/ru/projects",
        uz: "https://stmg-group.com/uz/projects",
      }
    },
  };
}

export default async function Projects() {
  return <ProjectsPage/>
}