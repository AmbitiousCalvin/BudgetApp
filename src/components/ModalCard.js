import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

export default function AddExpenseModal({ text, data, defaultValue }) {
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);
  const [isValid, setIsValid] = useState(true); // Track validity

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAmountChange = (e) => {
    let value = e.target.value;
    const isValidAmount = /^[1-9]\d*(\.\d+)?$/.test(value);

    if (value && !isValidAmount) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setAmount(value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add a description for your expense"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                placeholder="Add your expense amount"
                onChange={handleAmountChange}
                isInvalid={!isValid} // Apply invalid state
                required
              />
              {/* Optional: Show error message when input is invalid */}
              {!isValid && (
                <Form.Control.Feedback type="invalid">
                  Amount cannot be negative or zero.
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Budget</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value={defaultValue}>{defaultValue}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add New Expense
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
