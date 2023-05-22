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
        <img
          id="logoInNav"
          src="https://cdn.dribbble.com/users/976757/screenshots/5375959/05.jpg"
        />
        <Link to={"/eCommerce"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contacts"}>Contacts</Link>
        <Link id="cartInNav" to={"/cart"}>
          <img
            alt="your cart"
            id="cartSvg"
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
