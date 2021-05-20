import React from "react";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import headerImage from "../assets/caseStudyHeader.png";
import CaseStudyBody from "../components/CaseStudyBody";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const CaseStudies = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* CASE STUDIES HEADER IMAGE START */}
			<div className="caseStudyHeader_container container-fluid d-flex align-items-center text-white">
				<div className="row">
					<div className="col-12 col-sm-11 mx-auto">
						<h1 className="display-1 text-center text-sm-left">Case studies</h1>
						<h3 className="row text-left mt-3 mb-4">
							<div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center text-sm-left">
								When It Comes To Website Development, We Push The Limits And Set
								New Standards By Creating Functionally Rich And Aesthetically
								Stunning Websites. Best-In-Class UX And Compelling
							</div>
						</h3>
					</div>
				</div>
				<div className="caseStudyImg">
					<img src={headerImage} alt="header" />
				</div>
			</div>
			{/* CASE STUDIES HEADER IMAGE END */}
			<CaseStudyBody />
			<ContactUs />
			<Footer />
		</>
	);
};

export default CaseStudies;
