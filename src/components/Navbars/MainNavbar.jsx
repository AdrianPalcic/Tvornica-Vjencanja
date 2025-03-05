import { useState } from "react";
import { Link } from "react-router-dom";

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="main-navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="/logo (2).png" alt="Tvornica Vjencanja Logo" />
                    </Link>
                    <div className="navbar-links">
                        <Link to="/blogs" className="nav-link">Blog</Link>
                        <Link to="/brends" className="nav-link">Ponude</Link>
                        <Link to="/brideBlogs" className="nav-link">Vjenčanja</Link>
                        <a href="/onama#contact-form" className="contact-button">Kontakt</a>
                    </div>
                    {/* Sidebar Toggle Button */}
                    <button className="sidebar-toggle" onClick={() => setIsOpen(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-button" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <div className="sidebar-content">
                    <div className="sidebar-logo">
                        <Link to="/">
                            <img src="/logo (2).png" alt="Tvornica Vjencanja Logo" />
                        </Link>
                    </div>
                    <nav className="sidebar-nav">
                        <Link to="/blogs" className="sidebar-link">Blog</Link>
                        <Link to="/brends" className="sidebar-link">Ponude</Link>
                        <Link to="/brideBlogs" className="sidebar-link">Vjenčanja</Link>
                        <a href="/onama#contact-form" className="sidebar-link contact-button">Kontakt</a>
                    </nav>
                    <div className="sidebar-placeholder">
                        <h3>Welcome to Tvornica Vjencanja</h3>
                        <p>Discover the perfect wedding experience with our expert services and inspiration.</p>
                        <p>Browse our collections, read our blog, and find everything you need for your special day.</p>
                    </div>
                </div>
            </aside>

            {/* Overlay to Close Sidebar on Click */}
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default MainNavbar;
