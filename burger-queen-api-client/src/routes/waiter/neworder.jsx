import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../waiter/waiter.css";
import { createOrder } from "../../fetch";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const NewOrder = ({ selectedProducts, onRemoveProduct }) => {
    const [clientName, setClientName] = useState("");
    const [clearedProducts, setClearedProducts] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    const uniqueSelectedProducts = Array.from(
        new Set(selectedProducts.map((product) => product.id))
    ).map((id) => {
        return selectedProducts.find((product) => product.id === id);
    });

    const handleRemoveProduct = (productId) => {
        onRemoveProduct(productId);
    };

    const getProductTotal = () => {
        const productTotal = selectedProducts.reduce((acc, product) => {
            const price = typeof product.price === 'string' ? Number(product.price) : product.price;
            return acc + price;
        }, 0);
        return productTotal;
    };

    const handleCreateOrder = () => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const dateEntry = new Date().toLocaleString();
        const productQuantities = uniqueSelectedProducts.map((product) => {
            return {
                quantity: getProductCount(product.id),
                id: product.id,
                name: product.name,
                price: product.price,
            };
        });
        createOrder(token, userId, clientName, productQuantities, dateEntry)
            .then((response) => {
                console.log("Order created", response);
                setClientName("");
                setClearedProducts(true);
                onClearProducts();
                handleShow();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onClearProducts = () => {
        selectedProducts.splice(0, selectedProducts.length);
    };

    const placeOrderDisabled = selectedProducts.length === 0 || clientName === "";

    const orderTotal = getProductTotal();

    return (
        <section className="new-order-section">
            <article>
                <input
                    className="client-name"
                    id="client-name-input"
                    placeholder="  Client's name"
                    style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                        color: "black",
                    }}
                    onChange={(event) => setClientName(event.target.value)}
                    value={clientName}
                ></input>
            </article>
            <div className="order-items-container">
                {uniqueSelectedProducts.map((product) => {
                    // if (clearedProducts) {
                    //     return null;
                    // }
                    return (
                        <article className="order-item" key={product.id}>
                            <p className="item-price" style={{ backgroundColor: "#558257" }}>
                                {getProductCount(product.id)}{" "}
                            </p>
                            <p
                                className="order-product custom-width"
                                style={{ backgroundColor: "#558257" }}
                            >
                                {product.name}
                            </p>
                            <i
                                className="bi bi-trash3 p-2 trash"
                                style={{
                                    backgroundColor: "transparent",
                                    color: "red",
                                    justifyItems: "center",
                                }}
                                onClick={() => handleRemoveProduct(product.id)}
                            ></i>
                        </article>
                    );
                })}
            </div>
            <article className="order-total">
                <p className="order-total-text">Total: $ {orderTotal}</p>
                <button
                    className="place-order"
                    type="submit"
                    onClick={handleCreateOrder}
                    disabled={placeOrderDisabled}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Place order
                </button>
            </article>
            {/* Modal */}
            <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderTop: "3px solid #558257", borderLeft: "3px solid #558257", borderRight: "3px solid #558257", borderBottom:"0px", paddingBottom:"0px"}}>
                    <Modal.Title style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <i className="bi bi-check-circle-fill" style={{ color: "#558257", fontSize: "2.5rem"}}></i>
                    Order created!</Modal.Title>
                </Modal.Header>
                <Modal.Footer style={{backgroundColor: "black", borderBottom: "3px solid #558257", borderLeft: "3px solid #558257", borderRight: "3px solid #558257", borderTop:"0px"}}>
                    <Button variant="secondary" onClick={handleClose} style={{fontSize:"20px", width:"20%", fontWeight: "500", backgroundColor:"#558257", marginTop:"0px", marginRight:"10%"}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default NewOrder;