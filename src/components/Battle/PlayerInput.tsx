import { ReactElement, useState, FC, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setPlayerData } from "../redux/battle.slice";


interface IProps {
	id: string,
	label: string,
	onSubmit:(id: string, userName: string) => void

}

const PlayerInput: FC<IProps> = ({ id, label }): ReactElement => {
	const [userName, setUserName] = useState<string>("");
	const dispatch = useDispatch();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(setPlayerData({ id, userName }));
	};

	const handleInputChange = (event: any ): void => {
		setUserName(event);
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
				onChange={(e: ChangeEvent<HTMLInputElement>): void => {
					handleInputChange(e.target.value);
				}}
			/>
			<button className="button" disabled={!userName} type="submit">
				Submit
			</button>
		</form>
	);
};

export default PlayerInput;
