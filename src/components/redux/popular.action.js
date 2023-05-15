export const setSelectedLanguage = (payload) => ({
	type: "SET_SELECTED_LANGUAGE",
	payload,
});

export const getReposLoading = (payload) => ({
	type: "GET_REPOS_LOADING",
	payload,
});

export const getReposSuccess = (payload) => ({
	type: "GET_REPOS_SUCCES",
	payload,
});

export const getReposFailure = (payload) => ({
	type: "GET_REPOS_FAILURE",
	payload,
});
