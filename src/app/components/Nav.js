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
    <div className="headerMain">
      <h1 className="shopTitle">SHOPPE</h1>
      <div className="navBarTop">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contacts"}>Contacts</Link>
        <Link id="cart" to={"/cart"}>
          {/* <button onClick={removeFromCart}> */}
          <img
            alt="remove from cart"
            src={require(`../../styles/cartFilled.svg`).default}
          />
          {/* </button> */}
          {totalNumberOfProducts}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
