import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import("../waiter/waiter.css");
import { createOrder } from "../../fetch";
import { useState } from "react";

const NewOrder = ({ selectedProducts, onRemoveProduct }) => {
    const [clientName, setClientName] = useState("");
    const [clearedProducts, setClearedProducts] = useState(false);

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
            return acc + product.price;
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
                showModal();
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

    const showModal = () => {
        const modal = document.getElementById("exampleModal");
        const bootstrapModal = new window.bootstrap.Modal(modal);
        bootstrapModal.show();
    };

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
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ width: "40%", height: "35%", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "30%", marginTop: "15%", backgroundColor: "transparent" }}
            >
                <div className="modal-dialog" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                    <div className="modal-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#121214", border: "3px solid rgba(255, 255, 255, 0.6)" }}>
                        <div className="modal-header" style={{ backgroundColor: "#121214", border: "0px", paddingBottom:"0px" }}>
                            <i className="bi bi-check-circle-fill" style={{ color:"#558257", fontSize:"3rem" ,backgroundColor: "#121214", border: "0px" }}></i>
                        </div>
                        <div className="modal-body" style={{ backgroundColor: "#121214", border: "0px", paddingBottom: "0px" }}>
                            <p style={{ backgroundColor: "#121214", border: "0px", fontWeight: "600", fontSize: "1.5rem" }}>Order created</p>
                        </div>
                        <div className="modal-footer" style={{ backgroundColor: "#121214", border: "0px" }}>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                style={{ fontSize:"1.3rem", backgroundColor: "rgba(255, 255, 255, 0.5)", border: "0px", fontWeight: "500", padding: "12px 20px", marginTop: "0px" }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewOrder;
