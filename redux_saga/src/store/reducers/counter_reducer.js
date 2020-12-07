import { ADD_NUMBER, MUL_NUMBER } from "../actions/types";

const initialState = {
  number: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      const newNumber = state.number + Number(action.value);
      return { ...state, number: newNumber };
    }
    case MUL_NUMBER: {
      const newNumber = state.number * Number(action.value);
      return { ...state, number: newNumber };
    }
    default:
      return state;
  }
};

export default CounterReducer;
