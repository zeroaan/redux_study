import React from "react";
import DisplayNumber from "../container/DisplayNumber";

const DisplayNumberRoot = () => {
  return (
    <>
      <div className="box">
        <h3>DisplayNumberRoot</h3>
        <DisplayNumber unit="kg" />
      </div>
    </>
  );
};

export default DisplayNumberRoot;
