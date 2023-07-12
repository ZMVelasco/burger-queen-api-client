import ('../admin/admin.css')
import * as React from 'react';
import { useState } from 'react';
import Sidebar from "../../sidebar-reu.jsx";
import('../admin/admin.css');
import Employees from './employees.jsx';
import Products from './products.jsx';

const Admin = () => {
  const [showEmployees, setShowEmployees] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleEmployees = () => {
    setShowEmployees(true);
    setShowProducts(false);
  };

  const handleProducts = () => {
    setShowEmployees(false);
    setShowProducts(true);
  };
  return (
    <>
      <h1>Admin</h1>
      <Sidebar
        items={[
          { label: "Employees", component: "employees" },
          { label: "Products", component: "products" },
        ]}
        brandName="BQ"
        onEmployeesClick={handleEmployees}
        onProductsClick={handleProducts}
      />
      <div className="content">
        {showEmployees && <Employees />}
        {showProducts && <Products />}
      </div>
    </>
  );
}

export default Admin