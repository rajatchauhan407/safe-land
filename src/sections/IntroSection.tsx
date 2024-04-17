import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const introImageOnePath = "/assets/intro-1.png";
const introImageTwoPath = "/assets/intro-2.svg";
const introImageTwoSmallPath = "/assets/intro-2-mobile.svg";

const IntroSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={0} sx={{ marginTop: "40px", marginBottom: 0 }}>
      {/* Make this Grid item take up the full width at smaller sizes */}
      <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={{ maxWidth: "100%", height: "auto", position: "relative" }}>
          <Image
            src={introImageOnePath}
            alt="Intro Image"
            width={418}
            height={545}
            layout="responsive"
            objectFit={isMdDown ? "cover" : "contain"} // Use "cover" to avoid aspect ratio distortion on smaller screens
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
          mx: { xs: 2, md: 0 }, // Adjust margins
          mb: { xs: 2, md: 0 }, // Adjust bottom margin
        }}
      >
        <Box
          sx={{ maxWidth: "500px", textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Securing sites,{" "}
            <span style={{ fontWeight: 700 }}>protecting lives.</span>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: theme.spacing(2) }}>
            SAFE is a mobile app that helps construction companies prioritize
            worker safety, enhance emergency response, and proactively address
            on-site hazards.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "600px" },
            marginTop: theme.spacing(2),
          }}
        >
          <Image
            src={isMdDown ? introImageTwoSmallPath : introImageTwoPath}
            alt="Responsive Image"
            width={isMdDown ? 600 : 684}
            height={isMdDown ? 360 : 410}
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
