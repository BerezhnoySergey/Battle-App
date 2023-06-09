import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";
import { resetPlayerData } from "../redux/battle.slice";
import { useAppDispatch, useAppSelector } from "../types/hook";
import { FC, ReactElement} from "react";

interface IPlayerInput {
id: string,
label: string
}

const Battle: FC = (): ReactElement => {
	const dispatch = useAppDispatch();
	const playerData = useAppSelector((state) => state.battle.playerData);

	const handleReset = (id: string) => {
		dispatch(resetPlayerData(id));
	};

	return (
		<>
			<div>
				<div className="row">
					{!playerData.playerOneImage ? (
						<PlayerInput id="playerOne" label="Player 1" />
					) : (
						<>
							<PlayerPreview
								avatar={playerData.playerOneImage}
								userName={playerData.playerOneName}
								renderData={<button className="reset">Reset</button>}
							>
								<button
									className="reset"
									onClick={() => handleReset("playerOne")}
								>
									Reset
								</button>
							</PlayerPreview>
						</>
					)}

					{!playerData.playerTwoImage ? (
						<PlayerInput
							id="playerTwo"
							label="Player 2"
							// onSubmit={handleSubmit}
						/>
					) : (
						<>
							<PlayerPreview
								avatar={playerData.playerTwoImage}
								userName={playerData.playerTwoName}
							>
								<button
									className="reset"
									onClick={() => handleReset("playerTwo")}
								>
									Reset
								</button>
							</PlayerPreview>
						</>
					)}
				</div>
				{playerData.playerOneImage && playerData.playerTwoImage && (
					<Link
						to={{
							pathname: "results",
							search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`,
						}}
						className="button"
					>
						Battle
					</Link>
				)}
			</div>
		</>
	);
};

export default Battle;

// const [playerData, setPlayerData] = useState({
// 	playerOneName: "",
// 	playerOneImage: null,
// 	playerTwoName: "",
// 	playerTwoImage: null,
// });
// вариант стейта
// const [playerOneName, setPlayerOneName] = useState("");
// const [playerOneImage, setPlayerOneImage] = useState(null);
// const [playerTwoName, setPlayerTwoName] = useState("");
// const [playerTwoImage, setPlayerTwoImage] = useState(null);

//запрос без редакса
// const handleSubmit = (id, userName) => {
// так правильно
// 	setPlayerData((prevState) => ({
// 		...prevState,

// 		[`${id}Name`]: userName,
// 		[`${id}Image`]: `https://github.com/${userName}.png?size=200`,
// 	}));

// 	// не сильно оптимизированный запрос
// 	// if (id === "playerOne") {
// 	// 	setPlayerOneName(userName);
// 	// 	setPlayerOneImage(`https://github.com/${userName}.png?size=200`);
// 	// } else {
// 	// 	setPlayerTwoName(userName);
// 	// 	setPlayerTwoImage(`https://github.com/${userName}.png?size=200`);
// 	// }
// };
