import Orders from "../globalcomponents/orders";
import { patchOrder, getOrders } from "../../fetch";
import { useState, useEffect } from "react";

const KitchenOrders = () => {
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
                const pendingOrders = data.filter((order) => order.status === "pending");
                setFilteredOrders(pendingOrders);
                console.log('Pending orders', pendingOrders)
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    };
    
    const handleKitchenOrderClick = (orderId) => {
        console.log('Kitchen order clicked');

        const modificationDate = new Date().toLocaleString(); // Create the modification date here
        patchOrder(token, orderId, { status: "ready to serve" }, modificationDate)
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
            <Orders orders={filteredOrders} buttonName="Ready to serve" onClickBehavior={handleKitchenOrderClick} showButton={true} showDuration={false} backgroundColour="#FCD53F" borderColor="#FF8855" />
        </>
    )
}

export default KitchenOrders;