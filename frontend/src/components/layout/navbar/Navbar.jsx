import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        {/* Header */}
        <header>
            <h2 className="logo">BookStore MERN</h2>
            <nav className="navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="books/table">Table</NavLink>
                <NavLink to="books/card">Card</NavLink>
                <button className="btnLogin-popup">Login</button>
            </nav>
        </header>
    </div>
  )
}
export default Navbar;
