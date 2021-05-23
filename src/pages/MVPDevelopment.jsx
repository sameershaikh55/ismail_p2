import React from "react";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";

const MVPDevelopment = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* ABOUT US HEADER IMAGE START */}
			<div className="aboutUsHeader_container container-fluid d-flex flex-column justify-content-center align-items-center text-white">
				<h1 className="mt-5 pt-5">MVP Development</h1>
			</div>
			{/* ABOUT US HEADER IMAGE END */}
			{/* IDEAS PORTION START */}
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="font-weight-bold">
						<span className="themeText">Understanding Minimum </span>
						Viable Product Development
					</h1>
					<h4 className="row text-secondary">
						<div className="col-12 col-sm-10 col-md-8 col-lg-6 m-auto">
							When It Comes To Website Development, We Push The Limits And Set
							New Standards By Creating Functionally Rich And Aesthetically
							Stunning Websites. Best-In-Class UX And Compelling
						</div>
					</h4>
				</div>
			</div>
			{/* IDEAS PORTION END */}
		</>
	);
};

export default MVPDevelopment;
