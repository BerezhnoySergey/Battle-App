import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "./Api";

const Results = () => {
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);

		const getBattleResults = async () => {
			const players = await battle([
				params.get("playerOneName"),
				params.get("playerTwoName"),
			]);
			console.log(players, "players");
		};
		getBattleResults();
	}, []);

	return (
		<div>
			<h2>results</h2>
		</div>
	);
};

export default Results;
