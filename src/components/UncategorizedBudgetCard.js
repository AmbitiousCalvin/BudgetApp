import BudgetCard from "./BudgetCard"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/useBudgets"

export default function UncategorizedBudgetCard(props){
    const { getBudgetExpense } = useBudgets();

    const amount = getBudgetExpense(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)

    if (amount === 0) return null;

    return <BudgetCard name="Uncategorized" gray amount={amount} {...props}/>
}