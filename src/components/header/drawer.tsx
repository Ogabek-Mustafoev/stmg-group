import {HamburgerIcon, LocaleSwitcher, usePathname, useRouter} from "@/components";
import {navLinks, socialLinks} from "@/constants";
import {Button} from "@nextui-org/react";
import {motion} from 'framer-motion';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {Dispatch, FC, SetStateAction} from "react";

interface IDrawer {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const Drawer: FC<IDrawer> = ({setOpen, open}) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("pages");

  const handleClick = (link?: string) => {
    setOpen((prev) => !prev);
    if (link) {
      router.push(link);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="close menu"
        onClick={() => setOpen(prev => !prev)}
        className={`${open ? "block opacity-100 backdrop-blur" : "hidden opacity-0 backdrop-blur-0"} transition-400 fixed z-50 top-0 bg-black bg-opacity-30 left-0 w-full h-full`}
      />
      <motion.div
        variants={{
          initial: {
            x: "120%"
          },
          open: {
            x: "0%"
          }
        }}
        initial="initial"
        animate={open ? "open" : "initial"}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="fixed z-50 flex flex-col gap-10 bg-secondary overflow-x-hidden h-full top-0 right-0 w-full max-w-md"
      >
        <div className="flex justify-between px-3 mt-3">
          <Button
            isIconOnly
            variant="bordered"
            className="bg-secondary border-1 pr-px"
            onClick={() => setOpen(prev => !prev)}
          >
            <HamburgerIcon className="bg-white" isActive={open}/>
          </Button>
          <LocaleSwitcher/>
        </div>
        <div className="flex flex-col gap-4 mt-7 text-3xl">
          {navLinks.map(({link, label}) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`${pathname === link ? "text-primary tracking-wider font-semibold" : "text-white"} transition-400 hover:text-primary`}
            >
              {t(label)}
            </button>
          ))}
        </div>
        <div className="flex items-center mt-auto p-5 w-max justify-between gap-7 ml-auto flex-wrap">
          {socialLinks.map(({link, icon}) => (
            <Link key={link} href={link} target="_blank">
              <Image src={icon} alt={link}/>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  )
}