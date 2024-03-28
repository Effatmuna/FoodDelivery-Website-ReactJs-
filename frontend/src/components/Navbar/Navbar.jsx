import React, { useContext, useState } from "react";
import "./Navbar.css";
import basketImage from "../Navbar/basket_icon.png";
import searchImage from "../Navbar/search_icon.png";
import logo from "../Navbar/logo.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar =({setShowLogin})=>{
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);
    return (
        <div className="navbar">
             <Link to='/'><img src={logo} alt="logo"/> </Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':'' }>Home</Link>
                <a href="#explore-menu" onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</a>
                <a href="#app-download" onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-app</a>
                <a href="#footer" onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Footer</a>

            </ul>
            <div className="navbar-right">
            <img src={searchImage} alt="search"/> 
                <div className="navbar-search-icon">
                <Link to='/cart'><img src={basketImage} alt="search"/> </Link>
                <div className={getTotalCartAmount()===0?'':'dot'}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>

        </div>
    )
}
export default Navbar;