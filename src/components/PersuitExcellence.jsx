import React from "react";
import diamond from "../assets/diamond.svg";
import functional from "../assets/functional.svg";
import eye from "../assets/eye.svg";
import secure from "../assets/secure.svg";

const PersuitExcellence = () => {
	return (
		<div className="persuitExe_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="col-12 text-center">
						<span className="themeText">In pursuit of</span> excellence.
					</h1>
					<h4 className="col-12 col-sm-10 col-md-6 mx-auto mt-3 mb-2 text-center">
						Our cohesive team of designers and developers focus on delivering an
						app that solves your problem
					</h4>
				</div>
				<div className="row">
					<div className="col-9 col-sm-9 mx-auto">
						<div className="row">
							<div className="col-12 col-sm-6 mt-5">
								<img style={{ width: "16%" }} src={diamond} alt="diamond" />
								<h1 className="themeText my-4">Beautiful</h1>
								<h5>
									We test on both Android and iOS with multiple devices to
									ensure your app works as intended.
								</h5>
							</div>
							<div className="col-12 col-sm-6 mt-5">
								<img style={{ width: "16%" }} src={functional} alt="diamond" />
								<h1 className="themeText my-4">Functional</h1>
								<h5>
									We test on both Android and iOS with multiple devices to
									ensure your app works as intended.
								</h5>
							</div>
							<div className="col-12 col-sm-6 mt-5">
								<img style={{ width: "16%" }} src={eye} alt="diamond" />
								<h1 className="themeText my-4">Intuitive</h1>
								<h5>
									We test on both Android and iOS with multiple devices to
									ensure your app works as intended.
								</h5>
							</div>
							<div className="col-12 col-sm-6 mt-5">
								<img style={{ width: "10%" }} src={secure} alt="diamond" />
								<h1 className="themeText my-4">Secure</h1>
								<h5>
									We test on both Android and iOS with multiple devices to
									ensure your app works as intended.
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersuitExcellence;
