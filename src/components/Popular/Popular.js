import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Languages from "./Languages";
import PopularList from "./Popular-List";
import { useSelector } from "react-redux";

const Popular = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const isLoading = useSelector((state) => state.popular.loading);

	useEffect(() => {
		if (!searchParams.get("lang")) {
			setSearchParams({ lang: "All" });
		}
	}, [searchParams]);

	return (
		<div>
			<Languages
				setSearchParams={setSearchParams}
				searchParams={searchParams}
			/>
			{isLoading ? <Loader /> : <PopularList />}
		</div>
	);
};

export default Popular;
