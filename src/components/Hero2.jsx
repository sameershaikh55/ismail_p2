import React from "react";
import android from "../assets/android.svg";
import apple from "../assets/apple.svg";

const Hero2 = ({ heading, description, img, heightEcom }) => {
	return (
		<>
			{/* HEADER START */}
			<div className="hero2_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-sm-9 mx-auto">
							<div style={{ marginTop: "12rem" }} className="row">
								<div className="col-11 col-sm-10 col-md-6 mx-auto align-self-center">
									<h1 className="display-3"> {heading} </h1>
									<h4>{description}</h4>

									{heading === "ICB Retaining App" && (
										<div className="mt-3 d-flex justify-content-start align-items-center">
											<img
												style={{ width: "9%" }}
												src={android}
												alt="android"
												className="mr-3"
											/>
											<img style={{ width: "9%" }} src={apple} alt="apple" />
										</div>
									)}

									<br />
								</div>
								<div className="col-10 col-sm-8 mx-auto col-md-6">
									<img style={{ width: "100%" }} src={img} alt="icbImage" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* HEADER END */}

			{/* UNDER HEADER START */}
			<div
				style={{ marginTop: heightEcom && "11rem" }}
				className="icb_container container-fluid"
			>
				<div className="row">
					<div className="col-12 col-sm-9 mx-auto">
						<div className="row">
							<div className="col-4 col-md-4">
								<h3 className="themeText">Services</h3>
								<h5 className="grid_sideLine pl-4">UI /UX Design</h5>
								<h5 className="grid_sideLine pl-4">Laravel development</h5>
								<h5 className="grid_sideLine pl-4">React Js</h5>
							</div>
							<div className="col-2 col-md-4">
								<h3 className="themeText">Type</h3>
								<h5 className="grid_sideLine pl-4">APP</h5>
							</div>
							<div className="col-auto col-md-4">
								<h3 className="themeText">Technologies</h3>
								<h5 className="grid_sideLine pl-4">Phython</h5>
								<h5 className="grid_sideLine pl-4">AWS</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* UNDER HEADER END */}
		</>
	);
};

export default Hero2;
