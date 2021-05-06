import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<ul>
				<li>
					<NavLink
						exact
						to="/aboutUs"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="/caseStudies"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Case Studies
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="application"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Services
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="services"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Industries
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="blog"
						activeClassName="activeNav"
						onClick={ClickEvent}
					>
						Blog
					</NavLink>
				</li>
				<li className="contactBtnSide">
					<NavLink exact to="/start_A_Project" onClick={ClickEvent}>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
