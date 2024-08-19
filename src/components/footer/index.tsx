"use client"

import { Link, MotionEl, usePathname } from "@/components";
import { logoImg, navLinks, socialLinks } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

export const Footer: FC = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <footer className="pt-10 lg:pt-14 pb-6 lg:pb-8 mt-14 rounded-t-3xl text-lg bg-secondary text-white">
      <div className="container flex flex-col gap-3 md:gap-4">
        <MotionEl className="h-10 md:h-14 lg:h-16 flex justify-start" direction="left" delay={.2}>
          <Image src={logoImg} alt="logo" className="h-full w-max object-center object-contain" />
        </MotionEl>
        <div className="flex md:items-center flex-col md:flex-row gap-5 md:justify-between">
          <div className="flex flex-wrap gap-4 text-xl w-full flex-1 justify-between max-w-lg">
            {navLinks.map(({ link, label }) => (
              <Link
                key={link}
                href={link}
                className={`${pathname === link ? "text-primary tracking-wider font-semibold" : "text-white"} transition-400 hover:text-primary`}
              >
                {t(`pages.${label}`)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:info@stmg-group.com">• {t("footer.contactEmail")}</a>
            <a
              href="https://www.google.com/maps/place/building+7,+Navnihol+ko'chasi+3,+%D0%A2%D0%BEshkent,+Toshkent/@41.3471893,69.3353765,17z/data=!3m1!4b1!4m5!3m4!1s0x38aef487f592cfd3:0xc4f7fa0aed5b55a5!8m2!3d41.3471893!4d69.3353765?entry=ttu">
              • {t("footer.address")}
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 flex-wrap gap-5">
          <div className="flex items-center gap-3">
            <p>{t("footer.privacyPolicy")}</p>
            <p>{t("footer.termsOfService")}</p>
          </div>
          <p className="flex items-center gap-2">
            <span className="text-3xl font-sans leading-tight">©</span>
            {t("footer.copyright")}
          </p>
          <div className="flex items-center justify-between gap-5 flex-wrap">
            {socialLinks.map(({ link, icon }) => (
              <Link key={link} href={link} target="_blank">
                <Image src={icon} alt={link} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}