import React from "react";
import "./ExpenseDate.css";

function expenseDate(props) {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  // new Date().to
  const date = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
}

export default expenseDate;
