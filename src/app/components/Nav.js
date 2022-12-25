import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const myCart = props.cart;
  const [totalNumberOfProducts, setTotalNumberOfProducts] = React.useState(0);

  React.useEffect(() => {
    if (myCart === null) {
      return;
    }
    let totalProd = 0;
    for (let i = 0; i < myCart.length; i++) {
      totalProd += myCart[i].quantity;
    }
    setTotalNumberOfProducts(totalProd);
  }, [myCart]);

  return (
    <div>
      <div className="headerMain">
        <h1 className="shopTitle">SHOPPE</h1>
        <div className="navBarTop">
          <Link to={"/"}>home</Link>
          <Link to={"/products"}>products</Link>
          <Link to={"/contacts"}>contacts</Link>
        </div>
      </div>
      <Link id="cart" to={"/cart"}>
        cart {totalNumberOfProducts}
      </Link>
    </div>
  );
};

export default Nav;
