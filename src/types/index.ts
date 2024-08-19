import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IParams {
  locale: TLocale;
}

export interface INavLink {
  link: string;
  label: string;
}

export interface IOfferService {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface IAboutUs {
  html: string;
  title: string;
  image: StaticImageData;
}

export interface ILocalesData {
  label: string,
  value: TLocale;
}

export type TService = IAboutUs;

export interface ISocialLinks {
  text?: string;
  link: string;
  icon: StaticImageData;
}

export type TLocale = "uz" | "ru" | "en";