import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userConnected: false,
	name: '',
	surname	: '',
	token: '',
};

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loggedStatus: (state, action) => {
			state.userConnected = !state.userConnected;
		},
		loggedName: (state, action) => {
			state.name = action.payload;
		},
		loggedSurname: (state, action) => {
			state.surname = action.payload;
		},
		loggedToken: (state, action) => {
			state.token = action.payload;
		},
	},
});

export const { loggedStatus, loggedName, loggedSurname, loggedToken } = user.actions;
export default  user.reducer;
