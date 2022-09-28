import React from "react";
import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import image from "../images/cover.jpg";
import cover1 from "../images/cover1.jpg";
import cover2 from "../images/cover2.jpg";
import cover4 from "../images/cover4.jpg";
import cover6 from "../images/cover6.jpg";
import cover7 from "../images/cover7.jpg";
import cover8 from "../images/cover8.jpg";
import cover9 from "../images/cover8.jpg";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Home = () => {
  const sectionStyle = {
    height: "100vh",

    backgroundImage: "url('../images/cover.jpg') ",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <Grid
        container
        component="main"
        // style={sectionStyle}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Box xs={12}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              backgroundImage: `url(${cover9})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: { xs: 20, md: 7 },
                // padding: { xs: "5px 24px" },
              }}
            >
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  padding: "0 24px",
                  textTransform: "capitalize",
                  fontSize: { xs: "24px", sm: "48px" },
                  textAlign: "center",
                  lineHeight: { xs: "36px", sm: "60px" },
                  fontWeight: { xs: 500, md: 400 },
                }}
              >
                Digitizing our local business to connect with a larger community
              </Typography>
            </Grid>
          </Grid>
          <Container>
            <Grid container sx={{ mt: { xs: 5, md: 10 } }}>
              <Grid xs={12} md={6} item>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "32px",
                      md: "40px",
                    },
                    lineHeight: { xs: "44px", sm: "52px" },
                    // fontWeight: 600,
                    opacity: 1,
                    textTransform: "capitalize",
                  }}
                >
                  How we are making a difference.
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: { xs: "18px", md: "26px" },
                    fontWeight: 500,
                  }}
                >
                  Tazah Technologies is building products to digitize the
                  agriculture value chain, empowering farmers, suppliers, and
                  retailers to grow their businesses.
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </Box>
      </Grid>
    </>
  );
};

export default Home;
