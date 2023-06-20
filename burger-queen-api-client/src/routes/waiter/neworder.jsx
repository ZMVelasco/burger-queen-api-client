import ('../waiter/waiter.css')
// import { useState } from "react";
export default 
function NewOrder() {
    return (
        <section className='new-order-section'>
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