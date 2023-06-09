import { ReactElement, useState, FC, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../types/hook";
import { setPlayerData } from "../redux/battle.slice";


interface IProps {
	id: string,
	label: string,
	// onSubmit:(id: string, userName: string, label: string) => void

}

const PlayerInput: FC<IProps> = ({ id, label }): ReactElement => {
	const [userName, setUserName] = useState<string>("");
	const dispatch = useAppDispatch();

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dispatch(setPlayerData({ id, userName }));
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement> ): void => {
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
