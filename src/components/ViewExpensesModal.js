import { FormGroup, Modal, Button, Stack } from "react-bootstrap";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/useBudgets";
import { useEffect, useRef } from "react";
import { currencyFormatter } from "../utils.js";

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpense, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpense(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <Modal show={budgetId != null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack
            direction="horizontal"
            gap="2"
            className="d-flex align-items-baseline"
          >
            <div>Expenses - {budget?.name}</div>
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <Button
                onClick={() => {
                  deleteBudget(budget?.id);
                  handleClose();
                }}
                variant="outline-danger"
              >
                Delete
              </Button>
            )}
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" gap="3">
          {expenses?.map((expense) => (
            <Stack direction="horizontal" gap="3" key={expense.id}>
              <div className="me-auto fs-4">{expense.description}</div>
              <div className="fs-5">{currencyFormatter(expense.amount)}</div>
              <Button
                onClick={() => {
                  deleteExpense(expense?.id);
                }}
                className="d-flex align-items-middle justify-content-middle"
                size="sm"
                variant="outline-danger"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>{" "}
              </Button>
            </Stack>
          ))}
        </Stack>
      </Modal.Body>
    </Modal>
  );
}
