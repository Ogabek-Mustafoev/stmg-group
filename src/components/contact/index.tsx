"use client"

import {BannerContent, ContactForm} from "@/components";
import {contactImg} from "@/constants";
import {useTranslations} from "next-intl";
import {FC} from "react";

export const Contact: FC = () => {
  const t = useTranslations('contact')

  return (
    <div id="contact" className="bg-white py-6 md:py-8 lg:py-10 rounded-2xl">
      <div className="container">
        <h2 className="heading mb-4">{t("title")}</h2>
        <h5 className="text-2xl font-medium">{t("description")}</h5>
      </div>
      <BannerContent isRowRevers image={{src: contactImg, alt: "contact"}}>
        <div className="bg-light rounded-2xl px-4 pt-3 sm:pt-5 sm:px-6 w-full md:w-1/2">
          <ContactForm/>
        </div>
      </BannerContent>
    </div>
  )
}