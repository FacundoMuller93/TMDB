import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Profile.module.css"
import {userInfoRequest} from "../store/user";
import HomeCard from "../commons/HomeCard";

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => 
    state.user
  );

  return (
    <div>
      <div className={styles.title}>Bienvenido a su Perfil</div>
      <div className={styles.favorites}>Tus Peliculas Favoritas</div>
        <ul className={styles.favList}>
    {
        // user.data.favoritos.map((favorito) => {
        //     return <li key={favorito.id}>{favorito.title}</li>
        // })

        <ul className={styles.homeGrid}>
        {user.data.favoritos.map((movieHome) => {
          return <HomeCard key={movieHome.id} movieHome={movieHome}/>
        })}
    </ul>
    }
        </ul>
    </div>
  );
};

export default Profile;
