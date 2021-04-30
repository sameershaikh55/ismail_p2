import React, { useState } from "react";
import placeholder from "../assets/placeholder2.svg";
import placeholder2 from "../assets/placeholder3.svg";

const OurTeam = () => {
	const [teamNav, setTeamNav] = useState(false);
	return (
		<div className="ourTeam_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h1 className="themeText text-center mb-4">
							OUR TEAM /OUR EXPERTS
						</h1>
						<div className="ourTeamBtn row justify-content-center">
							<div>
								<button
									onClick={() => setTeamNav(false)}
									className="mr-4 pb-1 text-secondary"
								>
									LEADER
								</button>
								{!teamNav && <div className="underLine ml-3"></div>}
							</div>
							<div>
								<button
									onClick={() => setTeamNav(true)}
									className="ml-4 pb-1 text-secondary"
								>
									ADVISORS
								</button>
								{teamNav && <div className="underLine ml-5"></div>}
							</div>
						</div>
						{/* LEADER SECTION START */}
						{!teamNav && (
							<div className="row justify-content-center mt-2 mt-sm-5">
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
								<div className="col-6 col-md-3 text-right text-md-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
								<div className="col-6 col-md-3 text-left text-md-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
								<div className="col-6 col-md-3 text-right text-md-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
								<div className="col-6 col-md-3 text-left text-md-center mt-5">
									<img src={placeholder} alt="placeholder" />
								</div>
							</div>
						)}
						{/* LEADER SECTION END */}

						{/* ADVISOR SECTION START */}
						{teamNav && (
							<div className="row justify-content-center mt-2 mt-sm-5">
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
								<div className="col-6 col-md-3 d-none d-md-block text-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
								<div className="col-6 col-md-3 text-right text-md-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
								<div className="col-6 col-md-3 text-left text-md-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
								<div className="col-6 col-md-3 text-right text-md-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
								<div className="col-6 col-md-3 text-left text-md-center mt-5">
									<img src={placeholder2} alt="placeholder2" />
								</div>
							</div>
						)}
						{/* ADVISOR SECTION END */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurTeam;
