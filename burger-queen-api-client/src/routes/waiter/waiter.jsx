// // import { useState, propTypes } from 'react';
import Navbar from "./navbar.jsx";
import ProductCard from "./menu.jsx";

const Waiter = () => {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <ProductCard />
      </div>
    </>
  );
};

export default Waiter;