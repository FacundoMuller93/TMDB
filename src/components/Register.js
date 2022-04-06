import React from "react";
import useInput from "../hooks/useInput";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Register.module.css";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { sendRegisterRequest } from '../store/user';

const Register = () => {
  const name = useInput();
  const surname = useInput();
  const age = useInput();
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
        await dispatch(sendRegisterRequest({
            nombre : name.value,
            apellido : surname.value,
            edad : age.value,
            email : email.value,
            contraseña : password.value
        }));
        navigate("/login")
}


  return (
    <div className={`layout m-5 ${styles.center}`}>
      <Form onSubmit={handleSubmit}>
        <h3 className={`title is-3 ${styles.title}`}>Creación de cuenta</h3>
        <br></br>
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={styles.input}
            {...name}
            type="text"
            placeholder="Ingrese su nombre"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={styles.input}
            {...surname}
            type="text"
            placeholder="Ingrese su apellido"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={styles.input}
            {...age}
            type="number"
            placeholder="Ingrese su edad"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={styles.input}
            {...email}
            type="email"
            placeholder="Ingrese su email"
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className={styles.input}
            {...password}
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </Form.Group>
        <br></br>
        <Button className={styles.btn} variant="primary" type="submit">
          Crear cuenta
        </Button>
      </Form>
    </div>
  );
};

export default Register;
