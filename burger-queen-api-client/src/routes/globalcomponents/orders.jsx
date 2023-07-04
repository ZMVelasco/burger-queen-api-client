import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../chef/chef.css";
import { getOrders } from "../../fetch";
import { useEffect, useState } from "react";
const Orders = ({ buttonName, onClickBehavior }) => {
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            getOrders(token)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} ${response.statusText}`);
                    }
                    console.log('response', response);
                    return response.json();
                })
                .then((data) => {
                    setOrders(data);
                })
                .catch((error) => {
                    console.error('Error fetching orders:', error);
                });
        }
    }, [token]);

    return (
        <> 
        <h2 className="title-orders">Orders</h2>
        <section id="orders">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="card border-dark mb-3"
                    style={{ maxWidth: "18rem", 
                            minBlockSize: "19rem", 
                            marginRight: "2px", 
                            backgroundColor: "#FCD53F", 
                            borderRadius: "10px",
                            height: "60%" }}
                >
                    <div className="card-header" style={{ fontWeight: "bolder", fontSize:"18px" }} >Client: {order.client}</div>
                    <p className="card-title" style={{ backgroundColor: "#FCD53F", fontSize:"13px" }}>
                                {order.dateEntry}
                            </p>
                    <article className="products-cont" style={{ height: "40%", overflow: "scroll", backgroundColor: "#FCD53F" }} >
                    {order.products.map((product) => (
                        <div
                            key={product.id}
                            className="card-body"
                            style={{ backgroundColor: "#FCD53F", display: "flex", flexDirection: "row" }}
                        >
                            <p className="card-text" style={{ backgroundColor: "#FCD53F", color: "black", fontWeight: "bolder", width:"10%" }}>{product.quantity}</p>
                            <p className="card-text" style={{ backgroundColor: "#FCD53F", color: "black" }}>{product.name}</p>
                        </div>
                    ))}
                    </article>
                    <button className="btn btn-primary" 
                    style={{ }} 
                    onClick={() => onClickBehavior(order.id)}>{buttonName}</button>
                </div>
            ))}
            </section>
        </> 
    );
}
export default Orders