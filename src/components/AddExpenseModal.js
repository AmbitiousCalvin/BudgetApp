import { FormGroup, Modal, Button, Form } from "react-bootstrap";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/useBudgets";
import { useEffect, useRef } from "react";

export default function AddExpenseModal({
  show,
  handleClose,
  defaultBudgetId,
}) {
  const { budgets, addExpense } = useBudgets();
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();

  useEffect(() => {
    if (descriptionRef.current) descriptionRef.current.focus();
  }, [show]);

  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      budgetId: budgetIdRef.current.value,
      amount: parseFloat(amountRef.current.value),
      description: descriptionRef.current.value,
    });

    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className="mb-3" controlId="descriptionId">
            <Form.Label>Description</Form.Label>
            <Form.Control required ref={descriptionRef} type="text" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="amountId">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              required
              ref={amountRef}
              type="number"
              min={0}
              max={10000000}
              step={0.01}
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select
              required
              defaultValue={defaultBudgetId}
              ref={budgetIdRef}
            >
              <option
                id={UNCATEGORIZED_BUDGET_ID}
                value={UNCATEGORIZED_BUDGET_ID}
              >
                Uncategorized
              </option>
              {budgets.map((budget) => (
                <option id={budget.id} key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Form.Select>
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
