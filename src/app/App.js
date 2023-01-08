import { Outlet } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Nav from "./components/Nav";

const App = () => {
  const [cart, setCart] = useState([]);
  const [num, setNum] = useState(1);
  const decreaseNum = () => setNum(num - 1);
  const increaseNum = () => setNum(num + 1);

  return (
    <div>
      <Nav cart={cart} />
      <div className="content">
        <Outlet
          context={{
            num,
            setNum,
            decreaseNum,
            increaseNum,
            cart,
            setCart,
          }}
        />
      </div>
    </div>
  );
};

export default App;
