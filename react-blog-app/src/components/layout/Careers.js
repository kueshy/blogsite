import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "./Footer";

const Careers = () => {
  return (
    <Grid container>
      <Container component="main" sx={{ height: "100vh" }}>
        <Grid
          container
          sx={{
            // mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CssBaseline />
          <Grid item xs={12} sm={8} md={6}>
            <Box
              sx={{
                mt: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "36px", md: "50px" }, letterSpacing: 0 }}
              >
                Join Us. Be You!
              </Typography>
              <Typography
                component="p"
                sx={{
                  textAlign: "center",
                  lineHeight: "26px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: { xs: "#000", md: "inherit" },
                }}
              >
                This is where individual passions come together, committing to
                the values that lead to bringing a real & positive impact. Here
                you will not be just joining- you’ll be creating something big!
              </Typography>
              <Button
                color="success"
                variant="contained"
                sx={{ px: 8, py: 2, mt: 3 }}
              >
                Join Us
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <CssBaseline />
          <Grid item xs={12} md={6} sx={{ mt: 8 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "32px", md: "40px" },
                lineHeight: { sx: "44px", md: "52px" },
              }}
            >
              Our Values: We Are BOLT
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "14px", lineHeight: "26px" }}
            >
              A bolt of lightning can carry 300 million volts of electricity
              which is enough to power a 100 Watt bulb for a year!!! TAZAH
              aspires to be that bolt which sparks a revolution in the agri
              value chain.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
};

export default Careers;
