import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import { useState } from "react";
import { useBudgets } from "./contexts/useBudgets";
import { AddBudgetModal } from "./components/AddBudgetModal";

export default function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" className="mb-4" gap={2}>
          <h1 className="me-auto">Budget</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px", // Adjust the gap between items as needed
            justifyContent: "center",
          }}
        >
          <BudgetCard name="Entertainment" amount="200" max="1000" />
          <BudgetCard name="Entertainment" amount="600" max="1000" />
          <BudgetCard name="Entertainment" amount="200" max="1000" />
          <BudgetCard name="Entertainment" amount="200" max="1000" />
          <BudgetCard name="Entertainment" amount="200" max="1000" />
          <BudgetCard name="Entertainment" amount="200" max="1000" />
        </div>
        <AddBudgetModal
          show={showAddBudgetModal}
          handleClose={() => setShowAddBudgetModal(false)}
        />
      </Container>
    </>
  );
}
