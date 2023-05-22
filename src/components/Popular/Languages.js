import { useDispatch, useSelector } from "react-redux";
import { setSelectedLanguage } from "../redux/popular.slice";
import { useEffect } from "react";
import { getRepos } from "../redux/popular.slice";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const Languages = ({ searchParams, setSearchParams }) => {
	const dispatch = useDispatch();

	const selectedLanguage = useSelector(
		(state) => state.popular.selectedLanguage
	);

	const isLoading = useSelector((state) => state.popular.loading);

	const changeLang = (language) => {
		setSearchParams({ lang: `${language}` });
	};
	useEffect(() => {
		dispatch(setSelectedLanguage(searchParams.get("lang")));
	}, [searchParams]);

	useEffect(() => {
		dispatch(getRepos(selectedLanguage));
	}, [selectedLanguage]);

	return (
		<ul className="languages">
			{languages.map((language, index) => (
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
					onClick={() => (isLoading ? null : changeLang(language))}
				>
					{language}
				</li>
			))}
		</ul>
	);
};
export default Languages;
