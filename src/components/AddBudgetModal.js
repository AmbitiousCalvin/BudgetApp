import { Form, FormGroup, Modal, Button } from "react-bootstrap";
import { useBudgets } from "../contexts/useBudgets";
import { useEffect, useRef } from "react";

export default function AddBudgetModal({ show, handleClose }) {
  const { addBudget } = useBudgets();
  const nameRef = useRef();
  const maxRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.focus();
  }, [show]);

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });

    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control required ref={nameRef} type="text" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
              required
              ref={maxRef}
              type="number"
              min={0}
              max={10000000}
              step={0.01}
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
