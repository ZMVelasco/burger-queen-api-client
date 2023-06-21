// // import { useState, propTypes } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
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
        <Row className="text-center">
          {products.map((product) => (
            <Col key={product.id} xs={12} md={4} className="mb-5">
              <Card bg="warning" text="white" style={{ maxWidth: '18rem', height: '10rem' }}>
                <Card.Header>{product.type}</Card.Header>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
export default Waiter;