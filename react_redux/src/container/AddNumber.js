import React from "react";
import { useDispatch } from "react-redux";
import { plusNumber, whatNumber } from "../_actions/number_action";
import { store } from "../_store/index";
import AddNumber from "../components/AddNumber";

export default () => {
  const dispatch = useDispatch();
  const { number } = store.getState().number;

  const onClick = () => {
    dispatch(plusNumber(number));
  };
  const onChange = (e) => {
    const { value } = e.target;
    dispatch(whatNumber(value));
  };

  return (
    <>
      <AddNumber onClick={onClick} onChange={onChange} number={number} />
    </>
  );
};
