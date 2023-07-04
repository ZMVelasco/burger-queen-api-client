import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
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
        <div>
            <h2>Orders</h2>
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="card border-dark mb-3"
                    style={{ maxWidth: "18rem" }}
                >
                    <div className="card-header">Client: {order.client}</div>
                    <p className="card-title" style={{ color: "white" }}>
                                {order.dateEntry}
                            </p>
                    {order.products.map((product) => (
                        <div
                            key={product.id}
                            className="card-body"
                            style={{ color: "white", background: "blue" }}
                        >
                            <h5 className="card-title" style={{ color: "white" }}>
                                {order.title}
                            </h5>
                            <p className="card-text">{product.quantity}</p>
                            <p className="card-text">{product.name}</p>
                        </div>
                    ))}
                    <button className="btn btn-primary" onClick={() => onClickBehavior(order.id)}>{buttonName}</button>
                </div>
            ))}
        </div>
    );
}
export default Orders