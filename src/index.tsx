// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

reportWebVitals({});
