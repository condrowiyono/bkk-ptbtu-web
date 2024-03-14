import Image from "next/image";
import { siteConfig } from "@/configs/site";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  subHeading: string;
  image1: string;
  image2: string;
  image3: string;
}
export const Hero = (props: Partial<HeroProps>) => {
  const {
    heading = siteConfig.hero.heading,
    subHeading = siteConfig.hero.subHeading,
    image1 = siteConfig.hero.image1,
    image2 = siteConfig.hero.image2,
    image3 = siteConfig.hero.image3,
    ...rest
  } = props;

  return (
    <div
      className="flex h-full bg-gradient-to-b from-transparent to-white"
      {...rest}
    >
      <div className="container mx-auto flex flex-col-reverse  items-center justify-between gap-4 px-12 md:flex-row">
        <div className="basis-3/5 space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold md:text-7xl ">{heading}</h1>
          <p className="text-xl md:text-2xl">{subHeading}</p>
          <p className="text-gray-600">oleh PT Baja Titian Utama</p>
        </div>
        <div className="my-12 grid w-full basis-2/5 grid-cols-2 gap-2 md:my-32">
          <div className="relative col-span-2 h-64 w-full">
            <Image
              className="rounded-lg"
              src={image1}
              alt="Jembatan Callender Hamilton"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="relative hidden h-56 w-full sm:block">
            <Image
              className="rounded-lg shadow-sm"
              src={image2}
              alt="Jembatan Callender Hamilton"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative hidden h-56 w-full sm:block">
            <Image
              className="rounded-lg"
              src={image3}
              alt="Jembatan Callender Hamilton"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
