import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props) {
  const [isEditable, setIsEditable] = useState(false);
  const saveExpensesHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
    setIsEditable(false);
  };
  const addExpenseEditorHandler = () => {
    setIsEditable(true);
  };
  const cancelExpenseEditorHandler = () => {
    setIsEditable(false);
  };
  return (
    <div className="new-expense">
      {!isEditable && (
        <button onClick={addExpenseEditorHandler}>Add New Expense</button>
      )}
      {isEditable && (
        <ExpenseForm
          onSaveExpenseData={saveExpensesHandler}
          onCancel={cancelExpenseEditorHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
