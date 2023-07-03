import { getProducts } from "../../fetch.js";
import { useState, useEffect } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap'; // Import react normal
import 'bootstrap-icons/font/bootstrap-icons.css';
import './waiter.css';
import NewOrder from "./neworder.jsx"

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [token, setToken] = useState('');
    const [selectedProduct, setSelectedProducts] = useState([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
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

    const handleFilterProducts = (type) => {
        // Filter products based on the selected type
        setFilteredProducts(products.filter((product) => product.type === type));
    };

    const handleProductSelection = (product) => {
        console.log(product);
        setSelectedProducts((prevSelectedProducts) => {
            const updatedSelectedProducts = [...prevSelectedProducts, product];
            console.log(updatedSelectedProducts);
            return updatedSelectedProducts;
        });
    };

    const handleReduceProduct = (product) => {
        setSelectedProducts((prevSelectedProducts) => {
            const updatedSelectedProducts = [...prevSelectedProducts];
            const productIndex = updatedSelectedProducts.findIndex(
                (selectedProduct) => selectedProduct.id === product.id
            );

            if (productIndex !== -1) {
                const selectedProduct = updatedSelectedProducts[productIndex];
                if (selectedProduct.quantity > 1) {
                    selectedProduct.quantity -= 1;
                } else {
                    updatedSelectedProducts.splice(productIndex, 1);
                }
            }

            return updatedSelectedProducts;
        });
    };

    const handleRemoveProduct = (productId) => {
        setSelectedProducts((prevSelectedProducts) => {
            const updatedSelectedProducts = prevSelectedProducts.filter(
                (product) => product.id !== productId
            );
            return updatedSelectedProducts;
        });
    };

    return (
        <>
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
                <Row className="text-center" id="card-row">
                    {filteredProducts.map((product) => (
                        <Col id="product-cards" key={product.id} xs={8} md={4} className="mb-5">
                            <Card
                                className={product.type === "Breakfast" ? "breakfast-card" : "lunch-dinner-card"}
                                bg={product.type === "Breakfast" ? "warning" : "danger"}
                                text="white"
                                style={{ maxWidth: "12rem", height: "13rem" }}
                            >
                                <Card.Header className={product.type === "Breakfast" ? "breakfast-header" : "lunch-dinner-header"}>
                                    {product.type}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className={product.type === "Breakfast" ? "breakfast-price" : "lunchdinner-price"} >${product.price}</Card.Text>
                                    <div className="icons">
                                        <i className="bi bi-dash-circle" style={{ fontSize: "1.5rem", backgroundColor: "transparent", color: product.type === "Breakfast" ? "#FCD53F" : "#FF8855", marginTop:"4px" }} onClick={() => handleReduceProduct(product)}></i>
                                        <i className="bi bi-plus-circle" style={{ fontSize: "1.5rem", bagroundColor: "transparent", color: product.type === "Breakfast" ? "#FCD53F" : "#FF8855", marginTop:"4px"}} onClick={() => handleProductSelection(product)}></i>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <NewOrder selectedProducts={selectedProduct} onRemoveProduct={handleRemoveProduct} />
        </>
    );
};

export default ProductCard;