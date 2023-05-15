import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="animation__wrap">
			<Link to={"battle"} className="error__link">
				{" "}
				Back to battle
			</Link>
			<div className="animation"></div>
		</div>
	);
};

export default Error;
