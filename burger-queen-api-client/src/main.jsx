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
import Navbar from "./routes/waiter/navbar.jsx";
import NewOrder from "./routes/waiter/neworder.jsx";
import Prueba from "./routes/waiter/prueba.jsx";

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
    path: "/nav",
    element: <Navbar />,
  },
  {
    path: "/order",
    element: <NewOrder />,
  },
  {
    path: "/prueba",
    element: <Prueba />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
