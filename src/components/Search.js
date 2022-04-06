import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import SearchGrid from "../commons/SearchGrid";
import styles from "../styles/Search.module.css";


const Search = () => {

  //búsqueda de peliculas
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  let newSearchArr = [];
  let finalSearchArr = "";

  console.log(search)



  //convierte espacios en %20 para poder buscar peliculas con espacios en la API de TMDB
  const prepareSearch = (toModify) => {
    for (let i = 0; i < search.length; i++) {
      if (toModify[i] !== " ") {
        newSearchArr.push(toModify[i]);
      } else {
        newSearchArr.push("%20");
      }
    }
    finalSearchArr = newSearchArr.join("");
    return finalSearchArr;
  };
  

  useEffect(() => {
    axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=f4f465d2995b1b9d521de6be4a2c8f18&language=es-ES&query=${prepareSearch(
        search
      )}&page=1`
    )
    .then((res) => res.data.results)
    .then((searched) => setSearchResult(searched));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f4f465d2995b1b9d521de6be4a2c8f18&language=es-ES&query=${prepareSearch(
          search
        )}&page=1`
      )
      .then((res) => res.data.results)
      .then((searched) => setSearchResult(searched));
  };

  const handleNameChange = (e) => {
    setSearch(e.target.value);
  };

  return (


    //PELICULAS

    <div className={`layout m-5 ${styles.container}`}>
      <Form onSubmit={handleSubmit}>
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className={styles.input} onChange={handleNameChange}
            value={search}
            type="text"
            placeholder="Escriba el nombre de una pelicula y presione enter"
          />
        </Form.Group>
        <img className={styles.banner} src="http://cdn23.us1.fansshare.com/celebrity/photos/934_inception-banner-movie-poster-152436231.jpg" alt="advert" />
        <br></br>
      </Form>
      <SearchGrid searchResult={searchResult}/>
    </div>
  );
};

export default Search;
