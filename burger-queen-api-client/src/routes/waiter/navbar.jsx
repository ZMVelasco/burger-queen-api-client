import ('../waiter/waiter.css')
export default 
function Navbar() {
    return (
        <>
        <article className="button-container">
            <button className="burger-menu-button">
                <img src="../src/assets/bqlogo.png"
                    alt="Burger Queen Logo"
                    className= "burger-icon"/>
            </button>
        </article>
        <section className="burger-menu">
            <nav className="bm-list">
                <ul> Create order </ul>
                <ul> Track orders </ul>
            </nav>
        </section>
        </>
    )
}