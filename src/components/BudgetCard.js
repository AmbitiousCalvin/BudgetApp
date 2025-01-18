import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { ProgressBar, Container } from "react-bootstrap";
import { currencyFormatter } from "../utils.js";

export default function BudgetCard({ name, description, amount, max }) {
  const progress = (amount / max) * 100;

  return (
    <Card
      className="rounded-3 border border-secondary overflow-hidden
  
      "
    >
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <div>{name}</div>
          <div>
            {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
          </div>
        </Card.Title>
        <Card.Text>
          {description}
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>

        <ProgressBar
          className="rounded-pill"
          striped
          variant={
            progress < 50 ? "primary" : progress < 75 ? "warning" : "danger"
          }
          min={0}
          now={progress}
        />

        <Stack direction="horizontal" className="mt-4" gap={3}>
          <Button className="ms-auto" variant="outline-primary">
            Add Expense
          </Button>
          <Button variant="outline-secondary">View Expense</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
