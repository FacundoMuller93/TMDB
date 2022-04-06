import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/MovieDetails.module.css";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { GrStar } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userInfoRequest } from "../store/user";
import checkFavs from "../utils/checkFavs";

const MovieDetails = () => {
  //axios  y useEffect para obtener detalles de la pelicula
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=f4f465d2995b1b9d521de6be4a2c8f18&language=es-ES`
      )
      .then((res) => setMovieInfo(res.data));
  }, []);

  const dispatch = useDispatch(userInfoRequest);

  //obtain movie id from url's dynamic params
  const { movie } = useParams();

  const user = useSelector((state) => state.user);

  console.log(movieInfo);

  //add movie to favorites

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/api/user/addFavorites", {
        movie: movieInfo,
        userId: user.data.id,
      })
      .then(() => dispatch(userInfoRequest(user.data.id)));
  };

  //remove movie from favorites

  const handleClickRemoveFavs = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/api/user/removeFavorites", {
        movie: movieInfo,
        userId: user.data.id,
      })
      .then(() => dispatch(userInfoRequest(user.data.id)));
  };

  //agregar a favoritos sin estar logeado

  return (
    <div>
      {user.data.id ? (
        <div className={styles.container}>
          <div className={styles.picture}>
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieInfo.poster_path}`}
              alt={movieInfo.title}
              width="400"
              height="550"
            ></img>
          </div>
          <div className={styles.detailsContainer}>
            <div>
              <div className={styles.title}>{movieInfo.title}</div>
            </div>
            <div className={styles.tagline}>{movieInfo.tagline}</div>
            <div className={styles.text}>{movieInfo.overview}</div>
            <div className={styles.favoritesContainer}>
              <div className={styles.favoritesTitle}>Valoración de usuario: </div>
              <div> {movieInfo.vote_average}</div>
              <GrStar size="1.3rem" className={styles.star} />
            </div>
            {checkFavs(movie) ? (
              <div className={styles.heartContainer} onClick={handleClickRemoveFavs}>
                <BsHeart size="3rem" className={styles.filledHeart} />
              </div>
            ) : (
              <div className={styles.heartContainer} onClick={handleClick}>
                <BsHeartFill size="3rem" className={styles.filledHeart} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.picture}>
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieInfo.poster_path}`}
              alt={movieInfo.title}
              width="400"
              height="550"
            ></img>
          </div>
          <div className={styles.detailsContainer}>
          <div>
            <div className={styles.title}>{movieInfo.title}</div>
            <div className={styles.tagline}>{movieInfo.tagline}</div>
            <div className={styles.text}>{movieInfo.overview}</div>
            <div className={styles.favoritesContainer}>
            <div className={styles.favoritesTitle}>Valoración de usuario: </div>
            <div>{`${movieInfo.vote_average}`}</div>
            <GrStar size="1.3rem" className={styles.star} />
            </div>
            <div className={styles.heartContainer} title="Necesitas registrarte para agregar a favoritos">
              <BsHeartFill size="3rem" className={styles.filledHeart} />
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
