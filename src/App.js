import React, { useState } from "react"; // Make sure to import React

import Expenses from "./components/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

var dummy_arr = [
  { date: new Date(2023, 4, 22), title: "car", amount: "100", id: "1" },
  { date: new Date(2023, 4, 22), title: "bike", amount: "80", id: "2" },
  { date: new Date(2023, 4, 22), title: "bicycle", amount: "60", id: "3" },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_arr);
  function addExpenseHandler(expense) {
    setExpenses(function (prevState) {
      return [expense, ...prevState];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map(function (obj, index) {
        return (
          <Expenses
            title={obj.title}
            amount={obj.amount}
            date={obj.date}
            key={obj.id}
          />
        );
      })}
      {/* <Expenses
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />s
      <Expenses
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      /> */}
    </div>
  );
}

export default App;

// import ExpenseItem from "./components/ExpenseItem";
// function App() {
//   var expenses = [
//     { date: new Date(2023, 4, 22), title: "car", amount: "100" },
//     { date: new Date(2023, 4, 22), title: "bike", amount: "80" },
//     { date: new Date(2023, 4, 22), title: "bicycle", amount: "60" },
//   ];
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       expenses.forEach(function(obj,index)
//       {
//         <ExpenseItem
//           title={obj.title}
//           amount={obj.amount}
//           date={obj.date}></ExpenseItem>
//       }
//       );
//     </div>
//   );
// }

// export default App;
