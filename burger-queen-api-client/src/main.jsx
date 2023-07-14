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
import Chef from "./routes/chef/chef.jsx";
import DeleteModal from "./routes/globalcomponents/DeleteModal.jsx";



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
    path: "/chef",
    element: <Chef />,
  },
  {
    path: "/delete",
    element: <DeleteModal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
