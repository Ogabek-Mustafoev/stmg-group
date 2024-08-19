import {
  aboutOneImg,
  aboutThreeImg,
  aboutTwoImg,
  facebookIcon,
  instagramIcon,
  orderOneIcon,
  orderThreeIcon,
  orderTwoIcon,
  partnerEightImg,
  partnerFiveImg,
  partnerFourImg,
  partnerOneImg,
  partnerSevenImg,
  partnerSixImg,
  partnerThreeImg,
  partnerTwoImg,
  projectEightImg,
  projectEightTeenImg,
  projectElevenImg,
  projectFifTeenImg,
  projectFiveImg,
  projectFourImg,
  projectFourteenImg,
  projectNineImg,
  projectOneImg,
  projectSevenImg,
  projectSevenTeenImg,
  projectSixImg,
  projectSixTeenImg,
  projectTenImg,
  projectThirteenImg,
  projectThreeImg,
  projectTwelveImg,
  projectTwoImg,
  serviceEightImg,
  serviceFiveImg,
  serviceFourImg,
  serviceNineImg,
  serviceOneImg,
  serviceSevenImg,
  serviceSixImg,
  serviceThreeImg,
  serviceTwoImg,
  twitterIcon,
  youtubeIcon,
} from "@/constants/index";
import {IAboutUs, ILocalesData, INavLink, IOfferService, ISocialLinks, TLocale, TService} from "@/types";
import {StaticImageData} from "next/image";

export const navLinks: INavLink[] = [
  {link: "/", label: "home"},
  {link: "/about", label: "about"},
  {link: "/services", label: "services"},
  {link: "/projects", label: "projects"},
  {link: "/#partners", label: "partners"},
  {link: "/#contact", label: "contact"},
]

export const locales: TLocale[] = ["uz", 'en', 'ru'];

export const offerService: IOfferService[] = [
  {
    icon: orderOneIcon,
    title: "wide-range",
    description: "explore",
  },
  {
    icon: orderTwoIcon,
    title: "high-quality",
    description: "our-equipment",
  },
  {
    icon: orderThreeIcon,
    title: "flexible",
    description: "we-offer",
  },
];

export const aboutUsData: IAboutUs[] = [
  {
    image: aboutOneImg,
    title: "WHO-WE-ARE",
    html: `since-establishment`,
  }, {
    image: aboutTwoImg,
    title: "WHAT-WE-DO",
    html: `in-our-ultra`
  }, {
    image: aboutThreeImg,
    title: "OUR-REVIEW",
    html: `st-stg`,
  }
]

export const localesData: ILocalesData[] = [
  {label: "Eng", value: "en"},
  {label: "Рус", value: "ru"},
  {label: "O'zb", value: "uz"},
]

export const servicesData: TService[] = [
  {
    title: "XCMGXTC80",
    image: serviceOneImg,
    html: `wall-thickness`,
  },
  {
    title: "CRAWLER-EXCAVATOR",
    image: serviceTwoImg,
    html: `operating-weight`,
  },
  {
    title: "The-JCB",
    image: serviceThreeImg,
    html: `gross-power`,
  },
  {
    title: "3DX-TLB",
    image: serviceFourImg,
    html: `weight-7`,
  },
  {
    title: "Terex-Wheel",
    image: serviceFiveImg,
    html: `weight-15`,
  },
  {
    title: "Single-Drum",
    image: serviceSixImg,
    html: `max-operating`,
  },
  {
    title: "Joy-Global",
    image: serviceSevenImg,
    html: `rated-budget`,
  },
  {
    title: "COMPACTOR-BOMAG",
    image: serviceEightImg,
    html: `emission-class`,
  },
  {
    title: "Truck-Crane",
    image: serviceNineImg,
    html: `brand-kamaz`,
  },
];

export const projects: StaticImageData[] = [
  projectOneImg,
  projectTwoImg,
  projectSixImg,
  projectTenImg,
  projectNineImg,
  projectFourImg,
  projectFiveImg,
  projectSevenImg,
  projectThreeImg,
  projectEightImg,
  projectElevenImg,
  projectTwelveImg,
  projectFifTeenImg,
  projectSixTeenImg,
  projectThirteenImg,
  projectFourteenImg,
  projectSevenTeenImg,
  projectEightTeenImg,
];

export const partners: StaticImageData[] = [
  partnerSixImg,
  partnerOneImg,
  partnerTwoImg,
  partnerFourImg,
  partnerFiveImg,
  partnerThreeImg,
  partnerSevenImg,
  partnerEightImg,
]

export const socialLinks: ISocialLinks[] = [
  {
    link: "https://instagram.com/",
    icon: instagramIcon,
  }, {
    link: "https://twitter.com/",
    icon: twitterIcon,
  }, {
    link: "https://facebook.com/",
    icon: facebookIcon,
  }, {
    link: "https://youtube.com/",
    icon: youtubeIcon,
  },
]