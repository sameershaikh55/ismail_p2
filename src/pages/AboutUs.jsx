import React from "react";
// import AboutStates from "../components/AboutStates";
import CeoSection from "../components/CeoSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import OurCreative from "../components/OurCreative";
import OurPortfolio from "../components/OurPortfolio";
import OurStory from "../components/OurStory";
import OurTeam from "../components/OurTeam";
import Sidebar from "../components/Sidebar";
import Technologies from "../components/Technologies";
// import GetConnected from "../components/GetConnected";
import { useHooks } from "../Hooks/useHooks";

const AboutUs = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* ABOUT US HEADER IMAGE START */}
			<div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<h1 className="mt-5 pt-5">ABOUT US</h1>
				<h4 className="row text-center mt-3 mb-4">
					<div className="col-12 col-sm-10 col-md-8 col-lg-6 m-auto headerPara h4">
						When It Comes To Website Development, We Push The Limits And Set New
						Standards By Creating Functionally Rich And Aesthetically Stunning
						Websites. Best-In-Class UX And Compelling
					</div>
				</h4>
			</div>
			{/* ABOUT US HEADER IMAGE END */}
			<br />
			<br />
			<br />
			<br />
			{/* IDEAS PORTION START */}
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="themeText display-4 text-uppercase">
						Lozpdata brings ideas to life, <br /> leveragingmodern technologies.
					</h1>
					<h4 className="row text-secondary">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7 m-auto lightColor h3">
							When It Comes To Website Development, We Push The Limits And Set
							New Standards By Creating Functionally Rich And Aesthetically
							Stunning Websites. Best-In-Class UX And Compelling
						</div>
					</h4>
				</div>
			</div>
			{/* IDEAS PORTION END */}
			<br />
			<br />
			{/* <AboutStates /> */}
			<br />
			<OurStory />
			<br />
			<OurCreative />
			<br />
			<br />
			<br />
			<Technologies />
			<br />
			<CeoSection />
			<br />
			<br />
			<br />
			<OurTeam />
			<br />
			<br />
			<br />
			<OurPortfolio />
			{/* <GetConnected /> */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default AboutUs;
