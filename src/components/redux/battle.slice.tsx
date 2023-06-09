import {  PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PayloadActionBattle {
	id: string;
	userName: string
}


interface BattleInitialState {
	playerData :{
		playerOneName: string,
		playerOneImage: null | string,
		playerTwoName: string,
		playerTwoImage: null | string,
	}


}
const initialState: BattleInitialState = {
	playerData: {
		playerOneName: "",
		playerOneImage: null,
		playerTwoName: "",
		playerTwoImage: null,
	},
};

const battleSlice = createSlice({
	name: "battle",
	initialState,
	reducers: {
		setPlayerData(state, action: PayloadAction<PayloadActionBattle>) {
			state.playerData = {
				...state.playerData,
				[`${action.payload.id}Name`]: action.payload.userName,
				[`${action.payload.id}Image`]: `https://github.com/${action.payload.userName}.png?size=200`,
			};
		},
		resetPlayerData(state, action) {
			state.playerData = {
				...state.playerData,
				[`${action.payload}Name`]: "",
				[`${action.payload}Image`]: null,
			};
		},
	},
});
const { actions, reducer } = battleSlice;
export const { setPlayerData, resetPlayerData } = actions;
export default reducer;
