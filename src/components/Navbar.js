import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import { sendLogoutRequest} from "../store/user";
import { useDispatch, useSelector } from "react-redux";

const Navibar = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => 
    state.user
  );

const handleLogOut = () => {
  dispatch(sendLogoutRequest());
};

// console.log(user.data.email)

  return (
    <Navbar className={styles.navBar}  variant="dark">
      <Container>
        <Navbar.Brand className={styles.center}>
          <Link to="/" className={styles.navbarButtons}>
            Home
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/search" className={styles.navbarButtons}>
              Peliculas
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/searchShows" className={styles.navbarButtons}>
              Series
            </Link>
          </Nav.Link>
          {user.data.id ? (
            <Nav.Link onClick={handleLogOut}>
              <Link to="/" className={styles.navbarButtons}>
                Desconectarse
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link>
              <Link to="/login" className={styles.navbarButtons}>
                Conectarse
              </Link>
            </Nav.Link>
          )}
          {
            user.data.id ? 
            (
              <Nav.Link>
                <Link to={"/profile"} className={styles.navbarButtons}>
                  Mi Perfil
                </Link>
              </Nav.Link>
            ) : 
            <Nav.Link>
            <Link to="/register" className={styles.navbarButtons}>
              Registrarse
            </Link>
          </Nav.Link>
          }
        </Nav>
        {!user.data.id ? <div></div> : (
            <div className={styles.navbarButtons}>
            
                Bienvenido {user.data.nombre}
            </div>
          )}
      </Container>
    </Navbar>
  );
};

export default Navibar;
