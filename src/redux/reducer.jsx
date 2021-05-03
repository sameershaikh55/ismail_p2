import { WHAT_WE_OFFER, STATES, PORTFOLIO, UIUX, BLOG_CARD } from "./types";

const initialState = {
	whatWeOfferIS: [],
	states: [],
	portfolio: [],
	uiux: [],
	bodyCard: [],
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case WHAT_WE_OFFER:
			return {
				...state,
				whatWeOfferIS: action.payload,
			};
		case STATES:
			return {
				...state,
				states: action.payload,
			};
		case PORTFOLIO:
			return {
				...state,
				portfolio: action.payload,
			};
		case UIUX:
			return {
				...state,
				uiux: action.payload,
			};
		case BLOG_CARD:
			return {
				...state,
				bodyCard: action.payload,
			};
		default:
			return state;
	}
};
export default Reducer;
