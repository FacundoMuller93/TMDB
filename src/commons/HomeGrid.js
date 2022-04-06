import React from 'react';
import HomeCard from './HomeCard';
import styles from '../styles/HomeGrid.module.css'

const HomeGrid = ({homePage}) => {
    return (
        <ul className={styles.homeGrid}>
            {homePage.map((movieHome) => {
              return <HomeCard key={movieHome.id} movieHome={movieHome}/>
            })}
        </ul>
    )
}

export default HomeGrid;