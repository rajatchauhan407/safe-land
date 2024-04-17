// pages/index.tsx
import React from "react";
import NavigationBar from "@/components/Navigation";
import HeroSection from "../sections/HeroSection";
import IntroSection from "@/sections/IntroSection";
import FeaturesSection from "../sections/FeaturesSection";
import FutureFeaturesSection from "@/sections/FutureFeaturesSection";
import AppPreview from "../sections/CTASection";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <>
      <NavigationBar />

      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <FutureFeaturesSection />
      <AppPreview />

      <Footer />
    </>
  );
};

export default HomePage;
