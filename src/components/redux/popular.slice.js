import { createSlice } from "@reduxjs/toolkit";
import { getRepos } from "./popular.thunk";

const initialState = {
	selectedLanguage: "All",
	loading: false,
	repos: [],
	error: null,
};

export const popularSlice = createSlice({
	name: "popular",
	initialState,
	reducers: {
		setSelectedLanguage(state, action) {
			state.selectedLanguage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRepos.fulfilled, (state, action) => {
				state.loading = false;
				state.repos = action.payload;
			})
			.addCase(getRepos.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getRepos.rejected, (state) => {
				state.loading = false;
				state.error = true;
			});
	},
});
const { actions, reducer } = popularSlice;
export const { setSelectedLanguage } = actions;
export default reducer;

// const { actions, reducer } = popularReducer;
// export const {
// 	setSelectedLanguage,
// 	getReposLoading,
// 	getReposSuccess,
// 	getReposFailure,
// } = actions;
// export default reducer;

// export const popularReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "SET_SELECTED_LANGUAGE":
// 			return {
// 				...state,
// 				selectedLanguage: action.payload,
// 			};

// 		case "GET_REPOS_LOADING":
// 			return {
// 				...state,
// 				loading: true,
// 				error: null,
// 			};

// 		case "GET_REPOS_SUCCES":
// 			return {
// 				loading: false,
// 				repos: action.payload,
// 			};

// 		case "GET_REPOS_FAILURE":
// 			return {
// 				...state,
// 				loading: false,
// 				error: action.payload,
// 			};

// 		default:
// 			return state;
// 	}
// };
