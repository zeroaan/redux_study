import React from "react";
import { useDispatch } from "react-redux";
import { plusNumber, whatNumber } from "../_actions/number_action";
import { store } from "../index";

const AddNumber = () => {
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
      <div className="box">
        <h3>AddNumber</h3>
        <input type="button" value="+" onClick={onClick} />
        <input type="number" value={number} onChange={onChange} />
      </div>
    </>
  );
};

export default AddNumber;
