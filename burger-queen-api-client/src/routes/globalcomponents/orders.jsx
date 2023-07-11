import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../chef/chef.css";
import { getOrders } from "../../fetch";
import { useEffect, useState } from "react";
import "../chef/chef.css"

const Orders = ({ buttonName, onClickBehavior, statusFilter, showButton, showDuration, backgroundColour, borderColor }) => {
    const [orders, setOrders] = useState([]);

    const token = localStorage.getItem("token");
    let intervalId;

    useEffect(() => {
        intervalId = setInterval(() => {
            getOrders(token)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} ${response.statusText}`);
                    }
                    console.log('response', response);
                    return response.json();
                })
                .then((data) => {
                    const filteredOrders = data.filter((order) => {
                        return statusFilter.includes(order.status);
                    });
                    setOrders(filteredOrders);
                })
                .catch((error) => {
                    console.error('Error fetching orders:', error);
                });
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [statusFilter]);

    const calculateDuration = (entryDate, modificationDate) => {
        // Parse the date strings in the format "M/D/YYYY, h:mm:ss A"
        const entryTime = new Date(entryDate).getTime();
        const modificationTime = new Date(modificationDate).getTime();
        const duration = modificationTime - entryTime;

        // Convert duration from milliseconds to hours, minutes, and seconds
        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);

        return `${hours}h ${minutes}m ${seconds}s`;
    };
    return (
        <>
            <h2 className="title-orders">Orders</h2>
            <section id="orders">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="card border-dark mb-3"
                        style={{
                            width: "15rem",
                            minBlockSize: "19rem",
                            marginRight: "2px",
                            backgroundColor: backgroundColour,
                            borderRadius: "10px",
                            padding: "4px" ,
                            boxShadow: `0 0 0 4px ${borderColor}`
                        }}
                    >
                        <div className="card-header" id="card-header-chef">Client: {order.client}</div>
                        <p className="card-title"  style={{ backgroundColor: backgroundColour, fontSize: "14px"  }} id="card-title-chef"> {order.dateEntry} </p>
                        <p className="card-title" style={{ backgroundColor: backgroundColour, fontSize: "14px"  }} id="card-title-chef"> Status: {order.status} </p>
                        {showDuration && (
                            <p id="card-title-chef" style={{ backgroundColor: backgroundColour, color: "black" }}> Duration: {calculateDuration(order.dateEntry, order.modificationDate)} </p>)}
                        <article className="products-cont" style={{ backgroundColor: backgroundColour }}> {order.products.map((product) => (
                            <div
                                key={product.id}
                                className="card-body"
                                id="card-body-chef"
                                style={{ backgroundColor: backgroundColour }}
                            >
                                <p className="quantity" id="quantity-chef">{product.quantity}</p>
                                <p className="product-name" id="product-name-chef"  >{product.name}</p>
                            </div>
                        ))}
                        </article>
                        {showButton && (
                            <button
                                className="btn btn-primary"
                                style={{
                                    marginTop: "15rem",
                                    marginLeft: "40px",
                                    width: "10rem",
                                    position: "absolute",
                                    borderColor: "#FF8855",
                                    backgroundColor: "#FF8855",
                                    color: "black",
                                    fontWeight: "bolder"
                                }}
                                onClick={() => onClickBehavior(order.id)}
                            >
                                {buttonName}
                            </button>
                        )}
                    </div>
                ))}
            </section>
        </>
    );
}
export default Orders