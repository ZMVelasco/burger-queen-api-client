// // import { useState, propTypes } from 'react';
// // import Burger from './components/Burger';
import Navbar from "./navbar.jsx";
import { getProducts } from "../../fetch.js";
import { useState, useEffect } from "react";

const Waiter = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  useEffect (() => {
    if(token){
      fetchProducts(token)
    }
  }, [token])

  const fetchProducts = (token) => {
    getProducts(token)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Waiter;