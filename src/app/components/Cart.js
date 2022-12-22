import { useOutletContext } from "react-router-dom";
import React from "react";
import CartCard from "./CartCard";
import Footer from "./Footer";

const Cart = () => {
  const cartDeconstructed = useOutletContext();
  const { cart, setCart } = cartDeconstructed;
  const [totalPrice, setTotalPrice] = React.useState(0);

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
  console.log(cart);

  const cartDom = redifinedCart.map((product) => {
    return (
      <CartCard
        key={product.id}
        id={product.id}
        quantity={product.quantity}
        image={product.image}
        price={product.price}
        title={product.title}
        allProd={redifinedCart}
      />
    );
  });

  React.useEffect(() => {
    let tp = 0;
    for (let i = 0; i < cart.length; i++) {
      let qOfEle = cart[i].quantity;
      let pOfEle = cart[i].price;
      let tempElePrice = pOfEle * qOfEle;
      tp += tempElePrice;
    }
    setTotalPrice(tp);
  }, [cart]);

  return (
    <div>
      {cart.length === 0 && <div>Your cart is empty, shop now!</div>}
      {cartDom}
      <p>Total price {totalPrice}€</p>
      <button>BUY</button>
      <Footer />
    </div>
  );
};

export default Cart;
