import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import ProductContext from "../context/ProductContext";

const CardFooter = ({ product }) => {
  const { handleView, handleEdit, handleDelete } = useContext(ProductContext);

  return (
    <div>
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
    </div>
  );
};

export default CardFooter;
