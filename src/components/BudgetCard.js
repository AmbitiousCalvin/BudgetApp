import { Card, Stack, Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { currencyFormatter } from "../utils.js";

export default function BudgetCard({
  name,
  description,
  amount,
  max,
  gray,
  onAddExpenseClick,
  onViewExpenseClick,
  hideButton,
}) {
  const classNames = [];
  if (amount >= max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }

  return (
    <>
      <Card className={`rounded-3 overflow-hidden ${classNames.join(" ")}`}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <div className="me-4">{name}</div>
            <div className="d-flex align-items-baseline">
              <span>{currencyFormatter(amount)} </span>
              {max && (
                <span className="tetx-muted fs-6 ms-1">
                  / {currencyFormatter(max)}
                </span>
              )}
            </div>
          </Card.Title>
          <Card.Text>{description}</Card.Text>

          {max && (
            <ProgressBar
              className="rounded-pill"
              striped
              variant={handleProgressVariant(amount, max)}
              min={0}
              max={max}
              now={amount}
            />
          )}

          {!hideButton && (
            <Stack
              direction="horizontal"
              className="mt-4 d-flex justify-content-end"
              gap={2}
            >
              <Button variant="outline-primary" onClick={onAddExpenseClick}>
                Add Expense
              </Button>
              <Button variant="outline-secondary" onClick={onViewExpenseClick}>
                View Expense
              </Button>
            </Stack>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

function handleProgressVariant(amount, max) {
  if (amount / max < 0.5) {
    return "primary";
  } else if (amount / max < 0.75) {
    return "warning";
  } else {
    return "danger";
  }
}
