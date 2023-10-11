import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Navmenu from "../components/Navbar";
import Loader from "../components/Loader";
import AddProduct from "../components/AddProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({
    id: Date.now(),
    thumbnail: "",
    title: "",
    description: "",
  });

  // const [thumbnail, setThumbnail] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
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

  const addProductHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleValue = (e) => {
    // if (e.target.name === "thumbnail") {
    //   setThumbnail(e.target.value);
    // } else if (e.target.name === "title") {
    //   setTitle(e.target.value);
    // } else if (e.target.name === "description") {
    //   setDescription(e.target.value);
    // }

    // console.log("thumbnail", thumbnail, "title", title, "desc", description);
    // setProduct({
    //   [e.target.name]: e.target.value,
    // });

    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(product);
  };

  const addHandler = (e) => {
    e.preventDefault();
    setProducts([product, ...products]);
    setShow(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navmenu />
          <div className="container mb-4 mt-4">
            <button className="btn btn-primary" onClick={addProductHandler}>
              Add Products
            </button>
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

      <AddProduct
        show={show}
        handleValue={handleValue}
        addHandler={addHandler}
      />

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
