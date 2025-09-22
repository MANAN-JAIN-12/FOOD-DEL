import "./Navbar.css";
import { assets } from "../assets/admin_assets/assets";
import { assetsFrontend } from "../assets/frontend_assets/assets";
import { useState } from "react";
const Navbar = () => {
  const[menu,setmenu]=useState("home")
  return (
    <div className="navbar">
      <img src={assetsFrontend.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li  onClick={() => setmenu("home")}>Home</li>
        <li  onClick={() => setmenu("menu")}>Menu</li>
        <li  onClick={() => setmenu("mobile-app")}>Mobile App</li>
        <li onClick={() => setmenu("contact-us")}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assetsFrontend.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assetsFrontend.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
