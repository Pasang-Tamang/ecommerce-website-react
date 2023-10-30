import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { returnProductPrice } from "../utils/helper";

function StaticExample({
  edit,
  editedProduct,
  handleClose,
  handleEditChange,
  editProduct,
}) {
  return (
    <div>
      <Modal show={edit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Image Link"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="product image"
              value={editedProduct.thumbnail}
              name="thumbnail"
              onChange={handleEditChange}
            ></Form.Control>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTitle"
            label="Product Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="product title"
              value={editedProduct.title}
              onChange={handleEditChange}
              name="title"
            ></Form.Control>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingDescription"
            label="Product Description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              as="textarea"
              placeholder="product description"
              value={editedProduct.description}
              onChange={handleEditChange}
              name="description"
              style={{ height: "80px" }}
            ></Form.Control>
          </FloatingLabel>

          <Form.Group className="row">
            <Form.Group className="col-4">
              <FloatingLabel controlId="floating" label="Actual Price">
                <Form.Control
                  type="text"
                  placeholder="actual price"
                  value={editedProduct.price}
                  onChange={handleEditChange}
                  name="price"
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="col-4">
              <FloatingLabel
                controlId="floatingdiscount"
                label="Discount Percent"
              >
                <Form.Control
                  type="text"
                  placeholder="discount percent"
                  value={editedProduct.discountPercentage}
                  onChange={handleEditChange}
                  name="discountPercentage"
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              editProduct(e);
            }}
          >
            Edit Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StaticExample;
