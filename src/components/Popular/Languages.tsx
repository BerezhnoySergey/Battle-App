import { setSelectedLanguage } from "../redux/popular.slice";
import { FC, ReactElement, useEffect } from "react";
import { getRepos } from "../redux/popular.slice";
import { SetURLSearchParams} from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../types/hook";


const languages: string[] = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

interface SearchParamsProps {
	searchParams: URLSearchParams,
	setSearchParams: SetURLSearchParams
}


const Languages: FC<SearchParamsProps> = ({searchParams, setSearchParams}): ReactElement => {
	const dispatch = useAppDispatch();

	const selectedLanguage = useAppSelector (
		(state) => state.popular.selectedLanguage
	);

	const isLoading = useAppSelector((state) => state.popular.loading);

	const changeLang = (language: string): void => {
		setSearchParams({ lang: `${language}`});
	};

	useEffect(() => {
    dispatch(setSelectedLanguage(searchParams.get("lang")));
}, [searchParams]);

	useEffect(() => {
		dispatch(getRepos(selectedLanguage));
	}, [selectedLanguage]);

	return (
		<ul className="languages">
			{languages.map((language: string, index: number): ReactElement => (
				<li
					key={index}
					style={{
						color:
							language === selectedLanguage
								? "#d0021b"
								: isLoading
								? "grey"
								: "#000000",
					}}
					onClick={() => isLoading ? null : changeLang(language)}
				>
					{language}
				</li>
			))}
		</ul>
	);
};
export default Languages;
