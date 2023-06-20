import { useState, useEffect } from "react";

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = () => {
            fetch('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products')
                .then(Response => Response.json())
                .then(data => setProducts(data))
                .catch(error => console.error(error));
        }
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