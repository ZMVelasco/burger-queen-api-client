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

export const createOrder = (token, userId, client, products) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        userId,
        client,
        products,
        "status": "pending",
        "dateEntry": "2022-03-05 15:14:10"
      })
  })
};






