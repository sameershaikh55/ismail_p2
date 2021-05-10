import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.svg";
import { useHistory } from "react-router-dom";

const MainHeader = ({ ClickEvent }) => {
	let history = useHistory();
	// FOR NAVBAR SCROLLING EFFECT START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".NavbarContainer");
		header.classList.toggle("sticky", window.scrollY > 1);
	});
	// FOR NAVBAR SCROLLING EFFECT END .
	return (
		<>
			{/* <!-- ======== NAVBAR START =========== --> */}
			<div className="NavbarContainer">
				<div className="logo_container">
					<img onClick={() => history.push("/")} src={Logo} alt="logo" />
				</div>
				{/* <!-- HAMBURGER START --> */}
				<div className="hamburgerContainer HideClass">
					<img onClick={ClickEvent} src={hamburger} alt="hamburger" />
				</div>
				{/* <!-- HAMBURGER END --> */}
				<ul>
					<li>
						<NavLink activeClassName="activeNav" exact to="/aboutUs">
							About
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/caseStudies">
							Case Studies
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/notActive">
							Services
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/notActive">
							Industries
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/blog">
							Blog
						</NavLink>
					</li>
				</ul>
				<div className="contactBtn">
					<NavLink exact to="/start_A_Project">
						Contact
					</NavLink>
				</div>
			</div>
			{/* <!-- ======== NAVBAR END =========== --> */}
		</>
	);
};

export default MainHeader;
