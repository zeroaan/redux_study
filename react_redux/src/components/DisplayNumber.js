import React from "react";
import { store } from "../_store/index";

const DisplayNumber = () => {
  const { displayNumber } = store.getState().number;

  return (
    <>
      <div className="box">
        <h3>DisplayNumber</h3>
        <input type="number" value={displayNumber} readOnly />
      </div>
    </>
  );
};

export default DisplayNumber;
