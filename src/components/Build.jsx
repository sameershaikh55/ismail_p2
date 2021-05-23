import React from "react";
import build from "../assets/build.svg";
import build2 from "../assets/build2.png";
import { useHistory } from "react-router-dom";

const Build = () => {
	let history = useHistory();

	return (
		<div className="build_container">
			<div className="container-fluid text-center">
				<h1 className="text-center mb-4 display-4">
					<span className="themeText">WE LOVE TO</span> BUILD
				</h1>
				<h6 className="row text-secondary">
					<div className="col-11 col-sm-10 col-md-8 m-auto">
						Our belief in creating tangible value for our customers is what we
						think is different about LozpData. Our attention to detail and
						quality is unmatched in the industry. We’re not just a developer
						company. We value our customers’ success as much as our own by
						sharing development risks so that they can be bold in their adoption
						of new technologies. See our portfolio below.0
					</div>
				</h6>
				<div className="build_body row">
					<div className="imgContainer1 col-12 col-sm-10 col-md-6 mx-auto mb-5 mb-md-0">
						<img src={build} alt="build" />
					</div>
					<div className="grid_sideLine col-12 col-sm-8 col-md-6 mb-5 mx-auto mb-md-0 align-self-center text-left py-3 pl-5">
						<h1>CONSTRUCTION PO</h1>
						<h6 className="text-secondary">
							We help you in application development services to accelerate your
							business growth. Here, we built a construction purchase order
							application for our loyal client. Our next-generation app
							development offering simplifies business complexities for some of
							the most successful companies. We Engineer mobile apps that
							provide unforgettable digital experiences for your target audience
							across all platforms.
						</h6>
						<button
							onClick={() => history.push("/icb")}
							className="themeBtn2 mt-3"
						>
							VIEW CASE STUDY
						</button>
					</div>
					<div className="grid_sideLine col-12 col-sm-8 col-md-6 order-2 order-md-1 mb-5 mb-md-0 mt-5 mt-md-0 mx-auto align-self-center text-left py-3 pl-5 my-5">
						<h1 className="themeText">E-COMMERCE</h1>
						<h6 className="text-secondary">
							We help you build Web Applications like e-commerce using
							industry-leading technologies. Our web application development
							service includes everything from a simple CMS-enabled website to
							developing powerful progressive web apps, custom business
							applications, and e-commerce portals. Click here to see our full
							portfolio of our e-commerce site.
						</h6>
						<button
							onClick={() => history.push("/ecommerce")}
							className="themeBtn2 mt-3"
						>
							VIEW CASE STUDY
						</button>
					</div>
					<div className="imgContainer2 col-12 col-sm-10 col-md-6 mx-auto order-1 order-md-2">
						<img src={build2} alt="build" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Build;
