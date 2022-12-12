import { useOutletContext } from "react-router-dom";
import React from "react";
import CartCard from "./CartCard";
import Footer from "./Footer";

const Cart = () => {
  const cartDeconstructed = useOutletContext();
  // console.log("cartpage");
  // console.log(cartDeconstructed);
  const { cart, setCart } = cartDeconstructed;

  //in cart show me the products
  // an exact replica of products cart

  // let currentCart = cart[0].title;

  //from products
  const [redifinedCart, setRedifinedCart] = React.useState([]);
  React.useEffect(() => {
    let newCart = cart.map((obj) => ({
      id: obj.id,
      image: obj.image,
      price: obj.price,
      title: obj.title,
      quantity: obj.quantity,
    }));
    setRedifinedCart(newCart);
  }, [cart]);

  const cartDom = redifinedCart.map((product) => {
    return (
      <CartCard
        key={product.id}
        id={product.id}
        image={product.image}
        price={product.price}
        title={product.title}
        allProd={redifinedCart}
      />
    );
  });

  return (
    <div>
      <div>hello from cart</div>
      {cartDom}
      <Footer />
    </div>
  );
};

export default Cart;
