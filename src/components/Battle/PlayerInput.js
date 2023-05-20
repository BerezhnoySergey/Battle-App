import { useState } from "react";
// import { setUserNames } from "../redux/battle.action";
import { useDispatch, useSelector } from "react-redux";

const PlayerInput = ({ id, label, onSubmit }) => {
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch();
	const userNamesSelector = (state) => state.userName;

	const userNames = useSelector(userNamesSelector);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(id, userName);
		// dispatch(setUserNames(id, userName));
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
					setUserName(e.target.value);
				}}
			/>
			<button className="button" disabled={!userName} type="submit">
				Submit
			</button>
		</form>
	);
};

export default PlayerInput;
