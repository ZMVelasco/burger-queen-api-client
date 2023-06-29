import("../waiter/waiter.css");
import { createOrder } from "../../fetch";
import { useState } from "react";

const NewOrder = ({ selectedProducts, onRemoveProduct }) => {
    const [clientName, setClientName] = useState("");

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

    const handleCreateOrder = () => {
        const token = localStorage.getItem("token")
        const userId = localStorage.getItem("userId")
        const productQuantities = uniqueSelectedProducts.map((product) => {
            return {
                quantity: getProductCount(product.id),
                id: product.id,
                name: product.name,
                price: product.price 
            };
        });
        createOrder(token, userId, clientName, productQuantities)
        .then((response) => console.log("create order", response))
        .catch((error) => console.log(error))
    }

    const placeOrderDisabled = selectedProducts.length === 0 || clientName === "";

    const orderTotal = getProductTotal();
    
    
    const products = selectedProducts.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price
    }));

   

    // console.log(productQuantities)
    

    return (
        <section className="new-order-section">
            <article>
                <input className="client-name" id="client-name-input" placeholder="  Client's name"
                    style={{ backgroundColor: "white", borderRadius: "10px", padding: "5px", color: "black" }}
                    onChange={(event) => setClientName(event.target.value)}>
                </input>
            </article>
            <div className="order-items-container">

                {uniqueSelectedProducts.map((product) => (
                    <article className="order-item">
                        <p className="item-price" style={{ backgroundColor: "#558257" }}>{getProductCount(product.id)} </ p>
                        <p className="order-product custom-width" key={product.id} style={{ backgroundColor: "#558257" }}> {product.name}</ p>
                        <i className="bi bi-trash3 p-2 trash" style={{ backgroundColor: "transparent", color: "red", justifyItems: "center" }} onClick={() => handleRemoveProduct(product.id)}></i>
                    </article>
                ))}
            </div>
            <article className="order-total">
                <p className="order-total-text">Total: $ {orderTotal}</p>
                <button className="place-order" type="submit" onClick={handleCreateOrder} disabled={placeOrderDisabled}>Place order</button>
            </article>
        </section>
    );
};

export default NewOrder;