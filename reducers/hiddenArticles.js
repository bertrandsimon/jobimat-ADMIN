import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticles = createSlice({
	name: ' hiddenArticles',
	initialState,
	reducers: {
		hideArticle: (state, action) => {
			state.value.push(action.payload);
			
		},
		showArticle: (state, action) => {
			state.value = [];
			
		},
		
	},
});

export const { hideArticle, showArticle } = hiddenArticles.actions;
export default  hiddenArticles.reducer;
