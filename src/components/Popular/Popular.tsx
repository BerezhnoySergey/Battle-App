import { FC, ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Languages from "./Languages";
import PopularList from "./Popular-List";
import { useAppSelector } from "../types/hook";

// interface SearchParamsProps {
// 	searchParams: URLSearchParams,
// 	setSearchParams: (params: URLSearchParams) => void
// }


const Popular: FC = (): ReactElement => {
	const [searchParams, setSearchParams]= useSearchParams();
	const isLoading: boolean = useAppSelector((state) => state.popular.loading);

	useEffect(() => {
		if (!searchParams.get("lang")) {
			setSearchParams({ lang: "All" });
		}
	}, [searchParams, setSearchParams]);

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
