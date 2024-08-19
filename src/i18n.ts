import {locales} from "@/constants";

import {TLocale} from "@/types";
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as TLocale)) notFound();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    timeZone,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
