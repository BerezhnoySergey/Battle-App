import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	playerData: {
		playerOneName: "",
		playerOneImage: null,
		playerTwoName: "",
		playerTwoImage: null,
		userName: "",
	},
};

export const battleSlice = createSlice({
	name: "battle",
	initialState,
	reducers: {
		setPlayerData(state, action) {
			state.playerData = {
				[`${action.payload.id}Name`]: action.payload.userName,
				[`${action.payload.id}Image`]: `https://github.com/${action.payload.userName}.png?size=200`,
			};
		},
		setUserName(state, action) {
			state.playerData = {
				userName: action.payload,
			};
		},
	},
});
const { actions, reducer } = battleSlice;
export const { setPlayerData, setUserName } = actions;
export default reducer;
