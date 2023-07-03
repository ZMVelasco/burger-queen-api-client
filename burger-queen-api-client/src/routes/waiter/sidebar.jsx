// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { useState } from "react";
// import ProductCard from "./menu";
// import WaiterTracker from "./wtracker";
// import { useNavigate } from "react-router-dom"; 
// import logoutIcon from "../../assets/logout.svg";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // State to control the offcanvas visibility
//   const [componentToRender, setComponentToRender] = useState(null);

//   const navigate = useNavigate();

//   const toggleOffcanvas = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClick = (e) => {
//     const clickedItem = e.target;
//     const component = clickedItem.dataset.component;

//     if (component === "product-card") {
//       setComponentToRender(<ProductCard />);
//     } else if (component === "waiter-tracker") {
//       setComponentToRender(<WaiterTracker />);
//     }
//     toggleOffcanvas()
//   };

//   const handleLogout = () => {
//     navigate("/");
// };

//   return (
//     <>
//       <nav className="navbar navbar-dark bg-dark fixed-top" id="bootstrap-navbar">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasDarkNavbar"
//             aria-controls="offcanvasDarkNavbar"
//             aria-label="Toggle navigation"
//             onClick={toggleOffcanvas}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className={`offcanvas offcanvas-start text-bg-dark ${isOpen ? "show" : ""}`}
//             tabIndex="-1"
//             id="offcanvasDarkNavbar"
//             aria-labelledby="offcanvasDarkNavbarLabel"
//           >
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
//                 BQ
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-white"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//                 onClick={toggleOffcanvas}
//               ></button>
//             </div>
//             <div className="offcanvas-body">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={handleClick}
//                     data-component="product-card"
//                   >
//                     Create order
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={handleClick}
//                     data-component="waiter-tracker"
//                   >
//                     Track order
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-success" type="button" id="sidebar-logout" onClick={handleLogout}>
//                     <img src={logoutIcon} alt="Logout icon" className="logout-icon" />
//                     Log out
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <h5 className="navbar-brand">Welcome!</h5>
//         </div>
//       </nav>
//       {componentToRender}
//     </>
//   );
// };

// export default Sidebar;