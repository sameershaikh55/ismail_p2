import React from "react";
import Build from "../components/Build";
import GetConnected from "../components/GetConnected";
import MainHeader from "../components/MainHeader";
import MainHero from "../components/MainHero";
import States from "../components/States";
import Technologies from "../components/Technologies";
import TwoCards from "../components/TwoCards";
import WhatWeOffer from "../components/WhatWeOffer";
import WhoWeAre from "../components/WhoWeAre";
import History from "../components/History";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Main = () => {
	return (
		<>
			<MainHeader />
			<MainHero />
			<br />
			<States />
			<WhoWeAre />
			<br />
			{/* <WhatWeOffer /> */}
			<br />
			<Technologies />
			<br />
			<Build />
			<br />
			<GetConnected />
			<br />
			<TwoCards />
			<br />
			<History />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Main;
