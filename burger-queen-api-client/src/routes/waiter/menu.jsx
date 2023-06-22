import { getProducts } from "../../fetch.js";
import { useState, useEffect } from "react";
import { Card, Row, Col } from 'react-bootstrap'; // Import react normal
import './waiter.css';

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

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

    return (
        <Row className="text-center">
            {products.map((product) => (
                <Col key={product.id} xs={12} md={4} className="mb-5">
                    <Card
                        className={product.type === 'Breakfast' ? 'breakfast-card' : 'lunch-dinner-card'}
                        bg={product.type === 'Breakfast' ? 'warning' : 'danger'}
                        text="white"
                        style={{ maxWidth: '12rem', height: '10rem' }}
                    >
                        <Card.Header className={product.type === 'Breakfast' ? 'breakfast-header' : 'lunch-dinner-header'}>{product.type}</Card.Header>
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text className={product.type === 'Breakfast' ? 'breakfast-price' : 'lunchdinner-price'}>${product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ProductCard;