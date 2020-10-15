import React from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

const App = () => {
  return (
    <>
      <div class="box">
        <h3>Root</h3>
        <AddNumberRoot />
        <DisplayNumberRoot />
      </div>
    </>
  );
};

export default App;
