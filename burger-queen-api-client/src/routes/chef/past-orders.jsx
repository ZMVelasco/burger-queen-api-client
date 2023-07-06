import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import('../waiter/waiter.css')
import Orders from "../globalcomponents/orders";

const PastOrders = () => {
    return (
        <>
            <h1 className="container">Past orders</h1>
            <Orders buttonName="Ready to serve" statusFilter={["ready to serve", "Delivered"]} showButton={false} />
        </>
    )
}
export default PastOrders;