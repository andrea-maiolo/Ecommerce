import React from "react";
import { useOutletContext } from "react-router-dom";

const CartCard = function (props) {
  const moveCart = useOutletContext();
  const { cart, setCart } = moveCart;
  const [quantity, setQuantity] = React.useState(props.quantity);

  function handleSub() {
    if (props.quantity === 0) {
      return;
      //delete from cart
    }
    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
  }

  function removeFromCart(e) {
    // you clicked on a prod in cart
    // show me the location of said product in cart
    // delete it from array

    const referenceEle = e.target.parentElement.id;
    console.log(referenceEle);
    console.log(cart);
    setCart((cart) => {
      cart.splice(cart.indexOf(referenceEle), 1);
    });
    console.log(cart);

    // const referenceDiv = Number(e.target.parentElement.id);
    // let currentProd = props.allProd.filter((prod) =>
    //   prod.id === referenceDiv ? true : false
    // );
    // currentProd = currentProd[0];
    // currentProd.quantity = quantity;
    // setCart((prevCart) => {
    //   return [...prevCart, currentProd];
    // });
    // console.log(cart);
  }

  //   console.log(quantity);
  return (
    <div id={props.id} className="singleProduct">
      <img src={props.image} alt={props.title} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodPrice">{props.price} €</p>
      {/* <div className="prodQ">
        <button onClick={handleSub}>-</button>
        <p>{quantity}</p>
        <button onClick={handlePlus}>+</button>
      </div> */}
      <p>{quantity}</p>
      <button onClick={removeFromCart}>REMOVE FROM CART</button>
    </div>
  );
};

export default CartCard;
