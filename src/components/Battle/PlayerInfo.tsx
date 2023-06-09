import { ReactElement,FC } from "react";

interface IPlayer {
	profile: {
		company: string;
		location: string;
		name: string;
		followers: number;
		following: number;
		public_repos: number;
		blog: string;
	}
	score: number
}


interface IPlayerInfo {
	player: IPlayer,
	index: number,
}


const PlayerInfo: FC<IPlayerInfo> = ( {player, index}): ReactElement => {
	return (
		<>
			<ul className="player__info">
				<li className="player__info-data">
					Company: {player.profile.company ? player.profile.company : "No data"}
				</li>
				<li className="player__info-data">
					Location:{" "}
					{player.profile.location ? player.profile.location : "No data"}
				</li>
				<li className="player__info-data">
					Name: {player.profile.name ? player.profile.name : "No data"}
				</li>
				<li className="player__info-data">
					Followers:{" "}
					{player.profile.followers ? player.profile.followers : "No data"}
				</li>
				<li className="player__info-data">
					Following:{" "}
					{player.profile.following ? player.profile.following : "No data"}
				</li>
				<li className="player__info-data">
					Public Repositories:{" "}
					{player.profile.public_repos
						? player.profile.public_repos
						: "No data"}
				</li>
				<li className="player__info-data">
					Blog: {player.profile.blog ? player.profile.blog : "No data"}
				</li>
				<li className="player__info-data">
					Score {player.score ? player.score : "No data"}
				</li>
				<li className="player__info-data_winner">
					{index === 0 ? "Winner!" : "Loser!"}
				</li>
			</ul>
		</>
	);
};

export default PlayerInfo;
