import React from 'react';
import SearchCardShows from './SearchCardShows';
import styles from '../styles/SearchGridShows.module.css'

const SearchGridShows = ({searchResultShows}) => {
    return (
        <ul className={styles.searchGridShows}>
            {searchResultShows.map((shows) => {
              return <SearchCardShows key={shows.id} shows={shows}/>
            })}
        </ul>
    )
}

export default SearchGridShows;