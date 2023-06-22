// // import { useState, propTypes } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import Navbar from "./navbar.jsx";
import { getProducts } from "../../fetch.js";
import { useState, useEffect } from "react";

const Waiter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  useEffect(() => {
    if (token) {
      fetchProducts(token);
    }
  }, [token]);

  const fetchProducts = (token) => {
    getProducts(token)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleFilterProducts = (type) => {
    // Filter products based on the selected type
    setFilteredProducts(products.filter((product) => product.type === type));
  };

  return (
    <>
      <Navbar />
      <div className="card-container">
        <div className="filter-buttons d-flex justify-content-center">
          <Button
            id="breakfast"
            className="mr-2 mb-5"
            variant="warning"
            onClick={() => handleFilterProducts("Breakfast")}
          >
            Breakfast
          </Button>
          <Button
            id="lunch-dinner"
            className="ml-2 mb-5"
            variant="danger"
            onClick={() => handleFilterProducts("Lunch & dinner")}
          >
            Lunch & Dinner
          </Button>
        </div>
        <Row className="text-center">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} md={4} className="mb-5">
              <Card
                bg={product.type === "Lunch & dinner" ? "danger" : "warning"}
                text="white"
                style={{ maxWidth: "18rem", height: "10rem" }}
              >
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
};

export default Waiter;
