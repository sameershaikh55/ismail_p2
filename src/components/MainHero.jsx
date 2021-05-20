import React from "react";
import icon1 from "../assets/mainIcon1.svg";
import icon2 from "../assets/mainIcon2.svg";
import icon3 from "../assets/mainIcon3.svg";
import icon4 from "../assets/mainIcon4.svg";

const MainHero = () => {
	return (
		<div className="mainHero_container">
			<div className="container-fluid text-center">
				<h1>Your technology partner for innovative and impactful digital solutions</h1>
				<br />
				{/* <p>Software Company</p> */}
				<br />
				<button className="themeBtn">lets talk</button>
				<div className="mainIcons_container">
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
