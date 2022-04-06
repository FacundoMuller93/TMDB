//funcion para saber si x pelicula está en favoritos de un usuario
import { useSelector } from "react-redux";

const checkFavs = (movieid) => {
    const user = useSelector(state => 
        state.user
      );
            let userFavs = user.data.favoritos;
                if (userFavs.length === 0) return false;
                else {
                    for(let i = 0; i < userFavs.length; i++){
                        if (userFavs[i].id == movieid){
                            return true
                        }
                    }
                    return false
                }
        }


export default checkFavs;