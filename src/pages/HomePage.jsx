import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import OurSuccess from "../components/OurSuccess";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <OurSuccess />
      <OurServices />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
