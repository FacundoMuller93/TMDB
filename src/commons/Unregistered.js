import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Unregistered.module.css'

const Unregistered = () => {
    return (
        <p className={styles.unregistered}>
            Para ver detalles de nuestras peliculas o series, necesitas estar registrado.
            Puedes crearte una cuenta, haciendo click <Link to="/register">aqui</Link>
        </p>
    )
}

export default Unregistered;