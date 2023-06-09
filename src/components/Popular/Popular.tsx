import { FC,  ReactElement,  useEffect } from "react";
import { useSearchParams, SetURLSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Languages from "./Languages";
import PopularList from "./Popular-List";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../types/hook";

const Popular: FC = (): ReactElement => {
	const [searchParams, setSearchParams]: [URLSearchParams, SetURLSearchParams] = useSearchParams();
	const isLoading: boolean = useAppSelector((state) => state.popular.loading);

	useEffect(() => {
		if (!searchParams.get("lang")) {
			setSearchParams({ lang: "All" });
		}
	}, [searchParams]);

	return (
		<div>
			<Languages
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			
			/>
			{isLoading ? <Loader /> : <PopularList/>}
		</div>
	);
};

export default Popular;
