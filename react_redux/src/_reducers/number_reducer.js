import { WHAT_NUMBER, PLUS_NUMBER } from "../_actions/types";

export default (state, action) => {
  if (state === undefined) {
    return { number: "", displayNumber: 0 };
  }
  let newState;
  switch (action.type) {
    case WHAT_NUMBER:
      newState = { ...state, number: action.number };
      return newState;
    case PLUS_NUMBER:
      newState = {
        ...state,
        displayNumber: state.displayNumber + action.number,
      };
      return newState;

    default:
      return state;
  }
};
