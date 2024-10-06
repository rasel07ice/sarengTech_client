import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";

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

  const trainers = [
    {
      id: 1,
      name: "Oren Abbou",
      PhotoUrl: "https://img-c.udemycdn.com/user/200_H/44536464_88f8_3.jpg",
      designation: "A Director of Software Development, and an ISE Bsc.",
      rating: "4.6 Instructor Rating",
      review: "1,095",
      students: "13,763 Students",
      courses: 3,
    },
    {
      id: 2,
      name: "Arun Singhal B-Tech",
      PhotoUrl: "https://img-c.udemycdn.com/user/200_H/170518208_0614.jpg",
      designation: "Management Coach and Mentor with 40 years experience.",
      rating: "4.4 Instructor Rating",
      review: "1,078",
      students: "14,766 Students",
      courses: 45,
    },
    {
      id: 3,
      name: "Bartosz Kaminski",
      PhotoUrl: "https://img-c.udemycdn.com/user/200_H/44536464_88f8_3.jpg",
      designation: "Expert IT Developer",
      rating: "4.7 Instructor Rating",
      review: "1,094",
      students: "13,767 Students",
      courses: 1,
    },
    {
      id: 4,
      name: "Karani Geoffrey",
      PhotoUrl: "https://img-c.udemycdn.com/user/200_H/73076870_66d9_2.jpg",
      designation:
        "Python | JavaScript | Frappe | Dart | Flutter | Next | React",
      rating: "4.8 Instructor Rating",
      review: "1,095",
      students: "13,756 Students",
      courses: 2,
    },
    {
      id: 5,
      name: "Victor Lins",
      PhotoUrl: "https://img-c.udemycdn.com/user/200_H/169999458_99ec_3.jpg",
      designation: "Software Engineering",
      rating: "4.7 Instructor Rating",
      review: "1,095",
      students: "13,763 Students",
      courses: 5,
    },
    {
      id: 6,
      name: "Yogesh Dahake",
      PhotoUrl: "https://img-c.udemycdn.com/user/200_H/28593856_f58c_5.jpg",
      designation: "Lead Software Developer",
      rating: "4.6 Instructor Rating",
      review: "1,095",
      students: "13,761 Students",
      courses: 7,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-12">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {trainers.map((trainer, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="">
                <Card className="border-none">
                  <CardContent className="flex items-center justify-center p-2">
                    <div className="bg-slate-400 rounded-md shadow-md">
                      <div className="flex shadow-md gap-3 rounded bg-gray-100 p-3">
                        <img
                          className="rounded-full size-32 object-cover"
                          src={trainer?.PhotoUrl}
                          alt=""
                        />
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold">
                            {" "}
                            {trainer?.name}
                          </h3>
                          <p className="flex items-center gap-2">
                            <FaStar className="text-primary" />{" "}
                            {trainer?.rating}
                          </p>
                          <p className="flex items-center gap-2">
                            <MdOutlinePreview />{" "}
                            {trainer?.designation?.slice(0, 15)}
                          </p>
                          <p className="flex items-center gap-2">
                            <FaPeopleGroup /> {trainer?.students}
                          </p>
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
