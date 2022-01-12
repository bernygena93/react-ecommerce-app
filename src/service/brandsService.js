import axios from "axios";
import { endpointBrand } from "../config/endpoints";

// eslint-disable-next-line arrow-body-style
export const createBrands = () => {
  return axios.post(`${endpointBrand}`);
};

// eslint-disable-next-line arrow-body-style
export const getAllBrands = () => {
  return axios.get(`${endpointBrand}`);
};
