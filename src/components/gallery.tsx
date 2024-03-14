import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Gallery() {
  return (
    <div className="container mx-auto space-y-8 p-32">
      <h1 className="text-center text-5xl font-bold text-primary">Galeri</h1>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    https://www.instagram.com/reel/C4cACK-ymmu/?utm_source=ig_embed&amp;utm_campaign=loading
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
