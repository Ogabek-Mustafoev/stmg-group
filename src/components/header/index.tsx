"use client"

import {HamburgerIcon, Link, LocaleSwitcher, MotionEl, usePathname} from "@/components";
import {logoImg, navLinks} from "@/constants";
import {Button} from "@nextui-org/react";
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import {useTranslations} from "next-intl";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {FC, useEffect, useState} from "react";
import {Drawer} from "./drawer";

export const Header: FC = () => {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {scrollY} = useScroll();
  const t = useTranslations("pages");

  const toggleIsFixed = (val: boolean) => {
    if (isFixed !== val) {
      setIsFixed(prev => !prev);
    }
  }

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious();

    if (latest > (previous ?? 0) && latest > 500) {
      toggleIsFixed(true);
      localStorage.setItem('isFixed', JSON.stringify(true))
    } else {
      toggleIsFixed(false);
      localStorage.setItem('isFixed', JSON.stringify(false))
    }
  })

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (open) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
    }
  }, [open]);

  useEffect(() => {
    const isFixed = localStorage.getItem('isFixed') ?? 'false';
    setIsFixed(eval(isFixed));
  }, []);

  return (
    <>
      <motion.header
        variants={{
          initial: {
            y: "0%"
          },
          animate: {
            y: '-100%'
          }
        }}
        initial="initial"
        animate={isFixed ? "animate" : "initial"}
        transition={{duration: 0.6, ease: "easeInOut"}}
        className="fixed py-2.5 md:py-3 rounded-b-3xl text-xl overflow-hidden top-0 text-white left-0 w-full z-10 bg-secondary"
      >
        <div className="flex items-center justify-between container">
          <MotionEl className="h-9 md:h-11 w-max cursor-pointer" direction="left" delay={.2}>
            <Image onClick={() => router.push('/')} src={logoImg} alt="logo" loading="eager"
                   className="h-full w-max object-center object-contain"/>
          </MotionEl>
          <div className="hidden md:flex items-center flex-1 justify-between max-w-lg">
            {navLinks.map(({link, label}, idx) => (
              <MotionEl key={link} direction="left" delay={idx / 10}>
                <Link
                  href={link}
                  className={`${pathname === link ? "text-primary tracking-wider font-semibold" : "text-white"} transition-400 hover:text-primary`}
                >
                  {t(label)}
                </Link>
              </MotionEl>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <MotionEl
              el="a"
              delay={.2}
              target="_blank"
              direction="right"
              href="tel:+998781227717"
              className="hidden lg:block"
            >
              +998 78 122 77 17
            </MotionEl>
            <MotionEl
              delay={.4}
              direction="right"
              className="hidden md:block"
            >
              <LocaleSwitcher/>
            </MotionEl>
          </div>
          <Button
            size="lg"
            isIconOnly
            type="button"
            aria-label="toggle menu"
            onClick={() => setOpen(prev => !prev)}
            className="bg-secondary border-2 border-solid border-gray-700 md:hidden hover:border-primary"
          >
            <HamburgerIcon className="bg-primary" isActive={open}/>
          </Button>
        </div>
      </motion.header>
      <Drawer setOpen={setOpen} open={open}/>
    </>
  )
}
