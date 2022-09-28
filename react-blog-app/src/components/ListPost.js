import React from "react";
import Button from "@mui/material/Button";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function ListPost(props) {
  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12} md={8} component={Paper} elevation sx={{ mt: 1 }}>
        <Box
          sx={{
            my: 4,
            mx: 8,
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            gap: 2,
          }}
        >
          {props.data.map((post) => (
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="400" image={post.image} />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{}}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita tempora, deleniti consectetur sit doloribus soluta.
                    Soluta veniam fugit voluptatibus suscipit perferendis? Unde
                    cupiditate, nulla veritatis at ea facere quo dicta.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ListPost;
