import React from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { returnProductPrice } from "../utils/helper";

const ViewProduct = ({ showView, viewProd, handleClose }) => {
  return (
    <div>
      <Modal show={showView}>
        <Modal.Header closeButton>
          <Modal.Title>View Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Image"
            className=" "
          >
            <Form.Control
              type="image"
              name="thumbnail"
              placeholder="Image Here"
              src={viewProd.thumbnail}
              style={{ height: "330px", width: "465px" }}
              className="text-center"
              disabled
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Product Title"
            className="mb-3 mt-3"
          >
            <Form.Control
              name="title"
              type="text"
              placeholder="Product Title"
              value={viewProd.title}
              readOnly
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Description "
            className="mb-3"
          >
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Description"
              style={{ height: "80px" }}
              value={viewProd.description}
              readOnly
            />
          </FloatingLabel>

          <Form.Group className="row">
            <Form.Group className="col-4">
              <FloatingLabel controlId="floatingInput" label="Product Price">
                <Form.Control
                  name="price"
                  type="text"
                  placeholder="Product Price"
                  value={returnProductPrice(viewProd)}
                  readOnly
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="col-4">
              <FloatingLabel controlId="floatingInput" label="Product Price">
                <Form.Control
                  name="price"
                  type="text"
                  placeholder="Product Price"
                  value={viewProd.price}
                  readOnly
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="col-4">
              <FloatingLabel label="Product Discount">
                <Form.Control
                  name="discountPercentage"
                  type="text"
                  placeholder="Product Discount"
                  value={`${viewProd.discountPercentage}%`}
                  readOnly
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewProduct;
