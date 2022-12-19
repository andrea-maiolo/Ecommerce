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
    const referenceEle = e.target.parentElement.parentElement;
    cart.at(referenceEle).quantity -= 1;
  }

  function handlePlus(e) {
    setQuantity((prevState) => prevState + 1);
    const referenceEle = e.target.parentElement.parentElement;
    cart.at(referenceEle).quantity += 1;
  }

  const removeFromCart = function (e) {
    const referenceEle = e.target.parentElement;
    console.log(referenceEle);
    let myIndex = cart.indexOf(referenceEle);
    console.log(myIndex);
    // setCart((cart) => {
    //   cart.splice(cart[myIndex], 1);
    // });

    console.log(cart);
  };

  return (
    <div id={props.id} className="singleProduct">
      <img src={props.image} alt={props.title} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodPrice">{props.price * quantity} €</p>
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
