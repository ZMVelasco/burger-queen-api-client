import ('../waiter/waiter.css')
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default 
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        navigate("/");
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
                <div className="logout-button" onClick={handleLogout}>
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