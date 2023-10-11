import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Navmenu from "../components/Navbar";

import Navbar from "../components/Navbar";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navmenu />
      <div className="container mb-4 mt-4">
        <button className="btn btn-primary">Add Products</button>
      </div>

      <div
        id="card-div"
        className=" d-flex flex-wrap justify-content-center gap-5"
      >
        {products.map((product) => {
          //console.log(product);
          return <ProductList product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Products;
