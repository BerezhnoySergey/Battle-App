import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { battleSlice } from "./battle.slice";
import { popularSlice } from "./popular.slice";

const logger = createLogger({
	collapsed: true,
});

const store = configureStore({
	reducer: {
		popular: popularSlice,
		battle: battleSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
