import { useState, useEffect } from "react";
import { fetchPopularRepos } from "../Api";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Languages from "./Languages";
import PopularList from "./Popular-List";

const Popular = () => {
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const handleError = (error) => console.error(error);

	useEffect(() => {
		if (!searchParams.get("lang")) {
			setSearchParams({ lang: "All" });
		}
	}, []);

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
