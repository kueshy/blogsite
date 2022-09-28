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
      {/* <Container>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

          <Typography component="p" variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quis
            quos nihil, rerum eos, ab sit corporis Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus repellendus sunt expedita iusto
            eos eius? Natus fuga, aperiam nisi ipsa deleniti officia a rerum, in
            asperiores temporibus, iste dolorum modi! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Illum nisi, vel veniam itaque
            nihil numquam ut, porro totam neque assumenda corporis temporibus
            similique consequatur laborum cumque facere voluptatum omnis
            recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae dicta explicabo aliquid consequuntur. Voluptatem omnis,
            enim, quia corrupti aliquam iste in animi eligendi dolores soluta,
            harum optio architecto sunt porro. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cumque dolor fuga numquam nihil
            pariatur. Itaque quis atque rerum ipsa laborum nobis iusto error
            provident, ab optio laudantium expedita voluptates tenetur! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Numquam sed est
            et mollitia culpa? Quis, facere delectus hic cum, amet, provident
            repudiandae vel laudantium mollitia iure placeat sequi beatae rem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            obcaecati necessitatibus, sequi perspiciatis corrupti fuga sed qui
            omnis quibusdam aliquid dolore sapiente fugiat fugit. Ex rem ab
            exercitationem blanditiis obcaecati? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Omnis aliquam dolor aperiam repellat
            laborum a, error facilis at odio ratione delectus explicabo nostrum
            odit quidem minima animi exercitationem earum ducimus! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Est adipisci eum iusto
            illo voluptate voluptatum distinctio molestias saepe temporibus
            animi quasi ut obcaecati, excepturi repellat ad qui. Reiciendis,
            facilis repellendus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sit molestiae exercitationem consectetur non, eum
            quos culpa, alias rerum, et nesciunt vero distinctio voluptates!
            Neque obcaecati iste labore expedita dicta sapiente!
          </Typography>
        </Box>
      </Container> */}
    </Box>
  );
};

export default Nav;
