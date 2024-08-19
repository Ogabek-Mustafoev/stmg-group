'use client'

import {ContactModal, ServiceCard} from "@/components";
import {servicesData} from "@/constants";
import {useDisclosure} from "@nextui-org/react";
import {useTranslations} from "next-intl";
import {FC} from "react";

export const ServicesPage: FC = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const t = useTranslations("services");

  return (
    <section className="page container">
      <h2 className="heading mt-5 mb-8">{t("title")}</h2>
      <div className="grid-3 pb-6">
        {servicesData.map((item, idx) => (
          <ServiceCard handleBook={onOpen} delay={idx / 10} key={idx + "-service"} {...item}/>
        ))}
      </div>
      <ContactModal onOpenChange={onOpenChange} isOpen={isOpen}/>
    </section>
  )
}