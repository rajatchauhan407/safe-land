import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

// Corrected paths that start from the base of the public directory
const heroBackgroundImagePath = "/assets/hero-1.png";
const phoneImagePath = "/assets/hero-2.png";

// Styled components for custom styles
const HeroContainer = styled(Container)({
  position: "relative", // Relative because it will contain absolutely positioned elements
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledDemoButton = styled(Button)({
  // Your button styles
  zIndex: 2,
});

const HeroSection = () => {
  return (
    <HeroContainer maxWidth={false}>
      {/* Background image */}
      <Image
        src={heroBackgroundImagePath}
        alt="Background"
        layout="fill"
        objectFit="fill"
        quality={100}
        priority
      />

      {/* Text content */}
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
            textAlign: "left",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            color="primary.main"
            gutterBottom
          >
            SAFE
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Site Alert For Emergency
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
            <Typography component="li" variant="subtitle1">
              Real-time hazard alerts
            </Typography>
            <Typography component="li" variant="subtitle1">
              Streamlined one-touch reporting
            </Typography>
            <Typography component="li" variant="subtitle1">
              Swift emergency response
            </Typography>
          </Box>
          <StyledDemoButton variant="contained">
            Request a Demo
          </StyledDemoButton>
        </Grid>

        {/* Phone image */}
        <Grid item xs={12} md={8}>
          <Box
            position="absolute"
            top="50%"
            right="17%"
            style={{ transform: "translateY(-45%)" }}
            zIndex="3"
          >
            <Image
              src={phoneImagePath}
              alt="Phone"
              width={300} // Set the width to the size of the image you need
              height={600} // Set the height to the size of the image you need
              objectFit="contain"
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

export default HeroSection;
