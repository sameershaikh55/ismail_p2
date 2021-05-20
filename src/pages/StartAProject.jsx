import React from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import StartProjectBody from "../components/StartProjectBody";
import { useHooks } from "../Hooks/useHooks";

const StartAProject = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} startAProject />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{/* HEADER IMAGE START */}
			<div className="startAProject_heroSection">
				<StartProjectBody />
			</div>
			{/* HEADER IMAGE END */}
			<Footer />
		</>
	);
};

export default StartAProject;
