import Orders from "../globalcomponents/orders";
import { patchOrder } from "../../fetch";
import { useState } from "react";
import PropTypes from 'prop-types';

const WaiterTracker = () => {
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
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div>Pending waiter orders</div>
            <Orders orders={[]} buttonName="Delivered" onClickBehavior={handleWaiterOrderClick} statusFilter="ready to serve" showButton={true}  showDuration={false} backgroundColour= "#FCD53F" borderColor="#FF8855"/>
        </>
    )
}
export default WaiterTracker;
