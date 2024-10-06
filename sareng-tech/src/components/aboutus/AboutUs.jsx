import { TrainnerCarousel } from "./TrainnerCarousel";

const AboutUs = () => {
  return (
    <div id="aboutus" className="mt-16">
      <div className="text-center space-y-4">
        <div className="sm:flex items-center max-w-screen-xl">
          <div className="sm:w-1/2 p-4">
            <div className="flex justify-center image object-center text-center">
              <img
                className="size-4/5 content-center"
                src="https://i.imgur.com/WbQnbas.png"
              />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-secondary border-b-2 border-primary uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-secondary text-3xl  sm:text-4xl ">
                About <span className="text-indigo-600">Our Company</span>
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla
                numquam obcaecati placeat quia, repellat tempore voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-secondary font-semibold text-center">
          <span className="border-b-2 border-primary">
            Meet with Our Trainner
          </span>
        </h2>
      </div>
      <div>
        <TrainnerCarousel />
      </div>
    </div>
  );
};

export default AboutUs;
