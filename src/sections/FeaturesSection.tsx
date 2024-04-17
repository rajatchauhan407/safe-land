import React, { useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

const featuresImagePath = "/assets/features-1.png";

const reportIconPath = "/assets/features-icon-report.png";
const reportImagePath = "/assets/features-2.png";
const checkInIconPath = "/assets/features-icon-checkin.png";
const checkInImagePath = "/assets/features-3.png";
const smsIconPath = "/assets/features-icon-sms.png";
const smsImagePath = "/assets/features-4.png";
const sosIconPath = "/assets/features-icon-sos.png";
const sosImagePath = "/assets/features-5.png";

interface FeatureCardProps {
  iconPath: string;
  title: string;
  text: string;
  imagePath: string;
  onFeatureSelect: (imagePath: string) => void;
  isActive: boolean;
}

// A reusable card component for features
const FeatureCard: React.FC<FeatureCardProps> = ({
  iconPath,
  title,
  text,
  imagePath,
  onFeatureSelect,
  isActive,
}) => {
  return (
    <Paper
      onClick={() => onFeatureSelect(imagePath)}
      sx={{
        padding: 2,
        marginBottom: 2,
        width: "380px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: isActive ? "#4c4c4c" : "transparent",
        color: "#ffffff",
        border: "1px solid #ffffff",
        borderRadius: "10px",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#4c4c4c",
          cursor: "pointer",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)", // subtle hover effect
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box component="img" src={iconPath} sx={{ width: 45, height: 40 }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "20px",
            marginTop: 1,
          }}
        >
          {title}
        </Typography>
        {isActive && <Typography sx={{ fontSize: "16px" }}>{text}</Typography>}
      </Box>
    </Paper>
  );
};

const FeaturesSection = () => {
  const originalWidth = 793; // Original width of the image
  const originalHeight = 144; // Original height of the image
  const aspectRatio = originalWidth / originalHeight;

  // State to keep track of the active feature
  const [activeFeature, setActiveFeature] = useState({
    image: reportImagePath,
    title: "Incident Report",
  });

  // Function to handle feature selection
  const handleFeatureSelect = (imagePath: string, title: string) => {
    setActiveFeature({ image: imagePath, title });
  };

  // Feature cards data
  const featureCards = [
    {
      iconPath: reportIconPath,
      title: "Incident Report",
      text: "Swiftly report incidents in real-time, ensuring immediate response and resolution.",
      imagePath: reportImagePath,
    },
    {
      iconPath: checkInIconPath,
      title: "GPS Check-In/Check-Out",
      text: "Seamlessly track worker attendance on-site using GPS technology, ensuring accurate and efficient time management.",
      imagePath: checkInImagePath,
    },
    {
      iconPath: smsIconPath,
      title: "SMS Notifications",
      text: "Keep stakeholders informed with real-time SMS notifications, ensuring everyone stays connected and up-to-date.",
      imagePath: smsImagePath,
    },
    {
      iconPath: sosIconPath,
      title: "One-Touch SOS",
      text: "Provide instant access to emergency assistance at the touch of a button, enhancing worker safety.",
      imagePath: sosImagePath,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        position: "relative",
        paddingBottom: 4,
        marginTop: 0,
        minHeight: "100vh",
      }}
    >
      {/* Background image with the word "Features" */}
      <Box sx={{ width: 800, height: "auto", maxWidth: "100%" }}>
        <Image
          src={featuresImagePath}
          alt="Features Background"
          width={800}
          height={800 / aspectRatio}
          layout="responsive"
          objectFit="contain"
          priority
        />
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left section with an image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: "100%", width: "auto", maxWidth: "100%" }}>
            <Image
              src={activeFeature.image}
              alt={activeFeature.title}
              width={500}
              height={670}
              layout="responsive"
              objectFit="contain"
              priority
            />
          </Box>
        </Grid>

        {/* Right section with feature cards */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              iconPath={card.iconPath}
              title={card.title}
              text={card.text}
              imagePath={card.imagePath}
              onFeatureSelect={() =>
                handleFeatureSelect(card.imagePath, card.title)
              }
              isActive={activeFeature.title === card.title}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
