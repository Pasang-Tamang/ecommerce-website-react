import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const AddProduct = ({ show, handleValue, addHandler }) => {
  return (
    <div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Image"
            className="mb-3"
          >
            <Form.Control
              name="thumbnail"
              type="text"
              placeholder="Image Link"
              onChange={handleValue}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Product Title"
            className="mb-3"
          >
            <Form.Control
              name="title"
              type="text"
              placeholder="Product Title"
              onChange={handleValue}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Description"
              style={{ height: "100px" }}
              onChange={handleValue}
            />
          </FloatingLabel>

          <Form.Group className="row">
            <Form.Group className="col-6">
              <FloatingLabel controlId="floating" label="Actual Price">
                <Form.Control
                  name="price"
                  placeholder="actual price"
                  onChange={handleValue}
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="col-6">
              <FloatingLabel
                controlId="floatingdiscount"
                label="Discount Percent"
              >
                <Form.Control
                  name="discountPercentage"
                  placeholder="discount percent"
                  onChange={handleValue}
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={addHandler}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
