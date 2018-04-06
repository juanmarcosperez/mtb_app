import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./components/app";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
