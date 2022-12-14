import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Nav from "./components/Nav";

const App = () => {
  const [cart, setCart] = useState([]);
  const [num, setNum] = useState(1);
  const decreaseNum = () => setNum(num - 1);
  const increaseNum = () => setNum(num + 1);

  // let referenceCart = [];

  let noReplicaCart = [];
  noReplicaCart = cart.map((ele) => {
    if (cart.length == 0) {
      return;
    } else if (!noReplicaCart.includes(ele)) {
      noReplicaCart.push(ele);
      return noReplicaCart;
    } else {
      noReplicaCart.splice(noReplicaCart.indexOf(ele), 1);
      return noReplicaCart;
    }
  });
  console.log(noReplicaCart);

  useEffect(() => {
    setCart(noReplicaCart);
  }, [0]);

  console.log("hello from app");
  console.log(cart);
  return (
    <div>
      <Nav cartL={cart.length} />
      <div className="content">
        <Outlet
          context={{ num, setNum, decreaseNum, increaseNum, cart, setCart }}
        />
      </div>
    </div>
  );
};

export default App;
