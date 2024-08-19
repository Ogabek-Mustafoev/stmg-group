'use client';

import {FrozenRoute, PageTransition, usePathname} from "@/components";
import {TLocale} from "@/types";
import {NextUIProvider} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
import {FC, ReactNode} from "react";

interface IProvider {
  children: ReactNode;
  locale: TLocale;
}

export const Providers: FC<IProvider> = ({children, locale}) => {
  const pathname = usePathname();

  return (
    <NextUIProvider locale={locale}>
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>
          <PageTransition/>
          <FrozenRoute>
            {children}
          </FrozenRoute>
        </motion.div>
      </AnimatePresence>
    </NextUIProvider>
  );
};