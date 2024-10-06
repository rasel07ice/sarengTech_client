import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

export function TrainnerCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center items-center mt-12">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="">
                <Card className="border-none ">
                  <CardContent className="flex items-center justify-center p-0">
                    <div className="bg-slate-400 rounded-md shadow-md">
                      <div className="flex shadow-sm gap-3 rounded bg-gray-100  p-3">
                        <img
                          className="rounded-full w-32"
                          src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                          alt=""
                        />
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold">Erin Lindford</h3>
                          <span>Product engineer</span>
                          <Button>View Skills</Button>
                        </div>
                      </div>
                    </div>
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
