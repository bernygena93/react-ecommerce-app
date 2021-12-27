import React, { useState } from "react";
import styles from "./styles/register.module.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className={styles.container}>
      <h2> Crear Cuenta </h2>
      <form className={styles.form}>
        <label htmlFor="name">Nombre</label>
        <input id="name" type="text" name="name" value={form.name} />
        <label htmlFor="lastname">Apellido</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={form.lastname}
        />
        <label htmlFor="username">Nombre de Usuario</label>
        <input
          id="username"
          type="text"
          name="username"
          value={form.username}
        />
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
          Registrarse
        </button>
      </form>
      <p>
        ¿Ya tienes una cuenta? &nbsp;
        <small>Iniciar Sesión</small>
      </p>
    </div>
  );
}
