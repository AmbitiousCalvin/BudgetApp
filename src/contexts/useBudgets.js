import { useState, useEffect, useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContext = createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export function BudgetsContextProvider({ children }) {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getBudgetExpense(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: crypto.randomUUID(), name, max }];
    });
  }

  function addExpense({ budgetId, amount, description }) {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        { id: crypto.randomUUID(), amount, description, budgetId },
      ];
    });
  }

  function deleteBudget(id) {
    setBudgets((prevBudgets) =>
      prevBudgets.filter((budget) => budget.id !== id)
    );
  }

  function deleteExpense(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpense,
        addBudget,
        addExpense,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
}
