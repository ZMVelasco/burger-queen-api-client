// // import { useState, propTypes } from 'react';
// // import Burger from './components/Burger';

const Waiter= () => {

return (
    <>
    <nav className="navbar navbar-inverse navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img
              src="../src/assets/hamburger.svg"
              alt="Burger Queen Logo"
              className="bq-logo"
            />
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="/create-order">Create Order</a>
          </li>
          <li>
            <a href="/track-orders">Track Orders</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="sidebar">
      <h1>React Router Admin</h1>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="post">
          <button type="submit">New</button>
        </form>
      </div>
      <nav className="secondary">
        {/* Add secondary navigation content here */}
      </nav>
    </div>
    <button type="button" className="btn btn-info">Info</button>
    <div id="detail"></div>
    <div className="spinner-border text-info" role="status">
<span className="visually-hidden">Loading...</span>
</div>
  </>
);
}
export default Waiter;