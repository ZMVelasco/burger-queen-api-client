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

export const createOrder = (token, userId, client, products, dateEntry) => {
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
        dateEntry,
      })
  })
};

export const getOrders = (token) => {
  return fetch(`${url}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
};

export const patchOrder = (token, orderId, status) => {
  return fetch(`${url}/orders/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        id: orderId,
        status: status.status,
      })
  })
};




