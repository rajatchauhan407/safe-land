import React from 'react';
import { Box, Grid, Typography, Button, Container, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import Image from 'next/image';

const desktopOverlayPath = "/assets/cta-1.png";
const mobileOverlayPath = "/assets/mobile-cta-1.png";

const buttonText = "Request a Demo";
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
}));

const TextContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%', 
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

const CTASection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '50vh', 
      }}
    >
      {isMobile ? ( // Render mobile overlay if isMobile is true
        <Image
          src={mobileOverlayPath}
          alt="Mobile Overlay"
          layout="fill"
          objectFit="fit"
          quality={100}
          priority
        />
      ) : (
        <Image
          src={desktopOverlayPath}
          alt="Desktop Overlay"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      )}
      <TextContainer>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight={800}
                color="#ffffff"
              >
                <span style={{ fontWeight: 200 }}>Try Our</span> App Today!
              </Typography>
              
              <Typography variant="body1" color="#ffffff" sx={{ fontSize: isMobile ? '16px' : '20px'}}>
                Experience the power of SAFE with a live demo! Start your journey to revolutionize safety in your construction company and transform your workplace.
              </Typography>
              <Box mt={3}>
                <a href="https://calendly.com/techandtribe/30min" target="_blank" rel="noopener noreferrer">
                  <StyledDemoButton variant="contained">
                    {formattedButtonText}
                  </StyledDemoButton>
                </a>
              </Box>
            </Grid>
          </Grid>
      </TextContainer>
    </Box>
  );
};

export default CTASection;
