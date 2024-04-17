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
            fontSize: "16px",
            marginTop: 1,
          }}
        >
          {title}
        </Typography>
        {isActive && <Typography sx={{ fontSize: "14px" }}>{text}</Typography>}
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
      text: "Swift reporting for immediate action instant alerts to supervisors and workers.",
      imagePath: reportImagePath,
    },
    {
      iconPath: checkInIconPath,
      title: "GPS Check-In/Check-Out",
      text: "Accurate tracking of worker’s shifts and workforce management for supervisors.",
      imagePath: checkInImagePath,
    },
    {
      iconPath: smsIconPath,
      title: "SMS Notifications",
      text: "Real time updates for stakeholders and emergency services.",
      imagePath: smsImagePath,
    },
    {
      iconPath: sosIconPath,
      title: "One-Touch SOS",
      text: "Workers can instantly alert a supervisor when facing danger with a single touch.",
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
