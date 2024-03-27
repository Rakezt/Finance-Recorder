import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../component/action";

const Expenses = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);
  return (
    <div>
      <h2>Expenses Page</h2>

      <ul>
        {expenses.map((trxn, index) => (
          <li key={index}>
            {trxn.description} (
            {trxn.category ? trxn.category : "Category was not updated"}) :
            &#8377;{trxn.amount}
          </li>
        ))}
      </ul>
      <p>Total Expenses: &#8377;{totalExpenses}</p>
    </div>
  );
};

export default Expenses;
