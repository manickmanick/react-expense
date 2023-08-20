import "./Expenses.css";
import ExpenseItem from ".//ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        date={props.date}
        title={props.title}
        amount={props.amount}
      />
    </div>
  );
}

export default Expenses;
