import React, { useContext, useState } from "react";
import { useRef } from "react";
import "./Navbar.css";
import logo from "../assets/g_logo.png";
import cart_icon from "../assets/shopping-cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/HomeContext";
import dropdown_icon from "../assets/dropdown_icon.png";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(CartContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="100px" />
        <p>Game Hub</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={dropdown_icon}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>{" "}
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("pc")}>
          <Link to="/pc" style={{ textDecoration: "none" }}>
            PC
          </Link>
          {menu === "pc" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("ps")}>
          <Link to="/ps" style={{ textDecoration: "none" }}>
            Playstation
          </Link>
          {menu === "ps" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("xbox")}>
          <Link to="/xbox" style={{ textDecoration: "none" }}>
            Xbox
          </Link>
          {menu === "xbox" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
