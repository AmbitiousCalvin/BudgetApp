import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "./contexts/useBudgets";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import ViewExpensesModal from "./components/ViewExpensesModal";

export default function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  useState();
  const { budgets, getBudgetExpense } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <Container fluid className="my-4 px-4">
      <Stack
        direction="horizontal"
        className="mb-4 d-flex align-items-start"
        gap={1}
      >
        <h1 className="me-auto">Budget</h1>
        <div className="d-flex gap-2 flex-wrap justify-content-end ms-auto">
          <Button onClick={() => setShowAddBudgetModal(true)} variant="primary">
            Add Budget
          </Button>
          <Button variant="outline-primary" onClick={openAddExpenseModal}>
            Add Expense
          </Button>
        </div>
      </Stack>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {budgets.map((budget) => {
          const amount = getBudgetExpense(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
              gray
              onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              onViewExpenseClick={() => setViewExpensesModalBudgetId(budget.id)}
            />
          );
        })}

        <UncategorizedBudgetCard
          onAddExpenseClick={() => openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)}
          onViewExpenseClick={() =>
            setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
          }
        />

        <TotalBudgetCard />
      </div>

      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false)}
        defaultBudgetId={addExpenseModalBudgetId}
      />

      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
    </Container>
  );
}
