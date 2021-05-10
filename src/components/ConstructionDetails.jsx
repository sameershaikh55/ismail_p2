import React from "react";
import cDetails1 from "../assets/cDetails1.svg";
import cDetails2 from "../assets/cDetails2.svg";
import cDetails3 from "../assets/cDetails3.svg";

const ConstructionDetails = () => {
	return (
		<div className="travelPortal_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-8 col-sm-6 col-md-4 mx-auto text-center">
						<img style={{ width: "38%" }} src={cDetails1} alt="portal" />
					</div>
					<div className="col-11 col-sm-10 col-md-8 mt-5 mt-md-0 mx-auto align-self-center">
						<h1 className="grid_sideLine pl-4">
							Optimise production, boost revenue
						</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>

					<div className="col-11 col-sm-10 col-md-8 mt-5 mt-md-0 order-4 order-md-3 mx-auto align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">
							Use your data to plan production
						</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
					<div className="col-8 col-sm-6 col-md-4 mx-auto order-3 order-md-4 text-center mt-5">
						<img style={{ width: "38%" }} src={cDetails2} alt="portal" />
					</div>

					<div className="col-8 col-sm-6 col-md-4 mx-auto text-center mt-5">
						<img style={{ width: "38%" }} src={cDetails3} alt="portal" />
					</div>
					<div className="col-11 col-sm-10 col-md-8 mt-5 mt-md-0 align-self-center mt-5">
						<h1 className="grid_sideLine pl-4">
							Balance your supply and save revenue
						</h1>
						<h4 className="pl-4 mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConstructionDetails;
