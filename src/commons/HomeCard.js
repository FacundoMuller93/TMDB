import React from 'react';
import styles from '../styles/HomeCard.module.css';
import {Link} from 'react-router-dom';

const HomeCard = ({movieHome}) => {

    return (
        <div>
        <li className={styles.searchCard} >
        <Link to={`/${movieHome.id}`}> <img  className={styles.homeImage} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieHome.poster_path}`} alt={movieHome.title}></img></Link>
        {/* {user !== null ? <Link to={`/${movieHome.id}`}><img width={230} height={345} className={styles.homeImage} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieHome.poster_path}`} alt={movieHome.title} width="300" height="400"></img></Link> : <Link to="/unregistered"><img width={230} height={345} className={styles.homeImage} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieHome.poster_path}`} alt={movieHome.title} width="300" height="400"></img></Link> } */}
        <div className={styles.title}>{movieHome.title}</div>
        </li>
        </div>
    )
}

export default HomeCard;    