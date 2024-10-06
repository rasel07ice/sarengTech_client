import AboutUs from "@/components/aboutus/AboutUs";
import Banner from "@/components/banner/Banner";
import ContactUs from "@/components/contactus/ContactUs";
import HowItWorks from "@/components/howitworks/HowItWorks";
import ImageGallery from "@/components/imagegallery/ImageGallery";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <ImageGallery />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
