import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myNumber } from "../store/actions/counter_action";

const Number = () => {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.counter);

  const [loading, setLoading] = useState(false);

  const onClickPlus = () => {
    dispatch(myNumber(setLoading));
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onClickPlus}>Change Number</button>
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Number;
