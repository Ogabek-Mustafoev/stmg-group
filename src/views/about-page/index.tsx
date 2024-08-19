import {BannerContent, MotionEl} from "@/components";
import {aboutUsData} from "@/constants";
import parse from "html-react-parser";
import {useTranslations} from "next-intl";
import {FC} from "react";

export const AboutPage: FC = () => {
  const t = useTranslations("about");

  return (
    <section className="page flex flex-col gap-5">
      {aboutUsData.map(({image, html, title}, idx) => (
        <BannerContent
          key={title}
          delay={idx / 10}
          isRowRevers={!(idx % 2)}
          containerClass="gap-8"
          image={{src: image, alt: t(title)}}
        >
          <MotionEl delay={idx / 10} direction={!(idx % 2) ? "left" : "right"}
                    className="w-full md:w-[47%] flex gap-3 text-lg font-medium pt-6 flex-col">
            <h2 className="heading mb-4">{t(title)}</h2>
            {parse(t.raw(html))}
          </MotionEl>
        </BannerContent>
      ))}
    </section>
  )
}