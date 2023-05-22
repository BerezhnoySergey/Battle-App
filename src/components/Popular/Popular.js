import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import Loader from "./Loader";
import Languages from "./Languages";
import PopularList from "./Popular-List";
// import Error from "../error/Error";
// import Loader from "../Popular/Loader";

const Popular = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// const [isLoading, setIsLoading] = useState(false);
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
				// isLoading={isLoading}
			/>
			{<PopularList />}
		</div>
	);
};

export default Popular;
