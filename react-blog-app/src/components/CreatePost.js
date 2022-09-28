import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreatePost = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Post
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="title"
            required
            name="title"
            label="Name"
            autoFocus
          />
          <TextField
            margin="normal"
            type="file"
            accept="image/*"
            fullWidth
            required
          />
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 3 }}>
            save post
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreatePost;
