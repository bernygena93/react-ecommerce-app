import axios from "axios";
import { endpointProduct } from "../config/endpoints";

export const getAllProducts = () => axios.get(`${endpointProduct}`);

// eslint-disable-next-line arrow-body-style
export const getProductByCategory = (id) => {
  return axios.get(`${endpointProduct}/category/${id}`);
};
// eslint-disable-next-line arrow-body-style
export const getProductByBrand = (id) => {
  return axios.get(`${endpointProduct}/brand/${id}`);
};

export const getProductById = (id) => axios.get(`${endpointProduct}/${id}`);

// eslint-disable-next-line arrow-body-style
export const createProduct = (payload) => {
  return axios.post(`${endpointProduct}/`, payload);
};
