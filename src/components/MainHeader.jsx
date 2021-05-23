import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.svg";
import { useHistory } from "react-router-dom";

const MainHeader = ({ ClickEvent, startAProject }) => {
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
					<li className="position-relative industryLink">
						<NavLink activeClassName="activeNav" exact to="/notActive">
							Services
						</NavLink>
						<div className="navDropdown service container-fluid position-absolute">
							<div className="row pl-3 bg-white py-3">
								<div className="col-12 grid_sideLine">
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/travel"
										>
											Mobile App Development
										</NavLink>
									</h6>
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/webDevelopment"
										>
											Web Development
										</NavLink>
									</h6>
									<h6>
										<NavLink activeClassName="activeDropdown" exact to="/UIUX">
											UI / UX
										</NavLink>
									</h6>
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/education"
										>
											Artificial Intelligence
										</NavLink>
									</h6>
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/mvpDevelopment"
										>
											MVP Development
										</NavLink>
									</h6>
								</div>
							</div>
						</div>
					</li>
					<li className="position-relative industryLink">
						<NavLink activeClassName="activeNav" exact to="/notActive">
							Industries
						</NavLink>
						<div className="navDropdown container-fluid position-absolute">
							<div className="row pl-3 bg-white py-3">
								<div className="col-6 grid_sideLine">
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/travel"
										>
											Travel & Leisure solutions
										</NavLink>
									</h6>
									<h6>
										<NavLink activeClassName="activeDropdown" exact to="">
											Food & Restaurants
										</NavLink>
									</h6>
									<h6>
										<NavLink activeClassName="activeDropdown" exact to="">
											Media & Entertainment
										</NavLink>
									</h6>
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/education"
										>
											Educations and Elearning Solutions
										</NavLink>
									</h6>
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/eCommerce"
										>
											Retails and ecommerce Solutions
										</NavLink>
									</h6>
								</div>
								<div className="col-6 grid_sideLine">
									<h6>
										<NavLink activeClassName="activeDropdown" exact to="">
											Real Estate & Housing IT Solutions
										</NavLink>
									</h6>
									<h6>
										<NavLink activeClassName="activeDropdown" exact to="">
											Employee benefits services
										</NavLink>
									</h6>
									<h6>
										<NavLink
											activeClassName="activeDropdown"
											exact
											to="/healthcare"
										>
											EHS & Healthcare software developer
										</NavLink>
									</h6>
									<h6>
										<NavLink activeClassName="activeDropdown" exact to="">
											Shipping and logistic solutions
										</NavLink>
									</h6>
								</div>
							</div>
						</div>
					</li>
					<li>
						<NavLink activeClassName="activeNav" exact to="/blog">
							Blog
						</NavLink>
					</li>
				</ul>
				{startAProject && (
					<div className="contactBtn2">
						<NavLink
							className="text-decoration-none"
							exact
							to="/start_A_Project"
						>
							Let's Talk
						</NavLink>
					</div>
				)}
				{!startAProject && (
					<div className="contactBtn">
						<NavLink exact to="/start_A_Project">
							Let's Talk
						</NavLink>
					</div>
				)}
			</div>
			{/* <!-- ======== NAVBAR END =========== --> */}
		</>
	);
};

export default MainHeader;
