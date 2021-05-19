import React from "react";
import Hero2 from "../components/Hero2";
import IcbRetaining from "../components/IcbRetaining";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import travel from "../assets/travelAgency.png";
import TravelCrousel from "../components/TravelCrousel";
import CustomDesign from "../components/CustomDesign";
import AboutClient from "../components/AboutClient";
import Delivered2 from "../components/Delivered2";
import placeholder from "../assets/placeholder2.svg";
import PersuitExcellence from "../components/PersuitExcellence";
import Build2 from "../components/Build2";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import travelAgency from "../assets/travelAgency.png";
import ChallengeAndSol from "../components/ChallengeAndSol";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import laptop3 from "../assets/laptop3.png";
import Breadcrumb from "../components/Breadcrumb";

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
			<Breadcrumb active="Travel agency" activeLink="/travel" />
			<br />
			<br />
			<br />
			<br />
			<br />
			<TravelCrousel />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<CustomDesign img={travelAgency} />
			<br />
			<AboutClient />
			<br />
			<br />
			<br />
			<br />
			<ChallengeAndSol />
			<br />
			<Delivered2 laptop1={laptop1} laptop2={laptop2} laptop3={laptop3} />
			<br />
			{/* TRAVEL CHALLENGE & SOLUTION START */}
			<div className="challengeAndSolution_container">
				<div className="container-fluid">
					<div className="text-center mt-5 px-2">
						<h1 className="display-4">TEAM</h1>
						<h4 className="row text-secondary">
							<div className="col-11 col-sm-10 col-md-8 mx-auto">
								The team consisted of the technical lead, quality assurance
								engineer, and senior developers for the android and web
								applications, and was headed by the project manager.
							</div>
						</h4>
					</div>
					<div className="row mt-5">
						<div className="col-12 col-sm-8 col-md-6 mx-auto">
							<img
								style={{ width: "25%" }}
								className="col-3 text-center"
								src={placeholder}
								alt="placeholder"
							/>
							<img
								style={{ width: "25%" }}
								className="col-3 text-center"
								src={placeholder}
								alt="placeholder"
							/>
							<img
								style={{ width: "25%" }}
								className="col-3 text-center"
								src={placeholder}
								alt="placeholder"
							/>
							<img
								style={{ width: "25%" }}
								className="col-3 text-center"
								src={placeholder}
								alt="placeholder"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* TRAVEL CHALLENGE & SOLUTION END */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<PersuitExcellence />
			<br />
			<Build2 />
			<br />
			<br />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Travel;
