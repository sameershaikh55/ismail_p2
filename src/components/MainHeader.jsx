import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const MainHeader = () => {
	// FOR NAVBAR SCROLLING EFFECT START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".NavbarContainer");
		header.classList.toggle("sticky", window.scrollY > 1);
	});
	// FOR NAVBAR SCROLLING EFFECT END
	return (
		<>
			{/* <!-- ======== NAVBAR START =========== --> */}
			<div class="NavbarContainer">
				<div className="logo_container">
					<img src={Logo} alt="logo" />
				</div>
				{/* <!-- HAMBURGER START --> */}
				<div class="HideClass">
					<i class="fa fa-bars fa-2x"></i>
				</div>
				{/* <!-- HAMBURGER END --> */}
				<ul>
					<li>
						<NavLink activeClassName="active" exact to="/">
							About
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" exact to="/em">
							Case Studies
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" exact to="/ol">
							Services
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" exact to="/lo">
							Industries
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" exact to="/li">
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
