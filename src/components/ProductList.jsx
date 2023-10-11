import React from "react";
import { Card, Button } from "react-bootstrap";
const ProductList = ({ product }) => {
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
            {product.description.length > 40
              ? product.description.slice(0, 39) + "..."
              : product.description}
          </Card.Text>
        </Card.Body>

        <Card.Footer className="text-center">
          <Button variant="primary" className="me-2">
            View
          </Button>
          <Button variant="success" className="me-2">
            Edit
          </Button>
          <Button variant="danger">Delete</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductList;
