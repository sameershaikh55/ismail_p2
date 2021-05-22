import React from "react";
import icon1 from "../assets/mainIcon1.svg";
import icon2 from "../assets/mainIcon2.svg";
import icon3 from "../assets/mainIcon3.svg";
import icon4 from "../assets/mainIcon4.svg";
import { useHistory } from "react-router-dom";

const MainHero = () => {
	let history = useHistory();

	return (
		<div className="mainHero_container position-relative">
			<div className="container-fluid text-center">
				<h1>
					Your technology partner <br /> for innovative and impactful digital
					solutions
				</h1>
				<br />
				{/* <p>Software Company</p> */}
				<br />
				<button
					onClick={() => history.push("/start_A_Project")}
					className="themeBtn px-5"
				>
					lets talk
				</button>
				<div className="mainIcons_container d-none d-sm-flex">
					<img src={icon1} alt="icon" />
					<img src={icon2} alt="icon" />
					<img src={icon3} alt="icon" />
					<img src={icon4} alt="icon" />
				</div>
				<div className="mainIcons_container mobile position-absolute d-flex d-sm-none">
					<img src={icon1} alt="icon" />
					<img src={icon2} alt="icon" />
					<img src={icon3} alt="icon" />
					<img src={icon4} alt="icon" />
				</div>
			</div>
		</div>
	);
};

export default MainHero;
