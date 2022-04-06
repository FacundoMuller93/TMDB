import React from "react";
import useInput from "../hooks/useInput"
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import {sendLoginRequest} from "../store/user.js";


const Login = () => {
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();


  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      sendLoginRequest({
        email: email.value,
        contraseña: password.value,
      })
    );
    navigate("/");
  };

    return (
    <div className={`layout m-5 ${styles.center}`}>
    <Form onSubmit={handleSubmit}>
    <h3 className={`${styles.title} title is-3`}>Iniciar sesión</h3>
    <br></br>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className={styles.input} {...email} type="email" placeholder="Ingrese su email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control className={styles.input} {...password}type="password" placeholder="Ingrese su contraseña" />
  </Form.Group>
  <br></br>
  <Button variant="primary" type="submit">
    Conectarse
  </Button>
</Form>

  </div>
    )
}

export default Login;