import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReposRequest } from "../Api";

export const getRepos = createAsyncThunk(
	"popular/getRepos",
	async (selectedLanguage, thunkAPI) => {
		try {
			const response = await getReposRequest(selectedLanguage);
			return response;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
