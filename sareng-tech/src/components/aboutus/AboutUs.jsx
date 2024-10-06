import { TrainnerCarousel } from "./TrainnerCarousel";

const AboutUs = () => {
  return (
    <div id="aboutus" className="mt-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl text-secondary">About US</h2>
      </div>
      <div>
        <TrainnerCarousel />
      </div>
    </div>
  );
};

export default AboutUs;
