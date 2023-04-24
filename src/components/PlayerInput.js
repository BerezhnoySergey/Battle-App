import { useState } from "react";

const PlayerInput = ({ id, label, onSubmit }) => {
	const [userName, setUserName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(id, userName);
	};

	return (
		<form className="column" onSubmit={handleSubmit}>
			<label htmlFor="userName" className="header">
				{label}
			</label>
			<input
				autoComplete="off"
				placeholder="Github userName"
				type="text"
				value={userName}
				id="userName"
				onChange={(e) => setUserName(e.target.value)}
			/>
			<button className="button" disabled={!userName} type="submit">
				Submit
			</button>
		</form>
	);
};

export default PlayerInput;
