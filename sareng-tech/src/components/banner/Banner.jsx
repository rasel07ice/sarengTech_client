import { Button } from "../ui/button";
import { CarouselPlugin } from "./CarouselPlugin";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 grid-col md:grid-cols-2 items-center">
        <div className="space-y-3 order-2 md:order-1">
          <h2 className="text-xl md:text-3xl font-semibold text-secondary">
            Expand Your carrier opportunities with our courses
          </h2>
          <p className="text-sm md:text-lg">
            Learn new job skills in online courses from industry leaders like
            Google, IBM, & Meta. Advance your career with top degrees from
            recognised Institute
          </p>
          <Button>See more</Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:-skew-x-12">
          <CarouselPlugin></CarouselPlugin>
        </div>
      </div>
    </div>
  );
};

export default Banner;
