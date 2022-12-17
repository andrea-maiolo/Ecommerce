import React from "react";
import { useOutletContext } from "react-router-dom";

const ProductCard = function (props) {
  const [quantity, setQuantity] = React.useState(1);

  const moveCart = useOutletContext();
  const { cart, setCart } = moveCart;

  function handleSub() {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
  }

  function addToCart(e) {
    const referenceDiv = Number(e.target.parentElement.id);
    let currentProd = props.allProd.filter((prod) =>
      prod.id === referenceDiv ? true : false
    );
    currentProd = currentProd[0];
    currentProd.quantity = quantity;

    let filteredArrayRepliceCheck = cart.filter((ele) =>
      ele.id === currentProd.id ? true : false
    );

    if (filteredArrayRepliceCheck.length > 0) {
      let finalQuantity =
        currentProd.quantity + filteredArrayRepliceCheck[0].quantity;
      let productToChange = cart.indexOf(filteredArrayRepliceCheck[0]);
      cart[productToChange].quantity = finalQuantity;
    } else {
      setCart((prevCart) => {
        return [...prevCart, currentProd];
      });
    }
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
      <button onClick={addToCart}>ADD TO CART</button>
    </div>
  );
};

export default ProductCard;
