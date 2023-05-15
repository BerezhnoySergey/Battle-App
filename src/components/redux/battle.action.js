export const setPlayerData = (payload) => ({
	type: "SET_PLAYER_DATA",
	payload,
});

export const setUserNames = (id, userName) => ({
	type: "SET_USER_NAME",
	payload: { id, userName },
});
