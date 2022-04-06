import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navibar from "./components/Navbar";
import Register from "./components/Register";
import Search from "./components/Search";
import SearchShows from "./components/SearchShows";
import Login from "./components/Login";
import Profile from "./components/Profile";
import HomeGrid from "./commons/HomeGrid";
import Unregistered from "./commons/Unregistered";
import axios from "axios";
import MovieDetails from "./commons/MovieDetails";
import Footer from "./components/Footer";

const App = () => {
  const [homePage, setHomePage] = useState([]);

  const [search, setSearch] = useState("");


  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=f4f465d2995b1b9d521de6be4a2c8f18&language=es-ES&page=1"
      )
      .then((res) => setHomePage(res.data.results));
  }, []);

  return (
    <>
        <Navibar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path={`/:movie`} element={<MovieDetails />} />
        <Route path="/" element={<HomeGrid homePage={homePage} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/unregistered" element={<Unregistered/>}/>
        <Route path="/searchShows" element={<SearchShows/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default App;
