import { API_HOST } from "./settings";

const url = API_HOST;

export const getProducts = (token) => {
  return fetch(`${url}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
};






