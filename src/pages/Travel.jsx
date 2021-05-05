import React from "react";
import Hero2 from "../components/Hero2";
import IcbRetaining from "../components/IcbRetaining";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import travel from "../assets/travelAgency.svg";
import TravelCrousel from "../components/TravelCrousel";

const Travel = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Hero2
				heading="Travel  Agency Web"
				description="Innovating the world inside your pocket with mobile apps that entice and engage."
				img={travel}
			/>
			<br />
			<IcbRetaining travel />
			<br />
			<TravelCrousel />
		</>
	);
};

export default Travel;
