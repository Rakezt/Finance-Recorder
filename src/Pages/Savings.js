import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavings } from "./action";

const Savings = () => {
  const dispatch = useDispatch();
  const savings = useSelector((state) => state.savings);
  const totalSavings = savings.reduce((acc, curr) => curr.savings + acc, 0);

  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);

  return (
    <div>
      <h2>Savings Page</h2>
      <ul>
        {savings.map((trxn, index) => (
          <li key={index}>
            {trxn.description} : ${trxn.amount}
          </li>
        ))}
      </ul>

      <p>Total savings: ${totalSavings}</p>
    </div>
  );
};

export default Savings;
