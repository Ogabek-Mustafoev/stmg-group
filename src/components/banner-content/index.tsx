import {Image, MotionEl} from "@/components";
import {StaticImageData} from "next/image";
import {FC, ReactNode} from "react";

interface IBannerContent {
  image: {
    alt: string;
    src: StaticImageData;
  };
  delay?: number;
  priority?: boolean;
  children: ReactNode;
  isRowRevers?: boolean;
  wrapperClass?: string;
  containerClass?: string;
}

export const BannerContent: FC<IBannerContent> = (props) => {
  const {
    image,
    delay,
    priority,
    children,
    isRowRevers,
    wrapperClass = "py-5",
    containerClass = "gap-4",
  } = props;

  return (
    <div className={wrapperClass}>
      <div
        className={`${containerClass} container flex flex-col ${isRowRevers ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <MotionEl
          delay={delay}
          className="flex-1"
          direction={isRowRevers ? "right" : "left"}
        >
          <Image priority={priority} alt={image.alt} src={image.src}/>
        </MotionEl>
        {children}
      </div>
    </div>
  )
}