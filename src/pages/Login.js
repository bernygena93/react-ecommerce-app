import React, { useState } from "react";
import styles from "./styles/register.module.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className={styles.container}>
      <h2> Ingresar </h2>
      <form className={styles.form}>
        <label htmlFor="email">Correo</label>
        <input id="email" type="email" name="email" value={form.email} />
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          value={form.password}
        />
        <button type="submit" className={styles.button}>
          Ingresar
        </button>
      </form>
      <p>
        ¿Aún no tienes cuenta?
        <small> Regístrate </small>
      </p>
    </div>
  );
}
