import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Container component="main">
      <Grid container sx={{ mt: 10, mb: 5 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: { xs: "center", md: "flex-start" },
                ml: 0,
                mb: { xs: 2, md: 8 },
                gap: 3,
              }}
            >
              <Avatar sx={{ bgcolor: "#065b30" }}>
                <TwitterIcon />
              </Avatar>

              <Avatar sx={{ bgcolor: "#065b30" }}>
                <LinkedInIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "#065b30" }}>
                <InstagramIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: "success.main" }}>
                <FacebookIcon />
              </Avatar>
            </Box>
            <Typography
              sx={{
                fontSize: "26px",
                fontWeight: 500,
                textAlign: { xs: "center", md: "start" },
              }}
            >
              CodedevTech
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "center" },
            fontSize: "14px",
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "16px" }}>
            Links
          </Typography>
          <Typography sx={{ lineHeight: "28px" }}>Home</Typography>
          <Typography sx={{ lineHeight: "28px" }}>Newsroom</Typography>
          <Typography sx={{ lineHeight: "28px" }}>Contact Us</Typography>
          <Typography sx={{ lineHeight: "28px" }}>Our Team</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start", md: "center" },
            lineHeight: "24px",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "16px" }}>
            What we do
          </Typography>
          <Typography sx={{ fontWeight: "", lineHeight: "28px" }}>
            Code
          </Typography>
          <Typography sx={{ fontWeight: "", lineHeight: "28px" }}>
            Write
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
