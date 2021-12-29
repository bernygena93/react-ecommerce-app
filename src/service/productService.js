import axios from "axios";
import { endpointProduct } from "../config/endpoints";

// eslint-disable-next-line arrow-body-style
export const getAllProducts = () => {
  return axios.get(`${endpointProduct}`);
};

// eslint-disable-next-line arrow-body-style
export const getProductById = (id) => {
  return axios.get(`${endpointProduct}/${id}`);
};
