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

export const patchOrder = (token, orderId, status, modificationDate, deliveredDate) => {
  const body = {
    id: orderId,
    status: status.status,
  };

  if (modificationDate) {
    body.modificationDate = modificationDate;
  }

  if (deliveredDate) {
    body.deliveredDate = deliveredDate;
  }

  return fetch(`${url}/orders/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
};

export const adminFetch = (token, endpoint) => {
  const endpointString = endpoint.toString();
  return fetch(`${url}${endpointString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProducts = (token, productId) => {
  const body = {
    id: productId,
  };
  return fetch(`${url}/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
};

export const deleteEmployees = (token, employeeId) => {
  const body = {
    id: employeeId,
  };
  return fetch(`${url}/users/${employeeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
};


export const editEmployees = (token, employeeId, name, role, email) => {
  const body = {
    id: employeeId,
    name,
    role,
    email
  };
  return fetch(`${url}/users/${employeeId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

export const editProducts = (token, productId, name, price, type) => {
  const body = {
    id: productId,
    name,
    price,
    type
  };
  return fetch(`${url}/products/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

export const createEmployee = (token, name, role, email, password) => {
  return fetch(`${url}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        name,
        role,
        email,
        password
      })
  })
};

export const createProduct = (token, name, type, price) => {
  return fetch(`${url}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        name,
        type,
        price
      })
  })
};
