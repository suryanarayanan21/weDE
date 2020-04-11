import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProjectList from "./Projects";
import SharedEditor from "./sharedEditor/SharedEditor";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers/reducer";

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="code-holder">
        <ProjectList />
        <SharedEditor />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
