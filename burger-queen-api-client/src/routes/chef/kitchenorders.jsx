import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { getOrders } from "../../fetch";
import { useEffect, useState } from "react";
import "../chef/chef.css";

const KitchenOrders = () => {
  const [kitchenOrders, setKitchenOrders] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      getOrders(token)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          setKitchenOrders(data);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    }
  }, [token]);

  return (
    <>
      <h2 className="tittle-orders">Orders</h2>
      <div id="orders">
        {kitchenOrders.map((order) => (
          <div
            key={order.id}
            className="card border-dark mb-3"
            style={{
              minWidth: "16rem",
              minBlockSize: "19rem",
              marginRight: "2px",
              backgroundColor: "#FCD53F",
              borderRadius: "10px",
            }}
          >
            <div className="card-header" style={{ fontWeight: "bolder", fontSize: "18px"}}>Client: {order.client}</div>
            <p className="card-title" style={{ backgroundColor: "#FCD53F", fontSize: "13px" }}>
              {order.dateEntry}
            </p>
            {order.products.map((product) => (
              <div
                key={product.id}
                className="card-body"
                style={{ color: "white", backgroundColor: "#FCD53F", justifyContent: "" }}
              >
                  <p
                    style={{ backgroundColor: "#FCD53F", color: "black"}}
                    className="card-text"
                  >
                    {product.quantity}
                  </p>
                  <p  className="card-text">
                    {product.name}
                  </p>
              </div>
            ))}
            <button
              className="btn btn-primary"
              style={{ color: "black", backgroundColor: "#FCD53F" }}
            >
              Done
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default KitchenOrders;
