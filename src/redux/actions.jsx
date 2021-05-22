import {
	WHAT_WE_OFFER,
	STATES,
	PORTFOLIO,
	UIUX,
	BLOG_CARD,
	CASE_STUDY_BODY,
	BUILD_2,
	BUILD_3,
	RESTAURANT_MANAGEMENT,
	WE_OFFER,
	BUILD_4,
	BUILD_5,
} from "./types";
import {
	WhatWeOfferData,
	statesData,
	portfolioData,
	UIUXSectionData,
	blogBodyData,
	caseStudyBodyData,
	build2Data,
	build3Data,
	restaurantManagementData,
	weOfferingData,
	build4Data,
	build5Data,
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

export const caseStudyFunc = () => {
	return {
		type: CASE_STUDY_BODY,
		payload: caseStudyBodyData,
	};
};

export const build2Func = () => {
	return {
		type: BUILD_2,
		payload: build2Data,
	};
};

export const build3Func = () => {
	return {
		type: BUILD_3,
		payload: build3Data,
	};
};

export const restaurantManagementFunc = () => {
	return {
		type: RESTAURANT_MANAGEMENT,
		payload: restaurantManagementData,
	};
};

export const weOfferingFunc = () => {
	return {
		type: WE_OFFER,
		payload: weOfferingData,
	};
};

export const build4Func = () => {
	return {
		type: BUILD_4,
		payload: build4Data,
	};
};

export const build5Func = () => {
	return {
		type: BUILD_5,
		payload: build5Data,
	};
};
