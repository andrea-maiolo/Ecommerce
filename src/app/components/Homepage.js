import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <main className="storySection">
        <h2 className="secondHeader">Buy it. Use it. Break it. Fix it.</h2>
        <h3 className="storytelling">
          Fast and durable ssd cards for every computer
        </h3>
        <Link to={"/products"} className="buyLink">
          Buy >
        </Link>
        <img
          className="imageFrontPage"
          src="https://www.thedigitalbridges.com/wp-content/uploads/2016/09/ssd-drive-advantages-over-hdd-drive.jpg"
          alt="SDD card"
        ></img>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
