import { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./menu.jsx";
import Sidebar from "./sidebar.jsx";
import WaiterTracker from "./wtracker.jsx";


const Waiter = () => {
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [showTrackOrder, setShowTrackOrder] = useState(false);

  const handleCreateOrderClick = () => {
    setShowCreateOrder(true);
    setShowTrackOrder(false);
  };

  const handleTrackOrderClick = () => {
    setShowCreateOrder(false);
    setShowTrackOrder(true);
  };

  return (
    <>
      <Sidebar onCreateOrderClick={handleCreateOrderClick} onTrackOrderClick={handleTrackOrderClick} />
      {showCreateOrder && <ProductCard />}
      {showTrackOrder && <WaiterTracker />}
    </>
  );
};

export default Waiter;