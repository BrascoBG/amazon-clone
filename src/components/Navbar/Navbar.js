import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="navbar__search">
        <input type="text" className="navbar__searchInput" />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar__nav">
        <Link to="/login" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionOne">Hello Ivo</span>
            <span className="navbar__optionTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionOne">Returns</span>
            <span className="navbar__optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__optionOne">Your</span>
            <span className="navbar__optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="navbar__link">
          <div className="navbar__Basket">
            <ShoppingBasketIcon />
            <span className="navbar__optionTwo navbar__basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
