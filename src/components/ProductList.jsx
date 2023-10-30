import React from "react";
import { Card, Button } from "react-bootstrap";
import { returnProductPrice } from "../utils/helper.js";

const ProductList = ({ product, handleDelete, handleView, handleEdit }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "370px" }} className="box">
        <Card.Header className="h-50">
          <Card.Img src={product.thumbnail} className="h-100"></Card.Img>
        </Card.Header>

        <Card.Body>
          <Card.Title className="text-center">
            {product.title.length > 15
              ? product.title.slice(0, 14) + "..."
              : product.title}
          </Card.Title>
          <Card.Text className="text-center">
            {product.description.length > 30
              ? product.description.slice(0, 29) + "..."
              : product.description}
          </Card.Text>

          {/* <div className="row ">
            <div className="col-5 text-success">
              Price: ${returnActualPrice(product)}
            </div>
            <div className="col-3 text-secondary">
              <del> {product.price}</del>
            </div>
            <div className="col-4 text-danger">
              {`-${product.discountPercentage}%`}
            </div>
          </div> */}

          <div className="price-container d-flex justify-content-around">
            <div className="left-container text-success">
              Price: ${returnProductPrice(product)}
            </div>

            <div className="right-container text-danger">
              <del className="text-secondary me-2"> {product.price}</del>
              {`-${product.discountPercentage}%`}
            </div>
          </div>
        </Card.Body>

        <Card.Footer className="text-center">
          <Button
            variant="primary"
            className="me-2"
            onClick={(e) => handleView(e, product.id)}
          >
            View
          </Button>
          <Button
            variant="success"
            className="me-2"
            onClick={(e) => handleEdit(e, product)}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={(e) => handleDelete(e, product.id)}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductList;
