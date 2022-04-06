import React from 'react';
import SearchCard from './SearchCard';
import styles from '../styles/SearchGrid.module.css'

const SearchGrid = ({searchResult}) => {
    return (
        <ul className={styles.searchGrid}>
            {searchResult.map((movie) => {
              return <SearchCard key={movie.id} movie={movie}/>
            })}
        </ul>
    )
}

export default SearchGrid;