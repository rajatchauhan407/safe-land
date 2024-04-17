import React from 'react';
import { Box, Grid, Typography, Button, Container, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import Image from 'next/image';

const desktopOverlayPath = "/assets/cta-2.png";
const mobileOverlayPath = "/assets/mobile-cta-2.png";

const buttonText = "Book a meeting with us";
const formattedButtonText =
  buttonText.charAt(0).toUpperCase() + buttonText.slice(1).toLowerCase();

const StyledDemoButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1e1e1e",
  color: "#ffffff",
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
  width: '100%', 
}));

const PreFooterSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '50vh', 
      }}
    >
      {isMobile ? (
        <Image
          src={mobileOverlayPath}
          alt="Mobile Overlay"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      ) : (
        <Image
        src={desktopOverlayPath}
        alt="Desktop Overlay"
        width={1800} // Adjust according to your image dimensions
        height={500} // Adjust according to your image dimensions
        objectFit="contain"
        quality={100}
        priority
        />
      )}
      <TextContainer>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: "center" }}>
            <Typography 
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight={800}
              color="#1e1e1e"
              sx={{ fontSize: isMobile ? '32px' : undefined, textAlign: 'center' }} 
            >
              <span style={{ fontWeight: 200 }}>Have</span> questions?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mt: isMobile ? 2 : 3 }}>
            <a href="https://calendly.com/techandtribe/30min" target="_blank" rel="noopener noreferrer">
              <StyledDemoButton variant="contained">
                {formattedButtonText}
              </StyledDemoButton>
            </a>
          </Grid>
        </Grid>
      </TextContainer>
    </Box>
  );
};

export default PreFooterSection;
