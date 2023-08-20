import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  function titleHandler(event) {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  }

  function inputChangeHandler(identifier, value) {
    if (identifier === "title") {
      setEnteredTitle(value);
      console.log(enteredTitle);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    // console.log(expenseData);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2023-08-05"
            max="2023-12-01"
            onChange={(event) =>
              inputChangeHandler("date", event.target.value)
            }></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
