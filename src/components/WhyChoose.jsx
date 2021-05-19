import React from "react";
import choose1 from "../assets/choose1.svg";
import choose2 from "../assets/choose2.svg";
import choose3 from "../assets/choose3.svg";
import choose4 from "../assets/choose4.svg";
import choose5 from "../assets/choose5.svg";
import choose6 from "../assets/choose6.svg";

const WhyChoose = () => {
	const fullWidth = {
		width: "22%",
	};
	return (
		<div className="UIUXSection_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="text-center col-11 col-sm-9 col-md-8 mx-auto display-4">
						<span className="themeText">WHY</span> CHOOSE US ?
					</h1>
				</div>
				<div className="row mt-5">
					<div className="col-10 col-sm-6 col-md-4 text-center mt-5 mb-4 mx-auto">
						<img
							style={fullWidth}
							className="mb-4"
							src={choose1}
							alt="choose"
						/>
						<h3 className="mb-3 themeText">
							Knowledge of the Healthcare Domain
						</h3>
						<h5 className="lightColor">
							Web and mobile-based applications to efficiently organise patient
							queues, healthcare staff and resources - so that patients receive
							the right care at the right time, with ease.
						</h5>
					</div>
					<div className="col-10 col-sm-6 col-md-4 text-center mt-5 mb-4 mx-auto">
						<img
							style={fullWidth}
							className="mb-4"
							src={choose2}
							alt="choose"
						/>
						<h3 className="mb-3 themeText">
							Human-Centred Approach for Development & Design
						</h3>
						<h5 className="lightColor">
							Software solutions integrated with digital devices,
							video-conferencing features, medical imaging viewer and other
							capabilities to provide remote healthcare services.
						</h5>
					</div>
					<div className="col-10 col-sm-6 col-md-4 text-center mt-5 mb-4 mx-auto">
						<img
							style={fullWidth}
							className="mb-4"
							src={choose3}
							alt="choose"
						/>
						<h3 className="mb-3 themeText">
							Compliance with the Standards of the Healthcare Industry
						</h3>
						<h5 className="lightColor">
							Power software for monitoring and assisting the treatment of
							chronic illnesses with features including consolidated EHR
							databases, easy patient engagement, reporting, data analysis, and
							more.
						</h5>
					</div>
					<div className="col-10 col-sm-6 col-md-4 text-center mt-5 mb-4 mx-auto">
						<img
							style={fullWidth}
							className="mb-4"
							src={choose4}
							alt="choose"
						/>
						<h3 className="mb-3 themeText">On Time & Budget</h3>
						<h5 className="lightColor">
							Software solutions facilitating patients to avail discounts and
							free treatments, and healthcare providers to streamline patient
							registration requests and claims to discounts.{" "}
						</h5>
					</div>
					<div className="col-10 col-sm-6 col-md-4 text-center mt-5 mb-4 mx-auto">
						<img
							style={fullWidth}
							className="mb-4"
							src={choose5}
							alt="choose"
						/>
						<h3 className="mb-3 themeText">Multi-Device Support</h3>
						<h5 className="lightColor">
							In a collaborative effort, we plan out the phases of development
							keeping in view your priorities. The plan invariably has
							provisions to collect and account for feedback from users of the
							app and other stakeholders in your company.
						</h5>
					</div>
					<div className="col-10 col-sm-6 col-md-4 text-center mt-5 mb-4 mx-auto">
						<img
							style={fullWidth}
							className="mb-4"
							src={choose6}
							alt="choose"
						/>
						<h3 className="mb-3 themeText">Scalable Architecture</h3>
						<h5 className="lightColor">
							Custom-built software to automate the operations of laboratories,
							from test ordering, sample management, lab instrument applcation,
							and database management.
						</h5>
					</div>
				</div>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
};

export default WhyChoose;
