import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import HealthcareOrg from "../components/HealthcareOrg";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import cater from "../assets/cater.svg";
import WeOffering from "../components/WeOffering";
import WhyChoose from "../components/WhyChoose";
import Build4 from "../components/Build4";
import Technologies from "../components/Technologies";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import GetConnected from "../components/GetConnected";

const Healthcare = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="healthcareHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-center text-white">
				<div className="mt-5 pt-5 display-4">
					EHS & Healthcare software development
				</div>
			</div>
			{/* WEB DEVELOPMENT HEADER IMAGE END */}
			<br />
			<br />
			<br />
			<br />
			{/* IDEAS PORTION START */}
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="font-weight-bold display-4">
						<span className="themeText">Software Development </span>
						for Healthcare Helps you
					</h1>
				</div>
			</div>
			{/* IDEAS PORTION END */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Breadcrumb active="Healthcare" activeLink="/healthcare" />
			<br />
			<br />
			<br />
			<HealthcareOrg />
			<br />
			{/* CATER STARTUP START */}
			<div className="caterStartup_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-sm-10 col-md-8 mx-auto align-self-center">
							<h1 className="themeText">
								We also cater to startups and independent organisations looking
								to launch innovative software products for the healthcare
								industry.
							</h1>
							<div className="col-8 col-sm-6 col-md-4 mx-auto d-block d-md-none my-5 my-md-0 text-center align-self-center">
								<img style={{ width: "50%" }} src={cater} alt="cater" />
							</div>
							<br />
							<h4 className="lightColor">
								Have a ground-breaking mobile or web app idea to improve the
								quality of patient and personal healthcare? Or perhaps an idea
								for an innovative medical device that can save lives?
							</h4>
							<h4 className="lightColor mt-5">
								You can leverage our decades-long experience of healthcare IT
								consulting and development to bring your ideas to life. Reach
								out to us with your project requirements and learn more about
								the customised software development services we can deliver for
								you.
							</h4>
							<br />
							<button className="themeBtn px-5">LETS TALK</button>
						</div>
						<div className="col-4 d-none d-md-block text-center align-self-center">
							<img style={{ width: "50%" }} src={cater} alt="cater" />
						</div>
					</div>
				</div>
			</div>
			{/* CATER STARTUP END */}
			<br />
			<br />
			<WeOffering />
			<br />
			<br />
			<br />
			<WhyChoose />
			<br />
			<br />
			<Build4 />
			<br />
			<br />
			<br />
			<Technologies />
			<br />
			<GetConnected />
			<br />
			<ContactUs uiux />
			<Footer />
		</>
	);
};

export default Healthcare;
