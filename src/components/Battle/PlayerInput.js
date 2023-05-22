import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerData } from "../redux/battle.slice";

const PlayerInput = ({ id, label }) => {
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setPlayerData({ id, userName }));
	};

	const handleInputChange = (event) => {
		setUserName(event.target.value);
	};

	return (
		<form className="column" onSubmit={handleSubmit}>
			<label htmlFor="userName" className="header">
				{label && label}
			</label>
			<input
				autoComplete="off"
				placeholder="Github userName"
				type="text"
				value={userName}
				id="userName"
				onChange={(e) => {
					handleInputChange(e);
				}}
			/>
			<button className="button" disabled={!userName} type="submit">
				Submit
			</button>
		</form>
	);
};

export default PlayerInput;
