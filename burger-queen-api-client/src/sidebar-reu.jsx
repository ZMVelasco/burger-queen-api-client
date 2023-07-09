import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoutIcon from "./assets/logout.svg";
import ProductCard from "./routes/waiter/menu";
import KitchenOrders from "./routes/chef/kitchenorders";

const Sidebar = ({
  role,
  items,
  brandName,
  welcomeMessage,
  onCreateOrderClick,
  onPendingOrderClick,
  onPastOrderClick
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [componentToRender, setComponentToRender] = useState(null);

  const navigate = useNavigate();

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top" style={{backgroundColor: "#212529"}}>
        <div className="container-fluid" >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-start text-bg-dark ${
              isOpen ? "show" : ""
            }`}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
            style={{backgroundColor: "#212529"}}
          >
            <div className="offcanvas-header" style={{backgroundColor: "#212529"}}>
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{backgroundColor: "#212529"}}>
                {brandName}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={toggleOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body" style={{backgroundColor: "#212529"}}>
              <ul className="navbar-nav" >
                {items.map((item, index) => (
                  <li className="nav-item" key={index} style={{backgroundColor: "#212529"}}> 
                    <a
                      className="nav-link"
                      onClick={() => {
                        if (item.component === "product-card") {
                          onCreateOrderClick();
                        } else if (item.component === "pending-orders") {
                          onPendingOrderClick();
                        } else if (item.component === "past-orders") {
                          onPastOrderClick();
                        }
                        toggleOffcanvas();
                      }}
                      data-component={item.component}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="nav-item" style={{backgroundColor: "#212529"}}>
                  <button
                    className="btn btn-success"
                    type="button"
                    id="sidebar-logout"
                    onClick={handleLogout}
                  >
                    <img
                      src={logoutIcon}
                      alt="Logout icon"
                      className="logout-icon"
                    />
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="navbar-brand">{welcomeMessage}</h5>
        </div>
      </nav>
      {componentToRender && componentToRender === "product-card" && (
        <ProductCard />
      )}
      {componentToRender && componentToRender === "pending-orders" && (
        role === "chef" ? <KitchenOrders /> : <WaiterTracker />)}
    </>
  );
};

export default Sidebar;


