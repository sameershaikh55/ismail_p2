import React from "react";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import WebDevelopmentSection from "../components/WebDevelopmentSection";
import development from "../assets/uiux.png";
import { useHooks } from "../Hooks/useHooks";
import UIUXSection from "../components/UIUXSection";
import Branding from "../components/Branding";
import UiUxProcess from "../components/UiUxProcess";
import GetConnected from "../components/GetConnected";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const UIUX = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* WEB DEVELOPMENT HEADER IMAGE START */}
			<div className="uiUxDesigningHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<div className="mt-5 pt-5 display-4">UI / UX Designing</div>
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
						<span className="themeText">Industry Leaders In</span> UI / UX
						Designing
					</h1>
					<h4 className="row text-secondary mt-4">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7 m-auto">
							When It Comes To Website Development, We Push The Limits And Set
							New Standards By Creating Functionally Rich And Aesthetically
							Stunning Websites. Best-In-Class UX And Compelling{" "}
						</div>
					</h4>
				</div>
			</div>
			{/* IDEAS PORTION END */}
			<br />
			<br />
			<br />
			<br />
			<WebDevelopmentSection
				heading="DESIGN AND BRANDING"
				image={development}
			/>
			<br />
			<UIUXSection />
			<br />
			<Branding />
			<br />
			<UiUxProcess />
			{/* READY WORK PORTION START */}
			<div className="container-fluid mt-n5">
				<div className="text-center mt-5 px-2">
					<h1 className="themeText display-4">WE ARE READY TO WORK</h1>
					<h4 className="row text-secondary">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7 m-auto">
							When It Comes To Website Development, We Push The Limits And Set
							New Standards By Creating Functionally Rich And Aesthetically
							Stunning Websites. Best-In-Class UX And Compelling{" "}
						</div>
					</h4>
				</div>
			</div>
			{/* READY WORK PORTION END */}
			<br />
			<GetConnected />
			<br />
			<ContactUs uiux />
			<Footer />
		</>
	);
};

export default UIUX;
