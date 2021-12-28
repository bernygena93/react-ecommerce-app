import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/register.module.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/register");
  };

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2> Ingresar </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Ingresar
        </button>
      </form>
      <p>
        ¿Aún no tienes cuenta? &nbsp;
        <small role="button" onClick={handleRedirect} aria-hidden="true">
          Regístrate
        </small>
      </p>
    </div>
  );
}
