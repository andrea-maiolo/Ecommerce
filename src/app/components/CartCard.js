import React from "react";
import { useOutletContext } from "react-router-dom";

const CartCard = function (props) {
  const moveCart = useOutletContext();
  const { cart, setCart } = moveCart;
  const [quantity, setQuantity] = React.useState(props.quantity);

  function handleSub(e) {
    if (props.quantity === 0) {
      return;
      //delete from cart
    }
    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus(e) {
    setQuantity((prevState) => prevState + 1);
    const referenceEle = e.target.parentElement.parentElement;
    cart.at(referenceEle).quantity = quantity;
    console.log(cart);

    // setCart((cart) => {
    //   cart.splice(cart.indexOf(referenceEle), 1);
    // });
  }

  function removeFromCart(e) {
    //   // you clicked on a prod in cart
    //   // show me the location of said product in cart
    //   // delete it from array

    //   const referenceEle = e.target.parentElement.id;
    //   console.log(referenceEle);
    //   console.log(cart);
    //   setCart((cart) => {
    //     cart.splice(cart.indexOf(referenceEle), 1);
    //   });
    console.log(cart);
  }

  return (
    <div id={props.id} className="singleProduct">
      <img src={props.image} alt={props.title} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodPrice">{props.price} €</p>
      <div className="prodQ">
        <button onClick={handleSub}>-</button>
        <p>{quantity}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={removeFromCart}>REMOVE FROM CART</button>
    </div>
  );
};

export default CartCard;
