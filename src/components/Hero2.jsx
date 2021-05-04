import React from "react";
import heroImg from "../assets/hero2.svg";
import android from "../assets/android.svg";
import apple from "../assets/apple.svg";
import icb from "../assets/construction.svg";

const Hero2 = () => {
	return (
		<div className="hero2_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-9 mx-auto">
						<div className="row">
							<div className="col-11 col-sm-10 col-md-6 mx-auto align-self-center">
								<h1 className="font-weight-bolder"> ICB Retaining App </h1>
								<h4>
									Innovating the world inside your pocket with mobile apps that
									entice and engage.
								</h4>
								<div className="mt-3 d-flex justify-content-start align-items-center">
									<img
										style={{ width: "9%" }}
										src={android}
										alt="android"
										className="mr-3"
									/>
									<img style={{ width: "9%" }} src={apple} alt="apple" />
								</div>
								<br />
							</div>
							<div className="col-10 col-sm-8 mx-auto col-md-6">
								<img style={{ width: "100%" }} src={icb} alt="icbImage" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
