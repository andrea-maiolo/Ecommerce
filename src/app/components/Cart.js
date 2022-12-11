import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const cartDeconstructed = useOutletContext();
  console.log(cartDeconstructed);
  const { cart, setCart } = cartDeconstructed;
  // const [] = useOutletContext();
  return (
    <div>
      <div>{cart}hello from cart</div>
    </div>
  );
};

export default Cart;
