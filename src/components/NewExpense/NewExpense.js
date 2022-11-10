import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const expenseFormHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDateHandler}
          onCancel={expenseFormHandler}
        />
      ) : (
        <button onClick={expenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
