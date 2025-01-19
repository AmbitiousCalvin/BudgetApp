import { FormGroup, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useBudgets } from "../contexts/useBudgets";
import { useRef } from "react";

export function AddBudgetModal({ show, handleClose }) {
  const { addBudget } = useBudgets();
  const nameRef = useRef();
  const maxRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({ name: nameRef.current.value, max: maxRef.current.value });
    handleClose();
  }

  return (
    <Modal show={true} onHide={handleClose}>
      <Form onSubtmi={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" />
          </FormGroup>
          <FormGroup>
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control ref={nameRef} type="number" min={0} step={0.01} />
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
