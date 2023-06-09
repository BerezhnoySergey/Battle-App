import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReposRequest } from "../Api";
import { PopularRepos } from "../Popular/Popular-List";

interface PopularInitialState {
	selectedLanguage: string,
	loading: boolean,
	error: string | null,
	repos: PopularRepos[]
}


const initialState: PopularInitialState = {
	selectedLanguage: "All",
	loading: false,
	repos: [],
	error: null,
};

export const getRepos = createAsyncThunk (
	"popular/getRepos",
	async (lang: string, thunkAPI): Promise<PopularRepos[]>  => {
		try {
			const response = await getReposRequest(lang);
			return response;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message) as any;
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
		builder.addCase(getRepos.fulfilled, (state, action: PayloadAction<PopularRepos[]>) => {
			state.loading = false;
			state.repos = action.payload;
		});
		builder.addCase(getRepos.pending, (state) => {
	  	state.loading = true;
		 state.error = null
		});
		builder.addCase(getRepos.rejected, (state, action: PayloadAction<any>) => {
		return	state.loading = false,
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
