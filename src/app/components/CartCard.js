import React from "react";
import { useOutletContext } from "react-router-dom";

const CartCard = function (props) {
  const moveCart = useOutletContext();
  const { cart, setCart } = moveCart;
  const [quantity, setQuantity] = React.useState(props.quantity);

  function handleSub(e) {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevState) => prevState - 1);

    const referenceEle = Number(e.target.parentElement.parentElement.id);
    const changeQuantity = cart.filter((obj) => obj.id == referenceEle);
    changeQuantity[0].quantity -= 1;
  }

  function handlePlus(e) {
    setQuantity((prevState) => prevState + 1);
    const referenceEle = Number(e.target.parentElement.parentElement.id);
    const changeQuantity = cart.filter((obj) => obj.id == referenceEle);
    changeQuantity[0].quantity += 1;
  }

  const removeFromCart = function (e) {
    const referenceEle = Number(e.target.parentElement.id);
    const result = cart.filter((obj) => obj.id !== referenceEle);
    setCart(result);
  };

  return (
    <div id={props.id} className="singleProduct">
      <img src={props.image} alt={props.title} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodPrice">{props.price * quantity}€</p>
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
