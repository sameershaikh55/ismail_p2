import React from "react";
import healthcare1 from "../assets/healthcare1.svg";
import healthcare2 from "../assets/healthcare2.svg";
import healthcare3 from "../assets/healthcare3.svg";
import healthcare4 from "../assets/healthcare4.svg";
import healthcare5 from "../assets/healthcare5.svg";

const HealthcareOrg = () => {
	return (
		<div className="travelPortal_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-8 align-self-center">
						<h1 className="grid_sideLine pl-4">Healthcare Organisations</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.{" "}
						</h4>
					</div>
					<div className="col-4 text-center">
						<img style={{ width: "45%" }} src={healthcare1} alt="portal" />
					</div>

					<div className="col-4 text-center mt-5">
						<img style={{ width: "45%" }} src={healthcare2} alt="portal" />
					</div>
					<div className="col-8 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">Public & Private Hospitals</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>

					<div className="col-8 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">Clinics & Laboratories</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.{" "}
						</h4>
					</div>
					<div className="col-4 text-center mt-5">
						<img style={{ width: "45%" }} src={healthcare3} alt="portal" />
					</div>

					<div className="col-4 text-center mt-5">
						<img style={{ width: "45%" }} src={healthcare4} alt="portal" />
					</div>
					<div className="col-8 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">Assisted Living Facilities</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.{" "}
						</h4>
					</div>

					<div className="col-8 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">Personal Healthcare</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
					<div className="col-4 text-center mt-5">
						<img style={{ width: "50%" }} src={healthcare5} alt="portal" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthcareOrg;
