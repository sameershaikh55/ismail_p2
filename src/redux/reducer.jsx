import {
	WHAT_WE_OFFER,
	STATES,
	PORTFOLIO,
	UIUX,
	BLOG_CARD,
	CASE_STUDY_BODY,
	BUILD_2,
	BUILD_3,
} from "./types";

const initialState = {
	whatWeOfferIS: [],
	states: [],
	portfolio: [],
	uiux: [],
	bodyCard: [],
	caseStudy: [],
	build2: [],
	build3: [],
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
		case CASE_STUDY_BODY:
			return {
				...state,
				caseStudy: action.payload,
			};
		case BUILD_2:
			return {
				...state,
				build2: action.payload,
			};
		case BUILD_3:
			return {
				...state,
				build3: action.payload,
			};
		default:
			return state;
	}
};
export default Reducer;
