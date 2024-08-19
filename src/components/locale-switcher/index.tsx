"use client"

import {usePathname, useRouter} from "@/components";
import {localesData, worldIcon} from "@/constants";

import {TLocale} from "@/types";
import {Select, SelectItem} from "@nextui-org/react";
import {useLocale} from "next-intl";
import Image from "next/image";
import {ChangeEventHandler, FC} from "react";

interface ILocaleSwitcher {
  className?: string;
  onChange?: () => void;
}

export const LocaleSwitcher: FC<ILocaleSwitcher> = ({className, onChange}) => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({target: {value}}) => {
    router.replace(pathname, {locale: value as TLocale});
    if (typeof onChange === "function") {
      onChange();
    }
  }

  return (
    <Select
      size="sm"
      className={`${className} w-max`}
      placeholder="Select"
      onChange={handleChange}
      startContent={
        <Image
          src={worldIcon}
          alt="selected"
          className="w-14 h-7 rounded-none"
        />
      }
      classNames={{value: "!text-white"}}
      style={{background: "#000", color: "#fff"}}
      defaultSelectedKeys={[locale]}
      aria-label="language-select"
    >
      {localesData.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
          classNames={{title: "font-semibold"}}
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};