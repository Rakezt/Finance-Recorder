export const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      `https://6a7d32c3-e701-4388-b451-59a15dea228d-00-10jc68jpyf72x.pike.replit.dev/income`
    );
    const data = await response.json();
    dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching income data", error);
    dispatch({ type: "FETCH_INCOME_FAILURE" });
  }
};

export const fetchExpenses = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://6a7d32c3-e701-4388-b451-59a15dea228d-00-10jc68jpyf72x.pike.replit.dev/expenses"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_EXPENSES_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching expenses data:", error);
    dispatch({ type: "FETCH_EXPENSES_FAILURE" });
  }
};

export const fetchSavings = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(
      "https://6a7d32c3-e701-4388-b451-59a15dea228d-00-10jc68jpyf72x.pike.replit.dev/savings"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_SAVINGS_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error fetching savings data:", error);
    dispatch({ type: "FETCH_SAVINGS_FAILURE" });
  }
};

export const addIncome = (entry) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://6a7d32c3-e701-4388-b451-59a15dea228d-00-10jc68jpyf72x.pike.replit.dev/add-income`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );

    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_INCOME_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.error("Error adding entry:", error);
    dispatch({ type: "ADD_ENTRY_FAILURE" });
  }
};

export const addExpenses = (entry) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://6a7d32c3-e701-4388-b451-59a15dea228d-00-10jc68jpyf72x.pike.replit.dev/add-expense`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );

    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_EXPENSES_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.error("Error adding entry:", error);
    dispatch({ type: "ADD_ENTRY_FAILURE" });
  }
};
