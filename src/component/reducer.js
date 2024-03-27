const initialState = {
  income: [],
  expenses: [],
  savings: [],
  loading: false,
  error: null,
};
const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case `FETCH_INCOME_SUCCESS`:
      return {
        ...state,
        income: action.payload,
        loading: false,
        error: null,
      };
    case `FETCH_INCOME_FAILURE`:
      return {
        ...state,
        loading: false,
        error: `Error fetching Income data`,
      };
    case `FETCH_DATA_LOADING`:
      return {
        ...state,
        loading: true,
      };
    case `FETCH_EXPENSES_SUCCESS`:
      return {
        ...state,
        expenses: action.payload,
        loading: false,
        error: null,
      };
    case `FETCH_EXPENSES_FAILURE`:
      return {
        ...state,
        loading: false,
        error: `Error fetching Expenses data`,
      };
    case `FETCH_SAVINGS_SUCCESS`:
      return {
        ...state,
        savings: action.payload,
        loading: false,
        error: null,
      };
    case `FETCH_SAVINGS_FAILURE`:
      return {
        ...state,
        loading: false,
        error: `Error fetching savings data`,
      };
    case `ADD_ENTRY_FAILURE`:
      return {
        ...state,
        loading: false,
        error: `Error fetching or adding data`,
      };
    case `ADD_INCOME_SUCCESS`:
      return {
        ...state,
        income: [...state.income, action.payload],
        loading: false,
        error: `Error fetching or adding data`,
      };
    case `ADD_EXPENSES_SUCCESS`:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        loading: false,
        error: `Error fetching or adding data`,
      };

    default:
      return state;
  }
};

export default financeReducer;
