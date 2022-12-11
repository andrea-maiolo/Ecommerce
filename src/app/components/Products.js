import { useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ReactLoading from "react-loading";
import Footer from "./Footer";

const Products = () => {
  const thing = useOutletContext();
  console.log(thing);
  const { num, increaseNum, decreaseNum } = thing;

  //this is the old code
  const [products, setProducts] = useState([]);
  const [tempProducts, setTempProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?sort=asce")
      .then((res) => res.json())
      .then((json) => setTempProducts(json));
  }, [0]);

  useEffect(() => {
    let newProducts = tempProducts.map((obj) => ({
      id: obj.id,
      image: obj.image,
      price: obj.price,
      title: obj.title,
    }));
    setProducts(newProducts);
  }, [tempProducts]);

  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoadingPage(false);
    }
  }, [products]);

  const productsDom = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        image={product.image}
        price={product.price}
        title={product.title}
        allProd={products}
      />
    );
  });

  return (
    <div>
      <div>products</div>
      <div>
        <button onClick={decreaseNum}>-</button>
        {num}
        <button onClick={increaseNum}>+</button>
      </div>
      {/* //old code */}
      <div className="shopPage">
        {loadingPage && (
          <div className="loadingPage">
            <h2 data-testid="loadT" className="loadT">
              Loading products
            </h2>
            <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
          </div>
        )}
        {!loadingPage && (
          <div className="prodsDiv">
            <h2 className="shopTheLatest">Shop the latest</h2>
            {productsDom}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Products;

//   return (
//     <div className="shopPage">
//       <Header />
//       {loadingPage && (
//         <div className="loadingPage">
//           <h2 data-testid="loadT" className="loadT">
//             Loading products
//           </h2>
//           <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
//         </div>
//       )}
//       {!loadingPage && (
//         <div className="prodsDiv">
//           <h2 className="shopTheLatest">Shop the latest</h2>
//           {productsDom}
//           <div>
//             <button className="cartButton">
//               <img
//                 className="cartImg"
//                 alt="Your cart"
//                 src={require(`../../styles/shopping_cart.svg`).default}
//               />
//             </button>
//             {productsInCart}
//           </div>
//         </div>
//       )}

//       {/* //new code */}
//       <div>
//         <div>products</div>
//         <button onClick={decreaseNum}>-</button>
//         {num}
//         <button onClick={increaseNum}>+</button>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Shop;
