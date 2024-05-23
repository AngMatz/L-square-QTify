import Navbar from "./components/Navbar/navbar.js";
import HomePage from "./components/Pages/HomePage/homePage.js";
import { StyledEngineProvider } from '@mui/material/styles';
import { useState } from "react";
import { useEffect } from "react";
import {Outlet} from "react-router-dom";
import { fetchTopAlbums } from "./apiCalls/apiCalls.js";
import { fetchNewAlbums } from "./apiCalls/apiCalls.js";
import { fetchSongs } from "./apiCalls/apiCalls.js";

export default function App() {
  const [data, setData] = useState({});

  const getData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return {...prevState, [key]: data};
      })
    })
  }

  useEffect(() => {
    getData("topAlbums", fetchTopAlbums);
    getData("newAlbums", fetchNewAlbums);
    getData("songs", fetchSongs);
  }, [])

  const {topAlbums=[], newAlbums=[], songs=[]} = data;

  return (
    <div>
      <StyledEngineProvider injectFirst>
      <Navbar />
      <Outlet context={{data: {topAlbums, newAlbums, songs}}} />
      </StyledEngineProvider>
    </div>
  );
}