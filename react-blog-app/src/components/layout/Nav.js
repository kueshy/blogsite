import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "@mui/system";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Container
            // component="main"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              py: { xs: 1.5, md: 3.5 },
            }}
          >
            <Typography
              component="a"
              variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: { xs: 500, sm: 500 },
                letterSpacing: 1,
              }}
            >
              CodebindTech
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              sx={{ display: { sm: "none" } }}
              onClick={handleMobileOpen}
              onClose={handleMobileOpen}
            >
              <MenuIcon />
            </IconButton>
            <Box
              color="inherit"
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Typography
                color="inherit"
                // component="h2"
                // variant="h6"
                sx={{
                  "&:hover": {
                    borderBottom: "2px solid #065b30",
                  },
                }}
              >
                <Link
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: 500,
                    "&:hover": {
                      opacity: 0.7,
                    },
                    m: 1,
                  }}
                >
                  Home
                </Link>
              </Typography>

              <Typography
                sx={{
                  "&:hover": {
                    borderBottom: "2px solid #065b30",
                  },
                }}
                color="inherit"
              >
                <Link
                  component={RouterLink}
                  color="#000"
                  to="/news"
                  sx={{
                    textDecoration: "none",
                    fontWeight: 500,
                    "&:hover": {
                      opacity: 0.7,
                    },
                    m: 1,
                  }}
                >
                  Articles
                </Link>
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    borderBottom: "2px solid #065b30",
                  },
                }}
              >
                <Link
                  component={RouterLink}
                  sx={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: 500,
                    "&:hover": {
                      opacity: 0.7,
                    },
                    m: 1,
                  }}
                  color="inherit"
                  to="/team"
                >
                  Our Team
                </Link>
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    borderBottom: "2px solid #065b30",
                  },
                }}
                color="inherit"
              >
                <Link
                  component={RouterLink}
                  color="#000"
                  to="/contribute"
                  sx={{
                    textDecoration: "none",
                    fontWeight: 500,
                    m: 1,
                    "&:hover": {
                      opacity: 0.7,
                    },
                    fontWeight: 500,
                  }}
                >
                  Contribute
                </Link>
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    borderBottom: "2px solid #065b30",
                  },
                }}
                color="inherit"
              >
                <Link
                  component={RouterLink}
                  color="#000"
                  to="/contact"
                  sx={{
                    textDecoration: "none",
                    fontWeight: 500,
                    m: 1,
                    "&:hover": {
                      opacity: 0.7,
                    },
                    fontWeight: 500,
                  }}
                >
                  Contact Us
                </Link>
              </Typography>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Toolbar />
        <Drawer
          variant="temporary"
          open={mobileOpen}
          ModalProps={{ keepMounted: true }}
          onClose={handleMobileOpen}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
          }}
        >
          <React.Fragment>
            <Box onClick={handleMobileOpen}>
              <Toolbar>
                <Box sx={{ py: 2 }}>
                  <Typography variant="h6" component="a">
                    CodebindTech
                  </Typography>
                </Box>
              </Toolbar>
              <Divider />
              <List>
                <ListItem button component={RouterLink} to="/">
                  <ListItemText primary="Home" sx={{ fontSize: "200px" }} />
                </ListItem>
                <ListItem button component={RouterLink} to="/team">
                  <ListItemText primary="Our Team" />
                </ListItem>
                <ListItem button component={RouterLink} to="/contribute">
                  <ListItemText primary="Contribute" />
                </ListItem>
                <ListItem button component={RouterLink} to="/news">
                  <ListItemText primary="Articles" />
                </ListItem>
                <ListItem button component={RouterLink} to="/contact">
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <Divider sx={{ mt: 2 }} />
              </List>
            </Box>
          </React.Fragment>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
