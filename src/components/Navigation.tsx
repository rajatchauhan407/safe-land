import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const logoPath = "/assets/logo.svg";

const NavigationBar = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ background: "#ffffff", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 30px" }}>
        {/* Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={logoPath} alt="SAFE Logo" width={138} height={40} />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/" passHref>
            <Typography
              variant="button"
              sx={{
                color: "#000",
                textTransform: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/how-it-works" passHref>
            <Typography
              variant="button"
              sx={{
                color: "#000",
                textTransform: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              How it works
            </Typography>
          </Link>
          <Link href="/meet-the-team" passHref>
            <Typography
              variant="button"
              sx={{
                color: "#000",
                textTransform: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Meet the team
            </Typography>
          </Link>

          {/* Request a Demo Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1e1e1e", //
              color: "#ffffff",
              fontWeight: 700,
              borderRadius: "24px",
              textTransform: "none",
              padding: "8px",
              paddingLeft: "40px",
              paddingRight: "40px",
              "&:hover": {
                backgroundColor: "#fd9201",
                color: "#ffffff",
              },
            }}
          >
            Request a Demo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
