import * as React from "react";
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./routes/login/login.jsx";
import Waiter from "./routes/waiter/waiter.jsx";
import Admin from "./routes/admin/admin.jsx";
import NewOrder from "./routes/waiter/neworder.jsx";
import Sidebar from "./routes/waiter/sidebar.jsx";
import WaiterTracker from "./routes/waiter/wtracker.jsx";
import ProductCard from "./routes/waiter/menu.jsx";
import Chef from "./routes/chef/chef.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/waiter",
    element: <Waiter />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/order",
    element: <NewOrder />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/wtracker",
    element: <WaiterTracker />,
  },
  {
    path: "/createorder",
    element: <ProductCard />,
  },
  {
    path: "/chef",
    element: <Chef />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
