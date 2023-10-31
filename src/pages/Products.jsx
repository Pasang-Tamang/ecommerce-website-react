import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Navmenu from "../components/Navbar";
import Loader from "../components/Loader";
import AddProduct from "../components/AddProduct";
import ViewProduct from "../components/ViewProduct";
import EditProduct from "../components/EditProduct";
import { FloatingLabel, Form } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showView, setShowView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editedProduct, setEditedproduct] = useState({});
  const [product, setProduct] = useState({
    id: Date.now(),
    thumbnail: "",
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
  });
  const [viewProd, setViewProd] = useState({});
  const [searchProducts, setSearchProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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
      setSearchProducts(response.data.products);
      const categorie = response.data.products.map((product) => {
        return product.category;
      });
      //console.log(categories);
      //console.log([...new Set(categorie)]);
      const uniqueCategories = [...new Set(categorie)];
      setCategories(uniqueCategories);
      //console.log(categories);

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

  const handleView = (e, id) => {
    e.preventDefault();
    setShowView(true);
    // const viewProd = products.map((prod) => {
    //   if (id === prod.id) {
    //     return prod;
    //   } else {
    //     return "not";
    //   }
    // });

    const viewProduct = products.find((prod) => {
      return id === prod.id;
    });
    //console.log(viewProduct);
    setViewProd(viewProduct);
    console.log(viewProd);
  };

  const handleEdit = (e, product) => {
    e.preventDefault();
    console.log("edit");
    setEdit(true);
    //console.log(product);
    const prod = products.find((prod) => {
      return prod.id === product.id;
    });

    setEditedproduct(prod);
    //console.log(editedProduct);
  };

  const handleCloseEdit = (e) => {
    setEdit(false);
  };

  const handleEditChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setEditedproduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    console.log(editedProduct);
  };

  const editProduct = (e) => {
    e.preventDefault();
    console.log("edited", editedProduct);

    const updatedProduct = products.map((product) => {
      return product.id === editedProduct.id ? editedProduct : product;
    });

    setProducts(updatedProduct);
    setEdit(false);
  };
  const handleClose = () => {
    setShowView(false);
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

  const handleDelete = (e, id) => {
    e.preventDefault();
    const filteredProduct = products.filter((prod) => {
      return id !== prod.id;
    });

    setProducts(filteredProduct);
  };

  function searchProduct(e) {
    console.log(e.target.value);
    console.log(
      products[0].title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(searchProducts);
    const searchedProduct = searchProducts.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setProducts(searchedProduct);
  }

  function filterProduct(data) {
    //console.log(data === "");
    if (data === "") {
      setProducts(searchProducts);
    } else {
      const filteredProduct = searchProducts.filter((product) => {
        return product.category === data;
      });
      setProducts(filteredProduct);
    }

    //console.log(filteredProduct);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navmenu />
          <div className="container mb-4 mt-4 d-flex justify-content-between">
            <button className="btn btn-primary" onClick={addProductHandler}>
              Add Products
            </button>

            <div className="search d-flex gap-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Search Product here"
              >
                <Form.Control
                  name="SearchKey"
                  type="text"
                  placeholder="Product Price"
                  onChange={searchProduct}
                  style={{ width: "200px" }}
                />
              </FloatingLabel>

              <Form.Select onChange={(e) => filterProduct(e.target.value)}>
                <option value="">Filter with Categories</option>
                {categories.map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </div>

          <div
            id="card-div"
            className=" d-flex flex-wrap justify-content-center gap-5"
          >
            {products.map((product) => {
              //console.log(products);
              return (
                <ProductList
                  product={product}
                  key={product.id}
                  handleDelete={handleDelete}
                  handleView={handleView}
                  handleEdit={handleEdit}
                />
              );
            })}
          </div>
        </div>
      )}

      <AddProduct
        show={show}
        handleValue={handleValue}
        addHandler={addHandler}
      />

      <ViewProduct
        showView={showView}
        viewProd={viewProd}
        handleClose={handleClose}
      />

      <EditProduct
        edit={edit}
        editedProduct={editedProduct}
        handleClose={handleCloseEdit}
        handleEditChange={handleEditChange}
        editProduct={editProduct}
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
