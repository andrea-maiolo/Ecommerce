import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";

const App = () => {
  const [cart, setCart] = useState([]);
  // const [what, setWhat] = useState('what');
  const [num, setNum] = useState(1);
  const decreaseNum = () => setNum(num - 1);
  const increaseNum = () => setNum(num + 1);
  // const stateObj = {
  //   num,
  //   setNum,
  //   decreaseNum,
  //   increaseNum,
  // };
  return (
    <div>
      <Nav num={num} />
      <div className="content">
        {/* <Outlet context={[cart, setCart]} /> */}
        {/* <Outlet context={{ stateObj }} /> */}
        <Outlet
          context={{ num, setNum, decreaseNum, increaseNum, cart, setCart }}
        />
      </div>
    </div>
  );
};

export default App;
