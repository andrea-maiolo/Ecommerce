import React from "react";
import { useOutletContext } from "react-router-dom";

const ProductCard = function (props) {
  const moveCart = useOutletContext();
  const { cart, setCart } = moveCart;

  function addToCart(e) {
    const referenceDiv = Number(e.target.parentElement.id);
    let currentProd = props.allProd.filter((prod) =>
      prod.id === referenceDiv ? true : false
    );
    currentProd = currentProd[0];

    let filteredArrayRepliceCheck = cart.filter((ele) =>
      ele.id === currentProd.id ? true : false
    );

    if (filteredArrayRepliceCheck.length > 0) {
      let indexToChange = cart.findIndex((ele) => ele.id === currentProd.id);
      setCart((prevState) => {
        const copyOfCart = [...prevState];
        copyOfCart[indexToChange].quantity += 1;
        return copyOfCart;
      });
    } else {
      setCart((prevCart) => {
        return [...prevCart, currentProd];
      });
    }

    showToast("Item added to your cart", 1500);
  }

  function showToast(message, duration) {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.className = "toastNotification";
    document.body.appendChild(toast);

    setTimeout(() => {
      document.body.removeChild(toast);
    }, duration);
  }

  return (
    <div id={props.id} className="singleProduct">
      <img src={props.image} alt={props.title} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodPrice">{props.price} €</p>
      <button className="addToCartButton" onClick={addToCart}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
