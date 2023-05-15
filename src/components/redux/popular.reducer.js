const initialState = {
	selectedLanguage: "All",
	loading: false,
	repos: [],
	error: null,
};

export const popularReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SELECTED_LANGUAGE":
			return {
				...state,
				selectedLanguage: action.payload,
			};

		case "GET_REPOS_LOADING":
			return {
				...state,
				loading: true,
				error: null,
			};

		case "GET_REPOS_SUCCES":
			return {
				...state,
				loading: false,
				repos: action.payload,
			};

		case "GET_REPOS_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
