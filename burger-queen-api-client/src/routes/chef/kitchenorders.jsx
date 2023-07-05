import Orders from "../globalcomponents/orders";
import { patchOrder } from "../../fetch";
import { useState } from "react";
import PropTypes from 'prop-types';

const KitchenOrders = () => {
    const handleKitchenOrderClick = (orderId) => {
        console.log('Kitchen order clicked');
        const token = localStorage.getItem("token");
        patchOrder(token, orderId, { status: "ready to serve" })
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
        <Orders buttonName="Ready to serve" onClickBehavior={handleKitchenOrderClick} statusFilter="pending" showButton={true} />
        </>
    )
}

export default KitchenOrders;