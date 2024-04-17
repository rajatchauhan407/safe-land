import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const IntroSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <Box></Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box></Box>
      </Grid>
    </Grid>
  );
};

export default IntroSection;
