"use client"

import {motion} from "framer-motion";
import {FC} from "react";

export const PageTransition: FC = () => {
  return (
    <>
      <motion.div
        key="first"
        className="min-h-screen bg-secondary z-50 fixed top-0 left-0 w-4/12 xsm:w-1/4"
        initial={{y: "0%"}}
        animate={{y: "100%"}}
        exit={{y: "0%"}}
        transition={{duration: 0.8, ease: "easeInOut"}}
      />
      <motion.div
        key="second"
        className="min-h-screen bg-secondary z-50 fixed top-0 left-[33.3%] xsm:left-1/4 w-4/12 xsm:w-1/4"
        initial={{y: "0%"}}
        animate={{y: "100%"}}
        exit={{y: "0%"}}
        transition={{delay: 0.15, duration: 0.8, ease: "easeInOut"}}
      />
      <motion.div
        key="third"
        className="min-h-screen bg-secondary z-50 fixed top-0 left-[66.6%] xsm:left-2/4 w-4/12 xsm:w-1/4"
        initial={{y: "0%"}}
        animate={{y: "100%"}}
        exit={{y: "0%"}}
        transition={{delay: 0.25, duration: 0.8, ease: "easeInOut"}}
      />
      <motion.div
        key="fifth"
        className="min-h-screen hidden xsm:block bg-secondary z-50 fixed top-0 left-3/4 w-1/4"
        initial={{y: "0%"}}
        animate={{y: "100%"}}
        exit={{y: "0%"}}
        transition={{delay: 0.35, duration: 0.8, ease: "easeInOut"}}
      />
    </>
  );
};
