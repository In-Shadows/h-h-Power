import React from "react";

import HeroSection from "../components/heroSection/HeroSection";
import SmartHome from "../components/smartHome/SmartHome";
import Services from "../components/services/Services";
import Design from "../components/design/Design";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SmartHome />
      <Services />
      <Design />
      <Footer />
    </>
  );
};

export default HomePage;
