import { useOutletContext } from "react-router-dom";
import React from "react";
import CartCard from "./CartCard";
import Footer from "./Footer";

const Cart = () => {
  const cartDeconstructed = useOutletContext();
  const { cart, setCart } = cartDeconstructed;

  // let noReplicaCart = [];
  // if (cartDeconstructed.cart.length !== 0) {
  //   noReplicaCart = cartDeconstructed.cart.map((ele) => {
  //     if (!noReplicaCart.includes(ele)) {
  //       noReplicaCart.push(ele);
  //       return noReplicaCart;
  //     } else {
  //       noReplicaCart.splice(noReplicaCart.indexOf(ele), 1);
  //       return noReplicaCart;
  //     }
  //   });
  // }
  // console.log(noReplicaCart);

  // React.useEffect(() => {
  //   setCart(noReplicaCart);
  // }, [0]);

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
        quantity={product.quantity}
        image={product.image}
        price={product.price}
        title={product.title}
        allProd={redifinedCart}
      />
    );
  });

  return (
    <div>
      <div>Your cart is empty, shop now!</div>
      {cartDom}
      <Footer />
    </div>
  );
};

export default Cart;
