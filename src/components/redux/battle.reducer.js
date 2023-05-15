const initialState = {
	userName: "",
	playerData: {
		playerOneName: "",
		playerOneImage: null,
		playerTwoName: "",
		playerTwoImage: null,
	},
};

export const battleReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER_NAME":
			return {
				...state,
				userName: action.payload,
			};
		case "SET_PLAYER_DATA":
			return {
				...state,
				playerData: {
					...state.playerData,
					[`${action.payload.id}Name`]: action.payload.value,
					[`${action.payload.id}Image`]: `https://github.com/${action.payload.value}.png?size=200`,
				},
			};
		default:
			return state;
	}
};
