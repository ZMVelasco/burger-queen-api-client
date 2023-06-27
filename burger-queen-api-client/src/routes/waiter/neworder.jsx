import("../waiter/waiter.css");
//import { useState } from "react";

const NewOrder = ({ selectedProducts, onRemoveProduct }) => {

    const getProductCount = (productId) => {
        const count = selectedProducts.reduce((acc, product) => {
            if (product.id === productId) {
                return acc + 1;
            }
            return acc;
        }, 0);
        return count;
    };
    // Filtrar productos duplicados
    const uniqueSelectedProducts = Array.from(new Set(selectedProducts.map(product => product.id)))
        .map(id => {
            return selectedProducts.find(product => product.id === id);
        });

    const handleRemoveProduct = (productId) => {
        onRemoveProduct(productId);
    };

    const getProductTotal = () => {
        const productTotal = selectedProducts.reduce((acc, product) => {
            return acc + product.price;
        }, 0);
        return productTotal;
    };

    const orderTotal = getProductTotal();

    return (
        <section className="new-order-section">
            <article>
                <input className="client-name" placeholder="  Client's name"
                        style={{ width: "100%", backgroundColor:"white", height: "100%", borderRadius:"10px", padding:"5px", color:"black"}}></input>
            </article>
            <div className="order-items-container">
            
                {uniqueSelectedProducts.map((product) => (
                    <article className="order-item">
                        <p className="item-price">{getProductCount(product.id)} </ p>
                        <p className="order-product custom-width" key={product.id}> {product.name}</ p>
                        <i className="bi bi-trash3 p-3" style={{ backgroundColor: "transparent", color:"red", justifyItems:"center" }} onClick={() => handleRemoveProduct(product.id)}></i>
                    </article>
                ))}
            </div>
            <article className="order-total">
                <p className="order-total-text">Total: $ {orderTotal}</p>
                <button className="place-order">Place order</button>
            </article>
        </section>
    );
};

export default NewOrder;