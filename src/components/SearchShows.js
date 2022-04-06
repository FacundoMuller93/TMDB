import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SearchGridShows from "../commons/SearchGridShows";
import styles from "../styles/SearchShows.module.css";

const Search = () => {

  let newSearchArr = [];
  let finalSearchArr = "";

  //búsqueda de tvshows
  const [searchShows, setSearchShows] = useState([]);
  const [searchResultShows, setSearchResultShows] = useState([]);

  //convierte espacios en %20 para poder buscar series con espacios en la API de TMDB
  const prepareSearchShows = (toModify) => {
    for (let i = 0; i < searchShows.length; i++) {
      if (toModify[i] !== " ") {
        newSearchArr.push(toModify[i]);
      } else {
        newSearchArr.push("%20");
      }
    }
    finalSearchArr = newSearchArr.join("");
    return finalSearchArr;
  };

  const handleSubmitShows = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=f4f465d2995b1b9d521de6be4a2c8f18&language=es-ES&page=1&query=${prepareSearchShows(
          searchShows
        )}&include_adult=false`
      )
      .then((res) => res.data.results)
      .then((searchedShows) => setSearchResultShows(searchedShows));
  };

  const handleNameChangeShows = (e) => {
    setSearchShows(e.target.value);
    console.log(e.target.val)
  };

  return (
    //PELICULAS
    <div className="layout m-5">
      <Form onSubmit={handleSubmitShows}>
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className={styles.input}
            onChange={handleNameChangeShows}
            value={searchShows}
            type="text"
            placeholder="Escriba el nombre de una serie y presione enter"
          />
        </Form.Group>
        <img className={styles.banner} src="http://cdn23.us1.fansshare.com/celebrity/photos/934_inception-banner-movie-poster-152436231.jpg" alt="advert" />
        <br></br>
      </Form>
    <SearchGridShows searchResultShows={searchResultShows}/>
    </div>
  );
};

export default Search;
