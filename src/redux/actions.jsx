import { WHAT_WE_OFFER, STATES, PORTFOLIO } from "./types";
import { WhatWeOfferData, statesData, portfolioData } from "./data";

export const whatWeOfferFunc = () => {
	return {
		type: WHAT_WE_OFFER,
		payload: WhatWeOfferData,
	};
};

export const statesFunc = () => {
	return {
		type: STATES,
		payload: statesData,
	};
};

export const portfolioFunc = () => {
	return {
		type: PORTFOLIO,
		payload: portfolioData,
	};
};
