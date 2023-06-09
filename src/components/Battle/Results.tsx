import { FC, ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../Api";
import PlayerPreview from "./PlayerPreview";
import Loader from "../Popular/Loader";
import PlayerInfo from "./PlayerInfo";
import Error from "../error/Error";

interface IMap {
	profile: {
		avatar_url: string
		login: string
	}
}

type IPlayerMap = {
	player: IMap
}


const Results: FC = (): ReactElement => {

	const location = useLocation();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [player, setPlayer] = useState<IPlayerMap[]>([]);
	const handleError = (error: Error) => console.error(error);
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
				setPlayer(players);
			} catch (error) {
				handleError(error);
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		getBattleResults();
	}, []);

	return (
		<div>
			<h2 className="results">Results:</h2>
			{error ? (
				<Error />
			) : isLoading ? (
				<Loader />
			) : (
				<div className="row">
					{player.map((player, index: number) => {
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
