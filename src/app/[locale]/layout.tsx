import {BaseLayout} from "@/components";
import {logoIconImg, logoShortImg} from "@/constants";
import {Providers} from "@/providers";
import {IChildren, IParams} from "@/types";
import {NextIntlClientProvider, useMessages, useTranslations} from "next-intl";
import {Saira_Condensed} from 'next/font/google';

import '@/styles/global.scss';

const saira = Saira_Condensed({subsets: ['latin'], weight: ['300', '400', '500', '600', '700']});

interface IRootLayout extends IChildren {
  params: IParams;
}

export default function RootLayout({children, params: {locale}}: Readonly<IRootLayout>) {
  const messages = useMessages();
  const t = useTranslations();

  return (
    <html lang={locale}>
    <head>
      <title>{t('seo.title')}</title>
      <meta name="description" content={t('seo.description')}/>
      <meta name="keywords" content={t('seo.keywords')}/>
      <meta property="og:description" content={t('seo.description')}/>
      <meta property="og:image" content={logoShortImg.src}/>
      <meta property="og:image:type" content='image/jpeg'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:image:alt" content="Vanguard"/>
      <meta property="og:url" content="https://stmg-group.com"/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:title" content={t('seo.title')}/>
      <meta name="twitter:description" content={t('seo.description')}/>
      <meta name="twitter:image" content={logoShortImg.src}/>
      <meta property="twitter:image:alt" content="stmg-group"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <link rel="canonical" href="https://stmg-group.com"/>
      <meta name="robots" content="index, follow"/>
      <meta name="robots" content="max-image-preview:large"/>
      <link rel="icon" type="image/svg+xml" sizes="192x192" href={logoIconImg.src}/>
      <link rel="icon" type="image/svg+xml" sizes="32x32" href={logoIconImg.src}/>
    </head>
    <body className={saira.className}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers locale={locale}>
        <BaseLayout>{children}</BaseLayout>
      </Providers>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
