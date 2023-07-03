import { useState } from "react";
import React from "react";
import Sidebar from "../../sidebar-reu";
import KitchenOrders from "./kitchenorders";
import PastOrders from "./past-orders";

const Chef = () => {
    const [showPendingOrder, setShowPendingOrder] = useState(false);
    const [showPastOrder, setShowPastOrder] = useState(false);
  
    const handlePendingOrderClick = () => {
        setShowPastOrder(false);
        setShowPendingOrder(true);
      };
    
    const handlePastOrderClick = () => {
      setShowPastOrder(true);
      setShowPendingOrder(false);
    };
  

  return (
    <>
      <Sidebar
         items={[
            { label: "Pending orders", component: "pending-orders" },
            { label: "Past orders", component: "past-orders" },
          ]}
        brandName="BQ"
        welcomeMessage="Welcome Chef!"
        onPendingOrderClick={handlePendingOrderClick}
        onPastOrderClick={handlePastOrderClick}
      />
      <div className="content">
        {showPendingOrder && <KitchenOrders />}
        {showPastOrder && <PastOrders />}
      </div>
    </>
  );
};

export default Chef;