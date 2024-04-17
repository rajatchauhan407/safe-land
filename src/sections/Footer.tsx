import React from "react";
import { Grid, Typography, Button, useMediaQuery, Box } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const logoSAFE = "/assets/logoSAFE-white.png";
const logoTechTribe = "/assets/tech-tribe-logo.svg";
const proposalDocumentLink = "https://techandtribe-safe.s3.us-east-2.amazonaws.com/SAFE_TechTribe.pdf";

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  color: '#ffffff',
  padding: '40px 20px',
  display: 'flex',  
  alignItems: 'center', 
  justifyContent: 'center'
}));

const buttonText = "Download Proposal";
const formattedButtonText =
  buttonText.charAt(0).toUpperCase() + buttonText.slice(1).toLowerCase();

const StyledDemoButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fd9201",
  color: "#1e1e1e",
  fontWeight: 700,
  fontSize: "18px",
  borderRadius: "24px",
  textTransform: "none",
  padding: "8px",
  paddingLeft: "40px",
  paddingRight: "40px",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#1e1e1e",
  },
  // Added to prevent full width
  width: "fit-content",
}));

const NavItem = styled("a")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 400,
  textDecoration: "none",
  color: "#ffffff",
  marginLeft: "30px",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#fd9201",
    fontWeight: 600,
  },
}));

const Footer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <FooterContainer>
      <Box sx={{width:"95%"}}>
      <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
        {/* Left Column */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: isMobile ? "center" : "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <Image src={logoSAFE} alt="SAFE Logo" width={130} height={35} />
          </div>
          <Typography variant="body2" fontSize={"16px"} gutterBottom>
            Vancouver B.C, Canada
          </Typography>
          <Typography variant="body2" fontSize={"16px"} marginBottom={3}>
            © 2024 Site Alert For Emergency. All rights reserved
          </Typography>
          <a href={proposalDocumentLink} download target="_blank">
            <StyledDemoButton variant="contained">
              {formattedButtonText}
            </StyledDemoButton>
          </a>
        </Grid>

        {/* Right Column */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: isMobile ? "center" : "right",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="body2">
            <NavItem href="/">Home</NavItem>
            <NavItem href="#how-it-works">How it works</NavItem>
            <NavItem href="/team">Meet the team</NavItem>
          </Typography>
          <div
            style={{
              textAlign: isMobile ? "center" : "right",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ marginRight: "10px" }}>
              Powered by
            </Typography>
            <Image
              src={logoTechTribe}
              alt="Tech Tribe Logo"
              width={100}
              height={100}
            />
          </div>
        </Grid>
      </Grid>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
