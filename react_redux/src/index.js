import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./_store/index";

/*
const render = () => {
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
};

store.subscribe(render);
render();
*/
// react-redux로 connect를 이용하면 subscribe 없어도 되는 듯?
