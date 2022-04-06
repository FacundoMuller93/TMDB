import React from 'react';
import styles from '../styles/SearchCard.module.css'
import {Link} from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";

const SearchCard = ({movie}) => {
    // const dispatch = useDispatch();

    // const user = useSelector(state => 
    //   state.user
    // );

    return (
        <div className={styles.searchCard}>
            <Link to={`/${movie.id}`}>{movie.poster_path ? <img className={styles.searchImage} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title}></img> : <img width={300} height={400} src= "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="Not available"></img>} </Link>
       {/* {user.data.id ? <Link to={`/${movie.id}`}> {movie.poster_path ? <img width={230} height={345} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} width="300" height="400"></img> : <img width={300} height={400} src= "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="Not available"></img>}</Link> : <Link to="/unregistered"> {movie.poster_path ? <img width={230} height={345} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} width="300" height="400"></img> : <img width={300} height={400} src= "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="Not available"></img>}</Link>} */}
        <div className={styles.title} >{movie.title}</div>
        </div>
    )
}

export default SearchCard;    