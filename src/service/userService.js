import axios from "axios";
import { endpointUser } from "../config/endpoints";

// eslint-disable-next-line arrow-body-style
export const signUp = (requesteInit) => {
  return axios.post(`${endpointUser}signup/`, requesteInit);
};

// eslint-disable-next-line arrow-body-style
export const signIn = (requesteInit) => {
  return axios.post(`${endpointUser}signin/`, requesteInit);
};
