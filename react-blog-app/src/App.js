import { useEffect, useState } from "react";
// import "./App.css";
import Auth from "./components/auth/Auth";
import ListPost from "./components/ListPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Header from "./components/layout/Header";
import NewsRoom from "./components/NewsRoom";
import ContactUs from "./components/layout/ContactUs";
import Careers from "./components/layout/Careers";
import Article from "./components/Article";
import Home from "./components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import TheTeam from "./components/TheTeam";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/posts/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((err) => console.log(err));
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      color: "#fff",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          {/* <Header /> */}
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/posts" element={<ListPost data={data} />} />
            <Route path="/post/new" element={<CreatePost />} />
            <Route path="/news" element={<NewsRoom data={data} />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contribute" element={<Careers />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/team" element={<TheTeam />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
