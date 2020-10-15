import React from "react";

const DisplayNumber = (props) => {
  return (
    <>
      <div className="box">
        <h3>DisplayNumber</h3>
        <input type="number" value={props.displayNumber} readOnly />
        {props.unit}
      </div>
    </>
  );
};

export default DisplayNumber;
