import React from "react";
import BannerSlider from "../components/BannerSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import CommonQuestions from "../components/CommonQuestions";
import bannerImage from "../assets/images/Frame 6.png"; 
import CustomerTestimonials from "../components/CustomerTestimonials";

function Home() {
  return (
    <div className="mt-30 md:mt-30 lg:mt-30 bg-[#FFF8F0]">
      <BannerSlider />
      <WhyChooseUs />
      <div className="w-full">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <CommonQuestions />
      <CustomerTestimonials />
    </div>
  );
}

export default Home;
