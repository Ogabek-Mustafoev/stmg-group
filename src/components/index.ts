import {locales} from "@/constants";
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export {Hero} from './hero';
export {Image} from './image';
export {Header} from './header';
export {Footer} from './footer';
export {Gallery} from './gallery';
export {Contact} from './contact';
export {MotionEl} from './motion-el';
export {MainInput} from './main-input';
export {OfferCard} from './offer-card';
export {BriefIntro} from './brief-intro';
export {BaseLayout} from './base-layout';
export {ServiceCard} from './service-card';
export {FrozenRoute} from './frozen-route';
export {ContactForm} from './contact/form';
export {ContactModal} from './contact/modal';
export {BannerContent} from './banner-content';
export {HamburgerIcon} from './hamburger-icon';
export {PageTransition} from './page-transition';
export {LocaleSwitcher} from './locale-switcher';

export const {Link, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
