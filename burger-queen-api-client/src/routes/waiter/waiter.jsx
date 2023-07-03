import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./menu.jsx";
import Sidebar from "../../sidebar-reu.jsx";
// import WaiterPendinger from "./wPendinger.jsx";
import KitchenOrders from "../chef/kitchenorders.jsx";

const Waiter = () => {
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [showPendingOrder, setShowPendingOrder] = useState(false);

  const handleCreateOrderClick = () => {
    setShowCreateOrder(true);
    setShowPendingOrder(false);
  };

  const handlePendingOrderClick = () => {
    setShowCreateOrder(false);
    setShowPendingOrder(true);
  };

  return (
    <>
      <Sidebar
        items={[
          { label: "Product Card", component: "product-card" },
          { label: "Pending orders", component: "pending-orders" },
        ]}
        brandName="BQ"
        welcomeMessage="Welcome, Waiter!"
        onCreateOrderClick={handleCreateOrderClick}
        onPendingOrderClick={handlePendingOrderClick}
      />
         <div className="content">
        {showCreateOrder && <ProductCard />}
        {showPendingOrder && <KitchenOrders />}
      </div>
    </>
  );
};

export default Waiter;
