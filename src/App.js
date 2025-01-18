import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { ProgressBar, Container } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";

export default function App() {
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
      </Container>
    </>
  );
}
