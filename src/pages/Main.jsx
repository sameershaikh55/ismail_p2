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
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";

const Main = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<MainHero />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<States />
			<br />
			<WhoWeAre />
			<br />
			<br />
			<WhatWeOffer />
			<br />
			<br />
			<Technologies />
			<br />
			<br />
			<Build />
			<br />
			<GetConnected />
			<br />
			<TwoCards />
			<br />
			<br />
			<History />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Main;
