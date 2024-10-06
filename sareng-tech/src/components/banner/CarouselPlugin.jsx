import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full md:w-2/3 max-w-2/3 border-none"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="">
            <Card className="border-none">
              <CardContent className="flex aspect-square items-center justify-center p-1 ">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/Duke_JavaProgrammingIntrotoSoftware_CM195522.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50"
                  alt="carousel one"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card className="border-none">
              <CardContent className="flex aspect-square items-center justify-center p-1 ">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/4dcbc397754fb880094f4ebde1fdb5/Java-Full-Stack-Developer-specialization-2-.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50"
                  alt="carousel Two"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card className="border-none">
              <CardContent className="flex aspect-square items-center justify-center p-1 ">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/35/427ed98b824edaa6508aacce0e48db/Object-Oriented-Programming-with-Java-Principal.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&q=50&fit=crop"
                  alt="carousel one"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card className="border-none">
              <CardContent className="flex aspect-square items-center justify-center p-1 ">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/78/bf51e094c211e78308116c229500da/WA4E_thumbnail_JS_1x1.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&q=50&fit=crop"
                  alt="carousel one"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card className="border-none">
              <CardContent className="flex aspect-square items-center justify-center p-1 ">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/5f/ea0c7ae5a24823b57658bbcfdceb10/JavaScript-for-Web-Development.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&q=50&fit=crop"
                  alt="carousel five"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
