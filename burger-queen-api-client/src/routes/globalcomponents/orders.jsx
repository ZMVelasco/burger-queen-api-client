import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../chef/chef.css";
import { getOrders } from "../../fetch";
import { useEffect, useState } from "react";
import "../chef/chef.css"

const Orders = ({ buttonName, onClickBehavior }) => {
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            getOrders(token)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} ${response.statusText}`);
                    }
                    console.log('response', response);
                    return response.json();
                })
                .then((data) => {
                    setOrders(data);
                })
                .catch((error) => {
                    console.error('Error fetching orders:', error);
                });
        }
    }, [token]);

    return (
        <> 
        <h2 className="title-orders">Orders</h2>
        <section id="orders">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="card border-dark mb-3"
                    style={{width: "15rem", 
                            minBlockSize: "19rem", 
                            marginRight: "2px", 
                            backgroundColor: "#FCD53F", 
                            borderRadius: "10px",
                            padding: "4px",
                            boxShadow: "0 0 0 4px #FF8855"
                             }}
                >
                    <div className="card-header" >Client: {order.client}</div>
                    <p className="card-title"> {order.dateEntry} </p>
                    <article className="products-cont" > {order.products.map((product) => (
                        <div
                            key={product.id}
                            className="card-body"
                        >
                            <p className="quantity" >{product.quantity}</p>
                            <p className="product-name"  >{product.name}</p>
                        </div>
                    ))}
                    </article>
                    <button className="btn btn-primary" 
                    style={{ marginTop: "15rem", marginLeft: "40px", width: "10rem", position: "absolute", borderColor: "#FF8855", backgroundColor: "#FF8855", color: "black", fontWeight: "bolder" }} 
                    onClick={() => onClickBehavior(order.id)}>{buttonName}</button>
                </div>
            ))}
            </section>
        </> 
    );
}
export default Orders