import React, { useContext, useState } from "react";
import { Add } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";
import { getAllCategories } from "../service/categoryService";
import styles from "./styles/productSale.module.css";
import EcommerceContext from "../context/EcommerceContext";
import ImagesList from "../components/List/ImagesList";
import { createProduct } from "../service/productService";

export default function ProductSale() {
  const navigate = useNavigate();
  const context = useContext(EcommerceContext);
  const categories = useFetchApi({
    urlApi: getAllCategories,
  });
  const [imagesList, setImagesList] = useState([]);
  const [image, setImage] = useState({
    url: "",
  });
  const [form, setForm] = useState({
    user: context.userInfo[0]._id,
    brand: "",
    features: "",
    category: "",
    description: "",
    warranty: 0,
    price: 0,
    stock: 0,
    shipping: true,
    images: [],
  });

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeImages = (event) => {
    setImage({
      url: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(form);
    navigate("/");
  };

  const handleImages = () => {
    setImagesList([...imagesList, image]);
    setImage({
      url: "",
    });
    setForm({
      ...form,
      images: [...form.images, image],
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="brand">
          Marca
        </label>
        <input
          className={styles.input}
          id="brand"
          type="text"
          name="brand"
          value={form.name}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="features">
          Caracteristicas
        </label>
        <textarea
          className={styles.textarea}
          id="features"
          rows={5}
          cols={5}
          name="features"
          value={form.features}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="category">
          Categoria
        </label>
        <select
          className={styles.input}
          id="category"
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option selected>Selecciona una categoria</option>
          {categories.map((item) => (
            <option value={item._id}>{item.name}</option>
          ))}
        </select>
        <label className={styles.label} htmlFor="description">
          Descripcion
        </label>
        <textarea
          className={styles.textarea}
          id="description"
          rows={15}
          cols={5}
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="warranty">
          Garantia
        </label>
        <input
          className={styles.input}
          id="warranty"
          type="number"
          name="warranty"
          value={form.warranty}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="price">
          Precio
        </label>
        <input
          className={styles.input}
          id="price"
          type="text"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="stock">
          Cantidad
        </label>
        <input
          className={styles.input}
          id="stock"
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="shipping">
          Envios
        </label>
        <select
          className={styles.input}
          id="shipping"
          type="boolean"
          name="shipping"
          value={form.shipping}
          onChange={handleChange}
        >
          <option value>Si</option>
          <option value={false}>No</option>
        </select>
        <label className={styles.label} htmlFor="images">
          Imagenes
        </label>
        <div className={styles.imgInput}>
          <input
            className={styles.input}
            id="images"
            type="text"
            name="url"
            value={image.url}
            onChange={handleChangeImages}
          />
          <button type="button" onClick={handleImages}>
            <Add />
          </button>
        </div>
        <div className={styles.imgContainer}>
          {imagesList.length === 0 ? (
            <p>No hay imagenes cargadas</p>
          ) : (
            imagesList.map((item) => <ImagesList item={item} key={item.url} />)
          )}
        </div>
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Crear producto
        </button>
      </form>
    </div>
  );
}
