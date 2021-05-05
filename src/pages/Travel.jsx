import React from "react";
import Hero2 from "../components/Hero2";
import IcbRetaining from "../components/IcbRetaining";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";
import travel from "../assets/travelAgency.svg";
import TravelCrousel from "../components/TravelCrousel";
import CustomDesign from "../components/CustomDesign";
import AboutClient from "../components/AboutClient";
import solution1 from "../assets/solution1.svg";
import solution2 from "../assets/solution2.svg";
import Delivered2 from "../assets/Delivered2";
import placeholder from "../assets/placeholder2.svg";
import PersuitExcellence from "../components/PersuitExcellence";
import Build2 from "../components/Build2";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

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
			<br />
			<br />
			<br />
			<br />
			<CustomDesign />
			<br />
			<AboutClient />
			<br />
			{/* TRAVEL CHALLENGE & SOLUTION START */}
			<div className="challengeAndSolution_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-sm-10 col-md-6 mx-auto text-center align-self-center">
							<img style={{ width: "30%" }} src={solution1} alt="solution" />
						</div>
						<div className="col-12 col-sm-8 col-md-6 text-center text-md-left mx-auto align-self-center mt-5 mt-md-0">
							<h1>The challenge</h1>
							<h5>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.Lorem
								Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</h5>
						</div>

						<div className="col-12 col-sm-8 col-md-6 order-2 order-md-1 text-center text-md-left mx-auto align-self-center mt-5 mt-md-0">
							<h1>The solution</h1>
							<h5>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.Lorem
								Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</h5>
						</div>
						<div className="col-12 col-sm-10 col-md-6 order-1 order-md-2 mx-auto text-center align-self-center mt-5 mt-md-0">
							<img style={{ width: "30%" }} src={solution2} alt="solution" />
						</div>
					</div>
				</div>
			</div>
			{/* TRAVEL CHALLENGE & SOLUTION END */}
			<br />
			<Delivered2 />
			<br />
			{/* TRAVEL CHALLENGE & SOLUTION START */}
			<div className="challengeAndSolution_container">
				<div className="container-fluid">
					<div className="text-center mt-5 px-2">
						<h1 className="font-weight-bold">TEAM</h1>
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
