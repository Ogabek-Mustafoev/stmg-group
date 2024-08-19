"use client"

import {Image, MotionEl} from "@/components";
import {StaticImageData} from "next/image";
import {FC} from "react";
import {Gallery as PhotoSwipeGallery, Item} from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

interface IGallery {
  images: StaticImageData[];
  className?: string;
}

export const Gallery: FC<IGallery> = ({images, className = "grid-3"}) => {
  return (
    <PhotoSwipeGallery options={{wheelToZoom: true}}>
      <div className={className}>
        {images.map((image, index) => (
          <Item
            key={index + "-key"}
            original={image.src}
            thumbnail={image.src}
            width={image.width * 2}
            height={image.height * 2}
            alt={index + '-gallery'}
          >
            {({ref, open}) => (
              <MotionEl delay={index / 10}>
                <Image
                  src={image}
                  imgRef={ref}
                  onClick={open}
                  wrapperClass="rounded-xl cursor-pointer"
                  alt={`Gallery Image ${index + 1}`}
                />
              </MotionEl>
            )}
          </Item>
        ))}
      </div>
    </PhotoSwipeGallery>
  )
}