import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const heroBackgroundImagePath = "/assets/hero-1.png";
const smallheroBackgroundImagePath = "/assets/hero-1-small.png";
const phoneImagePath = "/assets/hero-2.png";

const buttonText = "Request a Demo";
const formattedButtonText =
  buttonText.charAt(0).toUpperCase() + buttonText.slice(1).toLowerCase();

const StyledDemoButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fd9201",
  color: "#1e1e1e",
  fontSize: "18px",
  fontWeight: 700,
  borderRadius: "24px",
  textTransform: "none",
  padding: "8px",
  paddingLeft: "40px",
  paddingRight: "40px",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#1e1e1e",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)", // subtle hover effect
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const handleRequestDemoClick = () => {
    window.open("https://calendly.com/techandtribe/30min", "_blank");
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Image
        src={isMdDown ? smallheroBackgroundImagePath : heroBackgroundImagePath}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <Grid container justifyContent="center" style={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            zIndex: 2,
            marginLeft: { xs: 10, md: -50 },
            padding: 0,
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderLeft: 7,
              borderColor: "#fd9201",
              paddingLeft: "25px",
              paddingTop: "10px",
              width: "200px",
              height: "60px",
              marginBottom: "15px",
              marginLeft: "-35px",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              color="#fd9201"
              gutterBottom
              fontWeight={700}
            >
              SAFE
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Site Alert For Emergency
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: "disc",
              padding: 0,
              margin: 0,
              marginLeft: "20px",
              "& li": {
                paddingLeft: "10px",
                paddingTop: "4px",
                paddingBottom: "4px",
              },
            }}
          >
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
          <StyledDemoButton
            variant="contained"
            style={{ marginTop: "25px" }}
            onClick={handleRequestDemoClick}
          >
            {formattedButtonText}
          </StyledDemoButton>
        </Grid>
      </Grid>

      {/* Phone image */}
      {!isMdDown && (
        <Box
          position="absolute"
          top="50%"
          right="20%"
          sx={{
            transform: "translateY(-50%)",
            zIndex: 3,
          }}
        >
          <Image
            src={phoneImagePath}
            alt="Phone"
            width={241.04}
            height={443.73}
            objectFit="contain"
            priority
          />
        </Box>
      )}
    </Container>
  );
};

export default HeroSection;
