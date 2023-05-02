const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Pyton"];

const Languages = ({ setSearchParams, searchParams, isLoading }) => {
	return (
		<ul className="languages">
			{languages.map((language, index) => (
				<li
					key={index}
					onClick={() =>
						isLoading ? null : setSearchParams({ lang: `${language}` })
					}
					style={{
						color:
							language === searchParams.get("lang") ? "#d0021b" : "#000000",
					}}
				>
					{language}
				</li>
			))}
		</ul>
	);
};
export default Languages;
