import React from "react";
import lozpdata1 from "../assets/lozpdata1.svg";
import lozpdata2 from "../assets/lozpdata2.svg";
import lozpdata3 from "../assets/lozpdata3.svg";

const WhyLozpdata = () => {
	return (
		<div className="UIUXSection_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="font-weight-bold text-center col-11 col-sm-9 col-md-8 mx-auto">
						<span className="themeText">WHY</span> LOZPDATA
					</h1>
				</div>
				<br />
				<br />
				<br />
				<div className="row">
					<div className="col-8 align-self-center">
						<h1 className="grid_sideLine pl-4">
							Perfect combination of technical skill and academic domain
							knowledge
						</h1>
						<h4 className="pl-4 mt-4">
							Our development team consists of members who are not only skilled
							in development-related activities but are also aware of the latest
							developments in the educational sphere. They will understand your
							specific requirements and make sure they are perfectly translated
							into the perfect education software that fits your needs.
						</h4>
					</div>
					<div className="col-4 text-center">
						<img style={{ width: "50%" }} src={lozpdata1} alt="portal" />
					</div>

					<div className="col-4 text-center mt-5">
						<img style={{ width: "50%" }} src={lozpdata2} alt="portal" />
					</div>
					<div className="col-8 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">
							Expertise in user-friendly design
						</h1>
						<h4 className="pl-4 mt-4">
							Our team members understand how important it is for education
							software to be easy-to-use for both instructors and faculty
							members as well as students of all ages. We also work on stunning
							graphics and visuals which keep the younger students interested in
							what they are learning, leading to an exciting student experience!
						</h4>
					</div>

					<div className="col-8 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">
							Safe and secure information storage and sharing
						</h1>
						<h4 className="pl-4 mt-4">
							Ensuring a safe learning environment along with secure storage of
							academic data is a major concern for educational institutions, and
							our developers make sure to provide the best security features and
							access control for all users.
						</h4>
					</div>
					<div className="col-4 text-center mt-5">
						<img style={{ width: "50%" }} src={lozpdata3} alt="portal" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyLozpdata;
