import MasonaryImageGrid from "./MasonaryImageGrid";

const ImageGallery = () => {
  return (
    <div className="mt-16">
      <div className="mb-8">
        <h2 className="text-secondary text-4xl font-semibold text-center">
          Image Gallery
        </h2>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-4xl text-primary font-semibold">
            We are here to make your dreams comes true
          </h3>
        </div>
        <div>
          <p className="text-lg">
            Sareng Tech empowers you to master AI, onboard quicker, deliver
            faster, upgrade your skills, build tech fluency, upskill teams,
            collaborate better
          </p>
        </div>
      </div>
      <div >
        <MasonaryImageGrid />
      </div>
    </div>
  );
};

export default ImageGallery;
