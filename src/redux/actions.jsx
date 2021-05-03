import { WHAT_WE_OFFER, STATES, PORTFOLIO, UIUX, BLOG_CARD } from "./types";
import {
	WhatWeOfferData,
	statesData,
	portfolioData,
	UIUXSectionData,
	blogBodyData,
} from "./data";

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

export const uiUxFunc = () => {
	return {
		type: UIUX,
		payload: UIUXSectionData,
	};
};

export const blogFunc = () => {
	return {
		type: BLOG_CARD,
		payload: blogBodyData,
	};
};
