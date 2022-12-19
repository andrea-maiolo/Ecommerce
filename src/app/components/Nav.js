import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <div className="headerMain">
        <h1 className="shopTitle">SHOPPE</h1>
        <div className="navBarTop">
          <Link to={"/"}>home</Link>
          <Link to={"/products"}>products</Link>
          <Link to={"/contacts"}>contacts</Link>
          <Link id="cart" to={"/cart"}>
            cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
