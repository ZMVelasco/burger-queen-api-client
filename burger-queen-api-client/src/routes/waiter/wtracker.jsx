import Orders from "../globalcomponents/orders";
import { patchOrder, getOrders } from "../../fetch";
import { useState, useEffect } from "react";

const WaiterTracker = () => {
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
                const readyToServeOrders = data.filter((order) => order.status === "ready to serve");
                setFilteredOrders(readyToServeOrders);
                console.log('Pending orders', readyToServeOrders)
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    };

    const handleWaiterOrderClick = (orderId) => {
        console.log('Waiter order clicked');
        const token = localStorage.getItem("token");
        const deliveredDate = new Date().toLocaleString(); // Create the delivered date here
        patchOrder(token, orderId, { status: "Delivered" }, null, deliveredDate)
        .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                console.log('Order modified', response);
                refreshOrders();
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div>Pending waiter orders</div>
            <Orders orders={filteredOrders} buttonName="Delivered" onClickBehavior={handleWaiterOrderClick} statusFilter="ready to serve" showButton={true}  showDuration={false} backgroundColour= "#FCD53F" borderColor="#FF8855" tableHeight="63%"/>
        </>
    )
}
export default WaiterTracker;
