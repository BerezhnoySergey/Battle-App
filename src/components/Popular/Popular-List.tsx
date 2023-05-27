import { ReactElement,FC } from "react";
import { useSelector } from "react-redux";

interface IState {
	state: string
}
const PopularList: FC<IState> = (): ReactElement => {
	const repos = useSelector((state: any) => state.popular.repos);

	return (
		<ul className="popular-list">
			{repos.map((repo: any, index: number): ReactElement => {
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
								<a href={repo.html_url} target="_blank" rel="noreferrer">
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
	);
};

export default PopularList;
