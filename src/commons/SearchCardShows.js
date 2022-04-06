import React from 'react';
import styles from '../styles/SearchCardShows.module.css'
import {Link} from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";

const SearchCardShows = ({shows}) => {
    // const dispatch = useDispatch();

    // const user = useSelector(state => 
    //   state.user
    // );

    console.log(shows.poster_path)

    return (
        <div className={styles.searchCard}>
            <Link to={`/${shows.id}`}> {shows.poster_path ? <img className={styles.searchShowsImage} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${shows.poster_path}`} alt={shows.title}></img> : <img width={300} height={400} src= "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="Not available"></img>} </Link>
        {/* {user ? <Link to={`/${shows.id}`}>{shows.poster_path ? <img width={230} height={345} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${shows.poster_path}`} alt={shows.title} width="300" height="400"></img> : <img width={300} height={400} src= "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="Not available"></img>}</Link> : <Link to="/unregistered">{shows.poster_path ? <img width={230} height={345} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${shows.poster_path}`} alt={shows.title} width="300" height="400"></img> : <img width={300} height={400} src= "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="Not available"></img>}</Link>} */}
        <div className={styles.title} >{shows.name}</div>
        </div>
    )
}

export default SearchCardShows; 