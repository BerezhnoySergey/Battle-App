import { useState, useEffect } from "react";
import { fetchPopularRepos } from "./Api";
const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Pyton"];

const Popular = () => {
	const [selectedLanguage, setSelectedLanguage] = useState("Ruby");
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		fetchPopularRepos(selectedLanguage).then((data) => {
			setRepos(data);
		});
	}, []);

	return (
		<div>
			<ul className="languages">
				{languages.map((language, index) => (
					<li
						key={index}
						onClick={() => setSelectedLanguage(language)}
						style={{
							color: language === selectedLanguage ? "#d0021b" : "#000000",
						}}
					>
						{language}
					</li>
				))}
			</ul>
			<ul className="popular-list">
				{repos.map((repo, index) => {
					return (
						<li key={repo.id} className="popular-item">
							<div className="popular rank">#{index + 1}</div>
							<ul>
								<li>
									<img
										src={repo.owner.avatar_url}
										alt="Avatar"
										className="avatar"
									/>
								</li>
								<li>
									<a href={repo.html_url} target="_blank">
										{repo.name}
									</a>
								</li>
								<li>@{repo.owner.login}</li>
								<li>{repo.stargazers_count} stars</li>
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Popular;
