import React from "react";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import Breadcrumb from "../components/Breadcrumb";
import TravelPortal from "../components/TravelPortal";
import RestaurantManagement from "../components/RestaurantManagement";
import WhyLozpdata from "../components/WhyLozpdata";
import Build5 from "../components/Build5";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import GetConnected from "../components/GetConnected";

const TravelHelps = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="travelHelpHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<div className="mt-5 pt-5 display-4">Travel & Leisure solution</div>
			</div>
			{/* WEB DEVELOPMENT HEADER IMAGE END */}
			<br />
			<br />
			<br />
			<br />
			{/* IDEAS PORTION START */}
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="display-4">
						<span className="themeText">Software Development </span>
						for Travel Helps you
					</h1>
				</div>
			</div>
			{/* IDEAS PORTION END */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<Breadcrumb active="Travel" activeLink="/travelHelp" />
			<br />
			<TravelPortal />
			<br />
			<RestaurantManagement />
			<br />
			<WhyLozpdata />
			<br />
			<br />
			<Build5 />
			<br />
			<Technologies />
			<br />
			<GetConnected />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default TravelHelps;
