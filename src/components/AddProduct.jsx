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

          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Description"
              style={{ height: "100px" }}
              onChange={handleValue}
            />
          </FloatingLabel>
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
