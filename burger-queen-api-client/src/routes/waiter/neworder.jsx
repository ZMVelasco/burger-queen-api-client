import('../waiter/waiter.css')
// import { useState } from "react";
const NewOrder = ({ selectedProduct }) => {
    return (
        <section className='new-order-section'>
            {selectedProduct && (
                <p>{selectedProduct.name}</p>
            )}
            <article className="order-total">
                <p className="order-total-text">
                    Total: $0.00
                </p>
                <button className="place-order">
                    Place order
                </button>
            </article>
        </section>
    );
}
export default NewOrder;