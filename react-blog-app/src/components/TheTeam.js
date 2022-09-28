import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Footer from "./layout/Footer";

import cover from "../images/cover1.jpg";
import cover2 from "../images/cover2.jpg";
import cover3 from "../images/cover3.jpg";
import cover4 from "../images/cover4.jpg";
import cover5 from "../images/cover6.jpg";
import cover6 from "../images/cover7.jpg";

const TheTeam = () => {
  return (
    <Grid container>
      <Container component="main" sx={{ mt: 8 }}>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 2, md: 8 } }}>
            <Typography
              component="h2"
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "32px", md: "40px" },
                lineHeight: { xs: "44px", md: "52px" },
                opacity: 1,
              }}
            >
              Meet the team behind Codedev Technologies
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Card sx={{ p: 0 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", p: "1rem 1rem 0 1rem", height: "250px" }}
                image={cover2}
              />
              <CardContent>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    fontSize: { xs: "24px", sm: "24px" },
                    // lineHeight: { xs: "36px", sm: "44px" },
                    fontWeight: 500,
                    opacity: 1,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontWeight: 600,
                    mt: 0,
                    opacity: 1,
                  }}
                >
                  Founder
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    // lineHeight: "22px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis quasi reprehenderit ab porro est accusamus
                  exercitationem ratione pariatur laudantium.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Card sx={{ p: 0 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", p: "1rem 1rem 0 1rem", height: "250px" }}
                image={cover6}
              />
              <CardContent>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    fontSize: { xs: "24px", sm: "24px" },
                    // lineHeight: { xs: "36px", sm: "44px" },
                    fontWeight: 500,
                    opacity: 1,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontWeight: 600,
                    mt: 0,
                    opacity: 1,
                  }}
                >
                  Co-founder
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    // lineHeight: "22px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis quasi reprehenderit ab porro est accusamus
                  exercitationem ratione pariatur laudantium.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Card sx={{ p: 0 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", p: "1rem 1rem 0 1rem", height: "250px" }}
                image={cover3}
              />
              <CardContent>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    fontSize: { xs: "24px", sm: "24px" },
                    // lineHeight: { xs: "36px", sm: "44px" },
                    fontWeight: 500,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontWeight: 600,
                    mt: 0,
                  }}
                >
                  Product & Technology
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    // lineHeight: "22px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis quasi reprehenderit ab porro est accusamus
                  exercitationem ratione pariatur laudantium.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Card sx={{ p: 0 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", p: "1rem 1rem 0 1rem", height: "250px" }}
                image={cover4}
              />
              <CardContent>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    fontSize: { xs: "24px", sm: "24px" },
                    lineHeight: { xs: "36px", sm: "44px" },
                    fontWeight: 500,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontWeight: 600,
                    mt: 0,
                  }}
                >
                  strategy and investiments
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis quasi reprehenderit ab porro est accusamus
                  exercitationem ratione pariatur laudantium.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            <Card sx={{ p: 0 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", p: "1rem 1rem 0 1rem", height: "250px" }}
                image={cover5}
              />
              <CardContent>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    fontSize: { xs: "24px", sm: "24px" },
                    lineHeight: { xs: "36px", sm: "44px" },
                    fontWeight: 500,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontWeight: 600,
                    mt: 0,
                  }}
                >
                  finance
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis quasi reprehenderit ab porro est accusamus
                  exercitationem ratione pariatur laudantium.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            <Card sx={{ p: 0 }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", p: "1rem 1rem 0 1rem", height: "250px" }}
                image={cover}
              />
              <CardContent>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{
                    fontSize: { xs: "24px", sm: "24px" },
                    lineHeight: { xs: "36px", sm: "44px" },
                    fontWeight: 500,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    fontWeight: 600,
                    mt: 0,
                  }}
                >
                  Operations
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis quasi reprehenderit ab porro est accusamus
                  exercitationem ratione pariatur laudantium.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
};

export default TheTeam;
