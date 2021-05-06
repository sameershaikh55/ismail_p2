import React from "react";
import { Link } from "react-router-dom";
import lessthen from "../assets/lessthen.svg";

const Breadcrumb = ({ active, activeLink }) => {
	if (
		active !== "Travel" &&
		active !== "Healthcare" &&
		active !== "Construction" &&
		active !== "education"
	) {
		var sectionVar = (
			<>
				<Link
					className="h4 mt-2 text-decoration-none text-dark"
					to="/caseStudies"
				>
					Case Studies
				</Link>

				<img
					style={{ width: "3%" }}
					className="mx-4"
					src={lessthen}
					alt="lessthen.svg"
				/>
			</>
		);
	}
	return (
		<div className="container-fluid my-5">
			<div className="row">
				<div className="d-flex align-items-center mx-auto text-center">
					<Link className="h4 text-decoration-none text-dark" to="/">
						Home
					</Link>
					<img
						style={{ width: "3%" }}
						className="mx-4"
						src={lessthen}
						alt="lessthen.svg"
					/>
					{sectionVar}
					<Link className="h4 mt-2 text-decoration-none" to={activeLink}>
						{active}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumb;
