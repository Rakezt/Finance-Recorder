import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenses, addIncome } from "../component/action";

const IncomeExpenses = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [entryType, setEntryType] = useState("income");

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (entryType === "income") {
      dispatch(
        addIncome({
          description,
          amount: parseFloat(amount),
          category,
          entryType,
        })
      );
      setDescription("");
      setAmount("");
      setCategory("");
      setEntryType("income");
    } else {
      dispatch(
        addExpenses({
          description,
          amount: parseFloat(amount),
          category,
          entryType,
        })
      );
      setDescription("");
      setAmount("");
      setCategory("");
      setEntryType("income");
    }
  };

  return (
    <div>
      <h2>New Entry Page</h2>
      <form>
        <div>
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            placeholder="in Rupees"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="test"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Entry Type:</label>
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button onClick={handleAddEntry}>Add Entry</button>
      </form>
    </div>
  );
};

export default IncomeExpenses;
