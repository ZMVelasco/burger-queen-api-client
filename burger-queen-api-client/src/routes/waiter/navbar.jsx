import ('../waiter/waiter.css')
import { useState } from "react";
export default 
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <article className="button-container">
            <button className="burger-menu-button" onClick={handleMenuToggle}>
            <img
                src="../src/assets/hamburger-menu-bold.svg"
                alt="Hamburger menu icon"
                className="burger-icon"
            />
            </button>
            </article>
        {isMenuOpen && (
            <section className="burger-menu">
                <nav className="bm-list">
                    <ul>Create order</ul>
                    <ul>Track order</ul>
                </nav>
                <div className="logout-button">
                    <img
                        src="../src/assets/logout.svg"
                        alt="Logout icon"
                        className="logout-icon"
                    />
                    Log out
                </div>
            </section>
            )}
        </>
        );
    }