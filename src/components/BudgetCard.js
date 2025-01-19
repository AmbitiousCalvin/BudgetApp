import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { ProgressBar, Container } from "react-bootstrap";
import { currencyFormatter } from "../utils.js";
import { useState } from "react";
import AddExpenseModal from "./ModalCard";

export default function BudgetCard({ name, description, amount, max, gray }) {
  const classNames = [];
  if (amount >= max) {
    classNames.push("bg-red", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }

  return (
    <>
      <Card
        className={`rounded-3 border border-secondary overflow-hidden ${classNames.join(
          " "
        )}`}
      >
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <div>{name}</div>
            <div>
              {currencyFormatter.format(amount)} /{" "}
              {currencyFormatter.format(max)}
            </div>
          </Card.Title>
          <Card.Text>
            {description}
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>

          <ProgressBar
            className="rounded-pill"
            striped
            variant={() => handleProgressVariant(amount, max)}
            min={0}
            max={max}
          />

          <Stack
            direction="horizontal"
            className="mt-4 d-flex justify-content-end"
            gap={1}
          >
            <Button variant="outline-primary">Add Budget</Button>
            <Button variant="outline-secondary">Add Expense</Button>
          </Stack>
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
