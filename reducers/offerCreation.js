import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: '',
	date	: '',
	reference: '',
	description: '',
	contract	: '',
	store: '',
	jobType: '',
	jobImage	: '',
};

export const offerCreation = createSlice({
	name: 'offer',
	initialState,
	reducers: {
		loggedTitle: (state, action) => {
			state.title = action.payload;
		},
		loggedDate: (state, action) => {
			
state.date
 = action.payload;
		},
		loggedReference: (state, action) => {
			state.reference = action.payload;
		},
		loggedDescription: (state, action) => {
			state.description = action.payload;
		},
		loggedContract: (state, action) => {
			state.contract = action.payload;
		},
		loggedStore: (state, action) => {
			
state.store
 = action.payload;
		},
		loggedJobType: (state, action) => {
			state.jobType = action.payload;
		},
		loggedJobImage: (state, action) => {
			state.jobImage = action.payload;
		},
	},
});

export const { loggedTitle, loggedDate, loggedReference, 
	loggedDescription, loggedContract, loggedStore, loggedJobType, 
	loggedJobImage} = offerCreation.actions;
export default  offerCreation.reducer; 