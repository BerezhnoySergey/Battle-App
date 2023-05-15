import { useState, useEffect } from "react";
import { fetchPopularRepos } from "../Api";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Languages from "./Languages";
import PopularList from "./Popular-List";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLanguage } from "../redux/popular.action";
import { getRepos } from "../redux/popular.thunk";

const Popular = () => {
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const handleError = (error) => console.error(error);

	const selectedLanguage = useSelector(
		(state) => state.popular.selectedLanguage
	);

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	if (!searchParams.get("lang")) {
	// 		setSearchParams("lang");
	// 	}
	// 	fetchPopularRepos(searchParams.get("lang"))
	// 		.then((data) => {
	// 			setRepos(data);
	// 			setIsLoading(false);
	// 		})
	// 		.catch(handleError);
	// }, [searchParams]);

	useEffect(() => {
		dispatch(setSelectedLanguage(searchParams.get("lang")));
	}, [searchParams]);

	useEffect(() => {
		dispatch(getRepos(selectedLanguage));
	}, [selectedLanguage]);

	useEffect(() => {
		if (!searchParams.get("lang")) {
			setSearchParams("All");
		}
	}, [searchParams]);

	useEffect(() => {
		setIsLoading(true);
		fetchPopularRepos(searchParams.get("lang"))
			.then((data) => {
				setRepos(data);
				setIsLoading(false);
			})
			.catch(handleError);
	}, [searchParams]);

	return (
		<div>
			<Languages
				setSearchParams={setSearchParams}
				searchParams={searchParams}
				isLoading={isLoading}
			/>
			{isLoading ? <Loader /> : <PopularList repos={repos} />}
		</div>
	);
};

export default Popular;
