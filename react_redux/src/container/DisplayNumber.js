import { connect } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";

const mapStateToProps = (state) => {
  return {
    displayNumber: state.number.displayNumber,
  };
};

export default connect(mapStateToProps)(DisplayNumber);

/*
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
*/
