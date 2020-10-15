import React from "react";
import { store } from "../_store/index";
import DisplayNumber from "../components/DisplayNumber";

export default () => {
  const { displayNumber } = store.getState().number;

  return (
    <>
      <DisplayNumber displayNumber={displayNumber} />
    </>
  );
};
