import { cn } from "@/lib/utils";
import React from "react";

import { siteConfig } from "@/configs/site";

interface ActivityProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: string;
    description: string;
  }[];
  title: string;
  subtitle: string;
}

export const Activity = (props: Partial<ActivityProps>) => {
  const {
    data = siteConfig.activity.data,
    title = siteConfig.activity.heading,
    subtitle = siteConfig.activity.subHeading,
    ...rest
  } = props;

  return (
    <div
      className="container mx-auto flex flex-col-reverse items-center gap-8 py-16 md:flex-row"
      {...rest}
    >
      <div className="relative grow basis-1/2 space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-xl border bg-white p-8 shadow-sm sm:w-full md:w-2/3",
              {
                "md:left-1/2 md:translate-x-1/2": index % 2 === 0,
              },
            )}
          >
            <h1 className="break-words text-5xl font-bold text-primary md:text-left md:text-7xl">
              {item.title}
            </h1>
            <div className="border-l-4 border-primary pl-2">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="basis-1/2">
        <div>
          <h1 className="text-center text-5xl font-bold text-primary md:text-left md:text-7xl">
            {title}
          </h1>
          <h2 className="text-center  text-xl text-gray-600 md:text-left md:text-3xl">
            {subtitle}
          </h2>
        </div>
      </div>
    </div>
  );
};
