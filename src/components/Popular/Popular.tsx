import { FC,  ReactElement,  useEffect } from "react";
import { useSearchParams, SetURLSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Languages from "./Languages";
import PopularList from "./Popular-List";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Popular: FC = (): ReactElement => {
	const [searchParams, setSearchParams]: [URLSearchParams, SetURLSearchParams] = useSearchParams();
	const isLoading: boolean = useSelector<RootState, boolean>((state) => state.popular.loading);

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
