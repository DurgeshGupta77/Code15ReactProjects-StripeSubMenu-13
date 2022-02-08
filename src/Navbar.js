import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubMenu = (e) => {
        const text = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = ((tempBtn.left + tempBtn.right) / 2) - 220;
        // const center = tempBtn.left - tempBtn.width;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(text, { center, bottom });
    }
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }
    }
    return <nav className="navigation-bar" onMouseOver={handleSubmenu}>
        <div className="navigation-center">
            <div className="navigation-header">
                <img src={logo} alt="Stripe" />
                <button className="sidebar-toggle-btn" onClick={openSidebar}>
                    <FaBars />
                </button>
            </div>
            <ul className="nav-links">
                <li>
                    <button className="link-btn" onMouseOver={displaySubMenu}>products</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubMenu}>developers</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubMenu}>company</button>
                </li>
            </ul>
            <div className="sign-in-btn-container">
                <button className="sign-in-btn">
                    Sign In
                </button>
            </div>
        </div>
    </nav>
}

export default Navbar;