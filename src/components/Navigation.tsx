import React, { useState, KeyboardEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HumbugerIcon from "@/assets/icons/hamburger";
const logoPath = "/assets/logo.svg";
import Drawer from "@mui/material/Drawer";

interface RightDrawerProps {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const RightDrawer: React.FC<RightDrawerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          padding: "24px",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={logoPath} alt="SAFE Logo" width={138} height={40} />
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
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
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link href="#how-it-works" passHref>
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
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link href="/team" passHref>
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
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
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
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        {/* You can place any content here such as list items, forms, etc. */}
      </Box>
    </Drawer>
  );
};

const NavigationBar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Use the useMediaQuery hook to check the screen size
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        (event as KeyboardEvent).key &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  const handleRequestDemoClick = () => {
    window.open("https://calendly.com/techandtribe/30min", "_blank");
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        background: "#ffffff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 30px" }}>
        {/* Logo and Title */}
        <Link href="/" passHref>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={logoPath} alt="SAFE Logo" width={138} height={40} />
          </Box>
        </Link>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {isLargeScreen && (
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
          )}
          {isLargeScreen && (
            <Link href="#how-it-works" passHref>
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
          )}
          {isLargeScreen && (
            <Link href="/team" passHref>
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
          )}

          {/* Request a Demo Button */}
          {isLargeScreen && (
            <Button
              variant="contained"
              onClick={handleRequestDemoClick}
              sx={{
                backgroundColor: "#1e1e1e",
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
          )}
          {isSmallScreen && (
            <Button onClick={toggleDrawer(true)}>
              <HumbugerIcon />
            </Button>
          )}
        </Box>
      </Toolbar>
      <RightDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default NavigationBar;
