import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Footer from "./layout/Footer";
// import { Link } from "react-router-dom";

const NewsRoom = (props) => {
  return (
    <Grid container>
      <Container component="main">
        <CssBaseline />
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            // flexDirection: "row",
            alignItems: { xs: "flex-start", md: "center" },
            mt: { xs: 4, md: 8 },
            mb: { xs: 3, md: 5 },
            // p: "24px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "40px" },
              lineHeight: { xs: 2, md: 1 },
              letterSpacing: 1,
              flexGrow: { xs: 0, md: 1 },
            }}
          >
            Newsroom
          </Typography>
          <Typography
            component="h1"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              color="inherit"
              sx={{
                textDecoration: "none",
                fontWeight: 500,
                lineHeight: { xs: "16px" },
                "&:hover": {
                  textDecoration: "underline",
                },
                fontSize: { xs: "12px", md: "16px" },
              }}
              href="/"
            >
              Newsroom page &ensp;
            </Link>
            <ArrowForward />
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {props.data.map((article) => (
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // flexWrap: "wrap",
                // gap: 3,
                margin: { xs: "0 auto" },
              }}
            >
              <Link
                sx={{ textDecoration: "none" }}
                href={`/article/${article.id}/`}
              >
                <Card
                  sx={{
                    maxWidth: { sx: 345, sm: 360 },
                    // width: { xs: "100%", md: "365px" },
                    // backgroundColor: "#fafafa",
                  }}
                >
                  <CardMedia
                    component="img"
                    // sx={{ width: { xs: "100%" } }}
                    sx={{ height: 300 }}
                    image={article.image}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          flexGrow: 1,
                        }}
                      >
                        ARTICLE
                      </Typography>
                      <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                        Date
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        // fontWeight: "bold",
                        fontSize: "25px",
                        letterSpacing: 1,
                      }}
                      variant="h6"
                      component="h1"
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempore non provident eos! Veritatis ratione quibusdam
                      harum
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
};

export default NewsRoom;
