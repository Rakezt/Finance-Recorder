import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../component/action";

const Income = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);
  return (
    <div>
      <h2>Income Page</h2>
      <ul>
        {income.map((trxn, index) => (
          <li key={index}>
            {trxn.description} (
            {trxn.category ? trxn.category : "Category was not updated"}):
            &#8377;{trxn.amount}
          </li>
        ))}
      </ul>
      <p>Total Income : &#8377;{totalIncome}</p>
    </div>
  );
};

export default Income;
