import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const introImageOnePath = "/assets/intro-1.png";
const introImageTwoPath = "/assets/intro-2.png";

const IntroSection = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={0} sx={{ marginTop: "40px", marginBottom: 0 }}>
      <Grid item xs={12} md={4}>
        <Box sx={{ width: 418, position: "relative" }}>
          <Image
            src={introImageOnePath}
            alt="Intro Image"
            width={418}
            height={545}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Securing sites,{" "}
            <span style={{ fontWeight: 700 }}>protecting lives.</span>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: theme.spacing(2) }}>
            SAFE is a mobile app that helps construction companies prioritize
            worker safety, enhance emergency response and proactively address
            on-site hazards.
          </Typography>
        </Box>
        <Box sx={{ width: "600px", marginTop: theme.spacing(2) }}>
          <Image
            src={introImageTwoPath}
            alt="Smaller Image"
            width={684}
            height={410}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default IntroSection;
