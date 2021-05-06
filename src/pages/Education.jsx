import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import educationIcon from "../assets/educationIcon.svg";
import WeOffering from "../components/WeOffering";
import WhyLozpdata from "../components/WhyLozpdata";
import Technologies from "../components/Technologies";
import Build4 from "../components/Build4";
import GetConnected from "../components/GetConnected";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Education = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="educationHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<h1 className="mt-5 pt-5">Educations & Elearning Solutions</h1>
			</div>
			{/* WEB DEVELOPMENT HEADER IMAGE END */}
			<br />
			<br />
			<br />
			<br />
			{/* IDEAS PORTION START */}
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="font-weight-bold">
						<span className="themeText">Software Development </span>
						for Education Helps you
					</h1>
				</div>
			</div>
			{/* IDEAS PORTION END */}
			<br />
			<br />
			<br />
			<br />
			<Breadcrumb active="education" activeLink="/education" />
			<br />
			{/* CATER STARTUP START */}
			<div className="caterStartup_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-8">
							<h1 className="themeText">EDUCATION</h1>
							<br />
							<h4>
								Digital learning has quickly become a norm in this age of
								technological advancement, and GoodCore has been playing its
								part in this development since 2005. Students all over the world
								benefit from our educational applications - an educator's dream!
							</h4>
							<br />
							<h4>
								From toddler-friendly mobile apps to efficient learning
								management systems, we have done it all. Our developers
								understand the needs of both teachers and students, and create
								applications that will benefit both stakeholders in the
								education sector.
							</h4>
							<br />
							<h4>
								Work with us so you can contribute to the digitisation of the
								old-school education system and achieve all learning outcomes in
								the best way possible.
							</h4>
							<br />
							<button className="themeBtn">LETS TALK</button>
						</div>
						<div className="col-4 text-center align-self-center">
							<img style={{ width: "50%" }} src={educationIcon} alt="cater" />
						</div>
					</div>
				</div>
			</div>
			{/* CATER STARTUP END */}
			<br />
			<WeOffering education />
			<br />
			<WhyLozpdata />
			<br />
			{/* EDUCATION SECTION START */}
			<div className="education_section container-fluid text-white">
				<div className="row">
					<div className="col-12 col-sm-11 col-md-8 text-center mx-auto">
						<h3 className="text-center mt-4">
							If you are an educator looking to bring about a transformation in
							the academic realm or a fresh startup in search of a development
							partner to help you switch up the education system, we're here to
							hear you out.
						</h3>
						<button className="themeBtn mt-3">START PROJECT</button>
					</div>
				</div>
			</div>
			{/* EDUCATION SECTION END */}
			<br />
			<Technologies />
			<Build4 />
			<br />
			<GetConnected />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Education;
