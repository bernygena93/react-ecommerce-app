import axios from "axios";
import { endpointCategory } from "../config/endpoints";

// eslint-disable-next-line arrow-body-style
export const getAllCategories = () => {
  return axios.get(`${endpointCategory}`);
};

// eslint-disable-next-line arrow-body-style
export const getCategoryById = (id) => {
  return axios.get(`${endpointCategory}/${id}`);
};
