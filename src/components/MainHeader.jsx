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
	// FOR NAVBAR SCROLLING EFFECT END
	return (
		<>
			{/* <!-- ======== NAVBAR START =========== --> */}
			<div className="NavbarContainer">
				<div onClick={() => history.push("/")} className="logo_container">
					<img src={Logo} alt="logo" />
				</div>
				{/* <!-- HAMBURGER START --> */}
				<div onClick={ClickEvent} className="hamburgerContainer HideClass">
					<img src={hamburger} alt="hamburger" />
				</div>
				{/* <!-- HAMBURGER END --> */}
				<ul>
					<li>
						<NavLink activeClassName="activeNav" exact to="/aboutUs">
							About
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/em">
							Case Studies
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/ol">
							Services
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/lo">
							Industries
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/li">
							Blog
						</NavLink>
					</li>
				</ul>
				<div className="contactBtn">
					<NavLink exact to="/lu">
						Contact
					</NavLink>
				</div>
			</div>
			{/* <!-- ======== NAVBAR END =========== --> */}
		</>
	);
};

export default MainHeader;
