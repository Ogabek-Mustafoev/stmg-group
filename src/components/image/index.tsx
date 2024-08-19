import NextImage, {ImageProps} from 'next/image';
import {FC, LegacyRef} from "react";

interface IImage extends ImageProps {
  wrapperClass?: string;
  imgRef?: LegacyRef<HTMLImageElement>;
}

export const Image: FC<IImage> = (props) => {
  const {wrapperClass = 'rounded-3xl flex-1', imgRef, priority, ...config} = props;

  return (
    <div className={`${wrapperClass} w-full h-full overflow-hidden`}>
      <NextImage
        {...config}
        ref={imgRef}
        placeholder="blur"
        priority={priority}
        loading={priority? "eager":"lazy"}
        className="w-full h-full object-center object-cover hover:scale-110 group-hover:scale-110 transition-700"
      />
    </div>
  )
}