import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ReactLoading from "react-loading";
import Footer from "./Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [tempProducts, setTempProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?sort=asce")
      .then((res) => res.json())
      .then((json) => setTempProducts(json));
  }, [products]);

  useEffect(() => {
    let newProducts = tempProducts.map((obj) => ({
      id: obj.id,
      image: obj.image,
      price: obj.price,
      title: obj.title,
      quantity: 1,
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
        quantity={product.quantity}
        allProd={products}
      />
    );
  });

  return (
    <div>
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
