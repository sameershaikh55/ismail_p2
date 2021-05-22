import React from "react";
import Hero2 from "../components/Hero2";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import ecommerce1Header from "../assets/ecommerce1Header.png";
import IcbRetaining from "../components/IcbRetaining";
import CustomDesign from "../components/CustomDesign";
import ecommerce3 from "../assets/ecommerce3.png";
// import TravelCrousel from "../components/TravelCrousel";
import AboutClient from "../components/AboutClient";
import ChallengeAndSol from "../components/ChallengeAndSol";
import Delivered2 from "../components/Delivered2";
import PersuitExcellence from "../components/PersuitExcellence";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import laptop1 from "../assets/elaptop1.png";
import laptop2 from "../assets/elaptop2.png";
import laptop3 from "../assets/elaptop3.png";
import Build3 from "../components/Build3";
import Breadcrumb from "../components/Breadcrumb";

const ECommerceWeb = () => {
	const { isOpen, OnClick } = useHooks();
	return (
		<>
			<MainHeader ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Hero2
				heading="E-commerce web"
				description="Innovating the world inside your pocket with mobile apps that entice and engage."
				img={ecommerce1Header}
				heightEcom
			/>
			<br />
			<br />
			<br />
			<br />
			<IcbRetaining ecommerce />
			<br />
			<br />
			<br />
			<br />
			<Breadcrumb active="E-commerce web" activeLink="/ecommerce" />
			<br />
			{/* <br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<TravelCrousel />
			<br />
			<br /> */}
			<br />
			<br />
			<CustomDesign img={ecommerce3} />
			<br />
			<AboutClient />
			<br />
			<ChallengeAndSol />
			<br />
			<Delivered2 laptop1={laptop1} laptop2={laptop2} laptop3={laptop3} />
			<br />
			<PersuitExcellence />
			<br />
			<Build3 />
			<br />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default ECommerceWeb;
