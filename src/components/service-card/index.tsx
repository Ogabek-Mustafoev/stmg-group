"use client"

import {Image, MotionEl} from "@/components";
import {TService} from "@/types";
import {Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import parse from 'html-react-parser';
import {useTranslations} from "next-intl";
import {FC} from "react";

interface IServiceCard extends TService {
  delay?: number;
  handleBook: () => void;
}

export const ServiceCard: FC<IServiceCard> = ({title, handleBook, delay, image, html}) => {
  const t = useTranslations('services');

  return (
    <MotionEl delay={delay} scale={.8}>
      <Card shadow="sm" className="group h-full bg-light p-2">
        <CardHeader className="z-0">
          <Image wrapperClass="rounded-xl" src={image} alt={t(title)}/>
        </CardHeader>
        <CardBody className="flex flex-col gap-1">
          <h5 className="text-2xl font-semibold">{t(title)}</h5>
          <div className="font-medium mb-2">
            {parse(t.raw(html))}
          </div>
          <Button
            type="button"
            aria-label="book"
            radius="full"
            color="primary"
            onClick={handleBook}
            className="max-w-40 px-9 text-white mt-auto font-light text-xl"
          >
            {t('book')}
          </Button>
        </CardBody>
      </Card>
    </MotionEl>
  )
}