import { Outlet } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Nav from "./components/Nav";

const App = () => {
  const [cart, setCart] = useState([]);
  const [num, setNum] = useState(1);
  const decreaseNum = () => setNum(num - 1);
  const increaseNum = () => setNum(num + 1);

  // function removeFromCart(e) {
  //   //   // you clicked on a prod in cart
  //   //   // show me the location of said product in cart
  //   //   // delete it from array

  //   const referenceEle = e.target.parentElement;
  //   console.log(referenceEle);
  //   let myIndex = cart.at(referenceEle);
  //   console.log(myIndex);
  //   setCart((cart) => {
  //     cart.splice(cart[myIndex], 1);
  //   });

  //   console.log(cart);
  // }

  console.log("hello from app");
  console.log(cart);
  return (
    <div>
      <Nav />
      <div className="content">
        <Outlet
          context={{
            num,
            setNum,
            decreaseNum,
            increaseNum,
            cart,
            setCart,
            // removeFromCart,
          }}
        />
      </div>
    </div>
  );
};

export default App;
