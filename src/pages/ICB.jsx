import React from "react";
import AboutClient from "../components/AboutClient";
import ClientRequirement from "../components/ClientRequirement";
import Delivered from "../components/Delivered";
import Hero2 from "../components/Hero2";
import IcbRetaining from "../components/IcbRetaining";
import MainHeader from "../components/MainHeader";
import PersuitExcellence from "../components/PersuitExcellence";
import Planning from "../components/Planning";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";

const ICB = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Hero2 />
			<br />
			<IcbRetaining />
			<br />
			<AboutClient />
			<br />
			<ClientRequirement />
			<br />
			<Planning />
			<br />
			<Delivered />
			<br />
			<PersuitExcellence />
		</>
	);
};

export default ICB;
