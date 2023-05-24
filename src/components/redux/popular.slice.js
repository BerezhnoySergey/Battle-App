import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReposRequest } from "../Api";

const initialState = {
	selectedLanguage: "All",
	loading: false,
	repos: [],
	error: null,
};

export const getRepos = createAsyncThunk(
	"popular/getRepos",
	async (lang, thunkAPI) => {
		try {
			const response = await getReposRequest(lang);
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const popularSlice = createSlice({
	name: "popular",
	initialState,
	reducers: {
		setSelectedLanguage(state, action) {
			state.selectedLanguage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getRepos.fulfilled, (state, action) => {
			state.loading = false;
			state.repos = action.payload;
		});
		builder.addCase(getRepos.pending, (state) => {
			(state.loading = true)
			(state.error = null);
		});
		builder.addCase(getRepos.rejected, (state, action) => {
			(state.loading = false)
				(state.error = action.payload ? action.payload : "Unknown error");
		});
	},
});

const { actions, reducer } = popularSlice;
export const { setSelectedLanguage } = actions;
export default reducer;

//обычный редакс
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
