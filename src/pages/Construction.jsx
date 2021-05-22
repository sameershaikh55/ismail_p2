import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import constructionIcon from "../assets/constructionIcon.svg";
import ConstructionDetails from "../components/ConstructionDetails";
import agricultureWork from "../assets/agricultureWork.svg";
import dot from "../assets/dot.svg";
import Build4 from "../components/Build4";
import Technologies from "../components/Technologies";
import GetConnected from "../components/GetConnected";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Construction = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="constructionHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-center text-white">
				<div className="mt-5 pt-5 display-4">Development for Constuction</div>
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
						for construction Helps you
					</h1>
				</div>
			</div>
			{/* IDEAS PORTION END */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<Breadcrumb active="Construction" activeLink="/construction" />
			<br />
			{/* CATER STARTUP START */}
			<div className="caterStartup_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-sm-10 col-md-8 mx-auto order-2 order-md-1 mt-5 mt-md-0">
							<h1 className="themeText display-4">CONSTRUCTION</h1>
							<br />
							<h4 className="text-justify">
								Digital learning has quickly become a norm in this age of
								technological advancement, and GoodCore has been playing its
								part in this development since 2005. Students all over the world
								benefit from our educational applications - an educator's dream!
							</h4>
							<br />
							<h4 className="text-justify">
								From toddler-friendly mobile apps to efficient learning
								management systems, we have done it all. Our developers
								understand the needs of both teachers and students, and create
								applications that will benefit both stakeholders in the
								education sector.
							</h4>
							<br />
							<h4 className="text-justify">
								Work with us so you can contribute to the digitisation of the
								old-school education system and achieve all learning outcomes in
								the best way possible.
							</h4>
							<br />
							<button className="themeBtn mt-4">LETS TALK</button>
						</div>
						<div className="col-8 col-sm-6 col-md-4 mx-auto order-1 order-md-2 text-center align-self-center">
							<img
								style={{ width: "50%" }}
								src={constructionIcon}
								alt="cater"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* CATER STARTUP END */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<ConstructionDetails />
			<br />
			{/* CATER STARTUP START */}
			<div className="caterStartup_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-10 mx-auto">
							<div className="row">
								<div className="col-11 col-sm-10 col-md-8 mx-auto">
									<h1 className="display-4">
										How Software Development for Agriculture Works
									</h1>
									<br />
									<br />
									<h4 className="mb-4 font-weight-bold">
										<img src={dot} alt="dot" className="mr-4" />
										Integration and automation solutions
									</h4>
									<h4 className="mb-4 font-weight-bold">
										<img src={dot} alt="dot" className="mr-3" /> Big Data and
										advanced analytics
									</h4>
									<h4 className="mb-4 font-weight-bold">
										<img src={dot} alt="dot" className="mr-3" /> Custom software
										solutions
									</h4>
								</div>
								<div className="col-10 col-sm-6 col-md-4 mx-auto mt-5 mt-md-0 text-center align-self-center">
									<img
										style={{ width: "70%" }}
										src={agricultureWork}
										alt="cater"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* CATER STARTUP END */}
			<br />
			<Technologies />
			<Build4 />
			<br />
			<GetConnected />
			<br />
			<ContactUs uiux />
			<Footer />
		</>
	);
};

export default Construction;
