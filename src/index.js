<<<<<<< HEAD
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
=======
>>>>>>> 09b3b16147cc770a5e8ad51a522f6850e5ee2a18

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import App from './App';

ReactDOM.render(<App />,document.querySelector('#root'));
serviceWorker.unregister();

