"use client"

import {MotionEl} from "@/components";
import {IOfferService} from "@/types";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {FC} from "react";

interface IOfferCard extends IOfferService {
  delay?: number;
}

export const OfferCard: FC<IOfferCard> = ({icon, title, delay, description}) => {
  const t = useTranslations("home");

  return (
    <MotionEl delay={delay} scale={.8} className="flex bg-light flex-col gap-2 p-4 rounded-2xl overflow-hidden">
      <div className="p-1 w-max rounded bg-primary">
        <Image className="spin bg-transparent" src={icon} alt={title}/>
      </div>
      <h5 className="text-2xl font-semibold mt-3">{t(title)}</h5>
      <p className="font-medium text-lg leading-tight">{t(description)}</p>
    </MotionEl>
  )
}