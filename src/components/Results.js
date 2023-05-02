import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "./Api";
// import Loader from "./Loader";
import PlayerPreview from "./Battle/PlayerPreview";

const Results = () => {
	const location = useLocation();
	// const [isLoading, setIsLoading] = useState(false);
	//добавить стейты для отрисовки
	// использовать PlayerPreview
	const [player, setPlayer] = useState();
	const handleError = (error) => console.error(error);

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		try {
			const getBattleResults = async () => {
				const players = await battle([
					params.get("playerOneName"),
					params.get("playerTwoName"),
				]);
				console.log(players, "players");
			};
			getBattleResults();
		} catch (error) {
			handleError(error);
		}
	}, []);

	// сдлеать отрисовку
	return (
		<div>
			<h2>results</h2>
			<PlayerPreview player={player} />
		</div>
	);
};

export default Results;
