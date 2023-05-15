import { fetchPopularRepos } from "../Api";
import {
	getReposLoading,
	getReposSuccess,
	getReposFailure,
} from "./popular.action";

export const getRepos = (selectedLanguage) => (dispatch) => {
	dispatch(getReposLoading(true));
	fetchPopularRepos(selectedLanguage)
		.then((data) => {
			dispatch(getReposSuccess(data));
		})
		.catch((error) => {
			dispatch(getReposFailure(error));
		});
};
