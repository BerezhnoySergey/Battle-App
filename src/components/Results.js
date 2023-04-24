import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Results = () => {
	const location = useLocation();
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		console.log(params.get("playerOneName", params.get("playerTwoName")));
	}, []);

	return (
		<div>
			<h2>results</h2>
		</div>
	);
};

export default Results;
