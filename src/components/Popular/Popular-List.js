const PopularList = ({ repos }) => {
	return (
		<ul className="popular-list">
			{repos.map((repos, index) => {
				return (
					<li key={repos.id} className="popular-item">
						<div className="popular rank">#{index + 1}</div>
						<ul>
							<li>
								<img
									src={repos.owner.avatar_url}
									alt="Avatar"
									className="avatar"
								/>
							</li>
							<li>
								<a
									href={repos.html_url}
									target="_blank"
									rel="noreferrer noopener"
								>
									{repos.name}
								</a>
							</li>
							<li>@{repos.owner.login}</li>
							<li>{repos.stargazers_count} stars</li>
						</ul>
					</li>
				);
			})}
		</ul>
	);
};

export default PopularList;
