import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card.js";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // console.log("component function is called");
  // let title = props.title;
  function clickHandler() {
    setTitle("updated");
    // title = "clicked";
    console.log(title);
  }
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
