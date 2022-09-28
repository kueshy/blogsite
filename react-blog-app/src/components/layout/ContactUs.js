import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { MailOutline } from "@mui/icons-material";
import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <Grid container>
      <Container
        sx={{
          lineHeight: "28px",
          fontSize: "16px",
          fontWeight: 400,
        }}
        component="main"
        elevation
      >
        <CssBaseline />
        <Grid container elevation>
          <Grid item xs={12} md={6} elevation={6}>
            <Box sx={{ mt: { xs: 6, md: 8 }, mr: 8 }}>
              <Typography
                //   gutterBottom
                sx={{
                  fontSize: { xs: "36px", md: "48px" },
                  // fontWeight: "light",
                  letterSpacing: 0,
                  // lineHeight: "28px",
                }}
                //   variant="h2"
                //   component="h1"
              >
                Contact Us
              </Typography>
              <Typography
                sx={{ lineHeight: { xs: "26px", md: 2 } }}
                color="inherit"
                variant="body2"
                component="p"
              >
                Have a question? We would love to hear from you. You can email
                or use the contact form, and we'll get back to you within 48
                hours.
              </Typography>
              <Typography
                sx={{
                  lineHeight: 2,

                  textDecoration: "underline",
                  // fontWeight: "bold",
                  mt: 2,
                }}
              >
                <Link
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  color="inherit"
                  href="/"
                >
                  <MailOutline
                    sx={{ fontSize: "25px", mr: 0.5, color: "#065b30" }}
                  />
                  eliasemonyi@yahoo.com
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
            elevation
          >
            <Box
              sx={{
                my: { xs: 4, md: 8 },
                mx: { xs: 0, md: 4 },
                display: "flex",
                flexDirection: "column",
                p: { xs: 0, md: 4 },
              }}
            >
              <FormControl>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    mt: 3,
                    // fontWeight: "bold",
                    fontWeight: 500,
                    letterSpacing: 1,
                    fontSize: "20px",
                  }}
                >
                  Full Name*
                </Typography>
                <TextField
                  margin="normal"
                  placeholder="Full Name"
                  fullWidth
                  color="success"
                  autoFocus
                />
              </FormControl>
              <FormControl>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{ mt: 3, fontWeight: 500, letterSpacing: 1 }}
                >
                  Phone Number*
                </Typography>
                <TextField
                  margin="normal"
                  fullWidth
                  placeholder="Phone Number"
                  color="success"
                />
              </FormControl>

              <FormControl>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{ mt: 3, fontWeight: 500, letterSpacing: 1 }}
                >
                  Email Address*
                </Typography>
                <TextField
                  margin="normal"
                  fullWidth
                  placeholder="Email address"
                  color="success"
                />
              </FormControl>

              {/* <FormControl>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{ mt: 3, fontWeight: "bold", letterSpacing: 1 }}
                >
                  Product Interested In*
                </Typography>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="success" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="success" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio color="success" />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl> */}

              <FormControl>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{ mt: 3, fontWeight: 500, letterSpacing: 1 }}
                >
                  Message*
                </Typography>
                <TextField
                  margin="normal"
                  multiline
                  rows={6}
                  placeholder="Hello"
                  color="success"
                />
              </FormControl>

              <Button sx={{ mt: 4, py: 2 }} color="success" variant="contained">
                Send the message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
};

export default ContactUs;
