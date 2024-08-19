import {Gallery} from "@/components";
import {projects} from "@/constants";
import {useTranslations} from "next-intl";
import {FC} from "react";

export const ProjectsPage: FC = () => {
  const t = useTranslations('projects');

  return (
    <section className="page container overflow-hidden">
      <h2 className="heading mt-5 mb-8">{t('title')}</h2>
      <Gallery images={projects}/>
    </section>
  )
}