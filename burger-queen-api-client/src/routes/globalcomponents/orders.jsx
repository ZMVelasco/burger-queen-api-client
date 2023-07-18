import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Table from 'react-bootstrap/Table'
import { getOrders } from "../../fetch";
import { useEffect, useState } from "react";
import "../chef/chef.css"

const Orders = ({ orders, buttonName, onClickBehavior, showButton, showDuration, backgroundColour, borderColor, tableHeight }) => {

    const calculateDuration = (entryDate, modificationDate) => {

        const entryTime = new Date(entryDate).getTime();
        const modificationTime = new Date(modificationDate).getTime();
        const duration = modificationTime - entryTime;

        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);

        return `${hours}h ${minutes}m ${seconds}s`;
    };
    return (
        <>
            <h2 className="title-orders">Orders</h2>
            <section id="orders" style={{ height: "78vh", width: "100%", overflow: "scroll" }}>
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="card border-dark mb-3"
                        style={{
                            width: "15rem",
                            minBlockSize: "19rem",
                            marginRight: "2px",
                            backgroundColor: backgroundColour,
                            borderRadius: "10px",
                            padding: "4px",
                            boxShadow: `0 0 0 4px ${borderColor}`,
                            height: "40%"
                        }}
                    >    
                    <div className="card-header" id="card-header-chef">Client: {order.client}</div>
                    <div className="orders-table-container" style={{height:tableHeight, overflowY:"scroll", border:"0px", backgroundColor: backgroundColour}}>
                        <Table striped bordered hover size="sm" style={{ backgroundColor: backgroundColour, margin: "0"}}>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: backgroundColour, fontWeight:"normal" }} colSpan={2}>Created: {order.dateEntry}</th>
                                </tr>
                                <tr>
                                    <th style={{ backgroundColor: backgroundColour }} colSpan={2}>Status: {order.status}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showDuration && (
                                    <tr style={{ backgroundColor: backgroundColour }}>
                                        <td style={{ backgroundColor: backgroundColour }} colSpan={2}>
                                        Duration: {calculateDuration(order.dateEntry, order.modificationDate)}
                                        </td>
                                    </tr>
                                )}
                                {order.products.map((product) => (
                                    <tr style={{ backgroundColor: backgroundColour }} key={product.id}>
                                        <td style={{ backgroundColor: backgroundColour }} >{product.quantity}</td>
                                        <td style={{ backgroundColor: backgroundColour }}>{product.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        </div>
                        {showButton && (
                            <button
                                className="btn btn-primary"
                                id="button-status"
                                style={{
                                    marginTop: "15rem",
                                    marginLeft: "40px",
                                    width: "10rem",
                                    position: "absolute",
                                    backgroundColor: "#FF8855",
                                    color: "black",
                                    fontWeight: "bolder",
                                    border: "2px solid #ffeaa7",
                                }}
                                onClick={() => onClickBehavior(order.id)}
                            >
                                {buttonName}
                            </button>
                        )}
                    </div>
                ))}
            </section>
        </>
    );
}
export default Orders