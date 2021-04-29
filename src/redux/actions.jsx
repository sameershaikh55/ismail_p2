import { WHAT_WE_OFFER, STATES } from "./types";
import { WhatWeOfferData } from "./data";
import { statesData } from "./data";

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
