import { useState, useEffect } from "react";
import { API_HOST } from "../../settings";

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error(error))
        }
        })
        fetchProducts();
    }, []);

    return (
        <>
        <h1>Menu</h1>
        {products.map((product) => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        ))}
        </>
    )
}

export default Menu;