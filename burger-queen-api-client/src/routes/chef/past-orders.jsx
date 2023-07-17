import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import('../waiter/waiter.css')
import { getOrders } from "../../fetch";
import { useState, useEffect } from "react";
import Orders from "../globalcomponents/orders";

const PastOrders = () => {
    const token = localStorage.getItem("token");
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        refreshOrders();
    }, [token]);


    const refreshOrders = () => {
        getOrders(token)
            .then((response) => {
                if (!response.ok) {
                    // capturarlo al menos con un error boundary
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log('response', response);
                return response.json();
            })
            .then((data) => {
                const readyToServeAndDeliveredOrders = data.filter((order) => order.status === "ready to serve" || order.status === "Delivered");
                setFilteredOrders(readyToServeAndDeliveredOrders);
                console.log('Pending orders', readyToServeAndDeliveredOrders)
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    };
    return (
        <>
            <h1 className="container">Past orders</h1>
            <Orders orders={filteredOrders} buttonName="Ready to serve" statusFilter={["ready to serve", "Delivered"]} showButton={false} showDuration={true} backgroundColour= "#78e08f" borderColor="#006266" tableHeight="80%"/>
        </>
    )
}
export default PastOrders;