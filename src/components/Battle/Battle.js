import PlayerInput from "./PlayerInput";
import PlayerPreview from "../Battle/PlayerPreview";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPlayerData } from "../redux/battle.slice";

const Battle = () => {
	const dispatch = useDispatch();
	const playerData = useSelector((state) => state.battle.playerData);

	// const handleSubmit = useCallback(
	// 	(id, userName) => {
	// 		dispatch(
	// 			setPlayerData({
	// 				id,
	// 				value: userName,
	// 			})
	// 		);
	// 	},
	// 	[dispatch]
	// );

	const handleReset = (id) => {
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
