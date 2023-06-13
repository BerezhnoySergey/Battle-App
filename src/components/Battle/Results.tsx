import { FC, ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../Api";
import PlayerPreview from "./PlayerPreview";
import Loader from "../Popular/Loader";
import PlayerInfo from "./PlayerInfo";
import  ErrorComponent  from "../error/Error";


type IMap = {
	[key: string]: any | string
}
export interface IPlayerMap  {
	profile: IMap
}
export type TotalResBattle = IPlayerMap[]

const Results: FC = (): ReactElement => {
	const location = useLocation();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [players, setPlayers] = useState<IPlayerMap[]>([]);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const params = new URLSearchParams(location.search);

		const getBattleResults = async () => {
			setIsLoading(true);
			try {
				const players = await battle([
					params.get("playerOneName"),
					params.get("playerTwoName"),
				]);
				setPlayers(players);
			} catch (error) {
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};
		getBattleResults();
	}, [location]);

	return (
		<div>
			<h2 className="results">Results:</h2>
			{error ? (
				<ErrorComponent />
			) : isLoading ? (
				<Loader />
			) : (
				<div className="row">
					{players.map((player, index: number) => {
						return (
							<PlayerPreview
								player={player}
								key={index}
								avatar={player.profile.avatar_url}
								userName={player.profile.login}
							>
								<PlayerInfo player={player} />
							</PlayerPreview>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Results;
