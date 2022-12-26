import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function expensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            amount={expenses.amount}
          />
        );
      })}
    </ul>
  );
}

export default expensesList;
