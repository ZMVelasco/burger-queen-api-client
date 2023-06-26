import("../waiter/waiter.css");
//import { useState } from "react";

const NewOrder = ({ selectedProducts, onRemoveProduct }) => {

    const getProductCount = (productId) => {
        const count = selectedProducts.reduce((acc, product) => {
          if (product.id === productId) {
            return acc + 1;
          }
          return acc;
        }, 0);
        return count;
      };
      // Filtrar productos duplicados
      const uniqueSelectedProducts = Array.from(new Set(selectedProducts.map(product => product.id)))
      .map(id => {
        return selectedProducts.find(product => product.id === id);
      });

      const handleRemoveProduct = (productId) => {
        onRemoveProduct(productId);
      };

  return (
    <section className="new-order-section">
      <article>
        {uniqueSelectedProducts.map((product) => (
            <>
          <p key={product.id }>{getProductCount(product.id)} {product.name} 
          <i className="bi bi-trash3 p-3" style={{ color:"red" }} onClick={() => handleRemoveProduct(product.id)}></i>
          </ p>
          </>
        ))}
      </article>
      <article className="order-total">
        <p className="order-total-text">Total: $0.00</p>
        <button className="place-order">Place order</button>
      </article>
    </section>
  );
};

export default NewOrder;


