// pages/index.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";
import NavigationBar from "@/components/Navigation";
import HeroSection from "../sections/HeroSection";
import IntroSection from "@/sections/IntroSection";
import FeaturesSection from "../sections/FeaturesSection";
import AppPreview from "../sections/CTASection";
import PreFooterSection from "@/sections/PreFooter";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <>
      <NavigationBar />

      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <AppPreview />
      <PreFooterSection />
      <Footer />
    </>
  );
};

export default HomePage;
