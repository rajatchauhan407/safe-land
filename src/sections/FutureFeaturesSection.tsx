import React from "react";
import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import Image from "next/image";

const IconSimulation = "/assets/future-features1.svg";
const IconFirstAid = "/assets/future-features2.svg";
const IconAccidentHistory = "/assets/future-features3.svg";

interface FeatureCardProps {
  iconUrl: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconUrl,
  title,
  description,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        pb: 5,
        m: 1,
        borderRadius: 4,
        border: "1px solid #1E1E1E",
        background: "#FFFFFF",
        height: 180,
        ":hover": {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // subtle hover effect
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ my: 2 }}>
          <Image src={iconUrl} alt={title} width={48} height={48} />
        </Box>
        <Typography variant="subtitle1" fontWeight="bold" color="#4a4a4b">
          {title}
        </Typography>
        <Typography variant="body2" color="#6e6e73">
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

const FutureFeaturesSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, p: 10, backgroundColor: "#F8F8FF" }}>
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        mb={2}
        color={"#4a4a4b"}
      >
        <strong>Features</strong>{" "}
        <span style={{ fontWeight: 300 }}>Coming Soon</span>
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={4}>
          <FeatureCard
            iconUrl={IconSimulation}
            title="Simulation"
            description="Simulate emergency scenarios to train and prepare workers for real-life situations."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            iconUrl={IconFirstAid}
            title="First Aid Instructions"
            description="Access first aid instructions providing essential guidance during emergencies."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            iconUrl={IconAccidentHistory}
            title="Accident History"
            description="Access past incidents data for insights and proactive safety enhancements."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FutureFeaturesSection;
