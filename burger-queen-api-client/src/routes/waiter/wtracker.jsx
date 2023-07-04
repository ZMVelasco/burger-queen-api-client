import Orders from "../globalcomponents/orders";
import { patchOrder } from "../../fetch";
import { useState } from "react";
import PropTypes from 'prop-types';

const WaiterTracker = () => {
    const handleWaiterOrderClick = (orderId) => {
        console.log('Waiter order clicked');
        const token = localStorage.getItem("token");
        patchOrder(token, orderId, { status: "Delivered" })
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
        <Orders buttonName="Delivered" onClickBehavior={handleWaiterOrderClick} />
        </>
    )
}
export default WaiterTracker;
