import { WHAT_WE_OFFER, STATES, PORTFOLIO } from "./types";

const initialState = {
	whatWeOfferIS: [],
	states: [],
	portfolio: [],
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
		default:
			return state;
	}
};
export default Reducer;
