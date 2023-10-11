import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Navmenu from "../components/Navbar";
import Loader from "../components/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);

  const URL = import.meta.env.VITE_BACKEND_URL;
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(URL + "/products");
      setProducts(response.data.products);
      //console.log(products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
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
        </div>
      )}
      {/* {products.length > 0 ? (
        <div>
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
        </div>
      ) : (
        <Loader />
      )} */}
    </>
  );
};

export default Products;
