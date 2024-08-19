"use client"

import {BannerContent, MotionEl} from "@/components";
import {heroImg, logoIconBlack} from "@/constants";
import {Button} from "@nextui-org/react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {FC} from "react";

export const Hero: FC = () => {
  const router = useRouter();
  const t = useTranslations("hero");

  return (
    <BannerContent
      priority
      delay={.3}
      wrapperClass="mt-7"
      image={{alt: "hero img", src: heroImg}}
    >
      <div
        className="w-full md:w-1/2 p-3.5 sm:p-4 lg:p-5 xl:p-6 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 bg-white rounded-2xl">
        <MotionEl delay={.3} direction={"right"} className="flex justify-between items-end gap-3">
          <h1 className="text-3xl uppercase md:text-4xl xl:text-5xl flex-1 font-semibold leading-tight">
            {t("title")}
          </h1>
          <div className="w-3/12 mb-auto">
            <Image
              alt="curved"
              src={logoIconBlack}
              className="rounded-full spin w-full h-full"
            />
          </div>
        </MotionEl>
        <MotionEl el="p" delay={.4} direction="right" className="text-lg font-medium">
          {t('description')}
        </MotionEl>
        <MotionEl delay={.5} direction="right" className="mt-5 md:mt-8 lg:mt-10">
          <Button
            color="primary"
            radius="full"
            type="button"
            aria-label="leave a request"
            onClick={() => router.push('#contact')}
            className="md:py-7 md:px-7 text-white w-max text-lg md:text-xl font-medium"
          >
            {t('request')}
          </Button>
        </MotionEl>
      </div>
    </BannerContent>
  )
}