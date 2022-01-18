import axios from "axios";
import { endpointProduct } from "../config/endpoints";

// eslint-disable-next-line arrow-body-style
export const getAllProducts = () => {
  return axios.get(`${endpointProduct}`);
};
// eslint-disable-next-line arrow-body-style
export const getProductByCategory = (id) => {
  return axios.get(`${endpointProduct}/category/${id}`);
};
// eslint-disable-next-line arrow-body-style
export const getProductByBrand = (id) => {
  return axios.get(`${endpointProduct}/brand/${id}`);
};
// eslint-disable-next-line arrow-body-style
export const getProductById = (id) => {
  return axios.get(`${endpointProduct}/${id}`);
};
