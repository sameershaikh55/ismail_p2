import React from "react";
import process from "../assets/ourProcessHead.svg";
import line from "../assets/ourProccesLine.svg";

const OurProcess = () => {
	return (
		<div className="ourProcess_container">
			<div className="container-fluid">
				<h1 className="themeText display-4 font-weight-bold">
					<img style={{ width: "18px" }} src={process} alt="process" /> OUR
					PROCESS
				</h1>
				<div className="row mt-5">
					<div className="col-1 imageContainer">
						<img src={line} alt="line" />
					</div>
					<div className="col-11">
						<div className="row">
							{/* SECTION ONE START */}
							<div className="col-12 col-sm-3 col-md-3 col-lg-5">
								<h2 className="font-weight-bold">Discover and Estimate</h2>
							</div>
							<div className="col-12 col-sm-9 col-md-9 col-lg-7 mt-3 mt-sm-0">
								<h4>
									To produce the best solution possible, we pay close attention
									to your product vision. We welcome your suggestions.
								</h4>
								<div>
									<h4>Project estimation</h4>
									<h4>Development of technical specification</h4>
								</div>
							</div>
							{/* SECTION ONE END */}

							{/* SECTION TWO START */}
							<div className="col-12 col-sm-3 col-md-3 col-lg-5 process processH">
								<h2 className="font-weight-bold">Design</h2>
							</div>
							<div className="col-12 col-sm-9 col-md-9 col-lg-7 mt-3 mt-sm-0 process">
								<h4>
									To provide stylish and interaction design we focus on a custom
									approach. No matter how complex the technological aspect of
									the product, it will be easy and intuitive to navigate. We are
									capable of producing clickable prototypes to provide a
									comprehensive vision of the final result.
								</h4>
								<div className="row ml-1">
									<h5 className="col-6 my-2 font-weight-bold">Wireframing</h5>
									<h5 className="col-6 my-2 font-weight-bold">
										Invision & Marvel
									</h5>
									<h5 className="col-6 my-2 font-weight-bold">UI/UX Design</h5>
								</div>
							</div>
							{/* SECTION TWO END */}

							{/* SECTION THIRD START */}
							<div className="col-12 col-sm-3 col-md-3 col-lg-5 process1 process1H">
								<h2 className="font-weight-bold">Develop</h2>
							</div>
							<div className="col-12 col-sm-9 col-md-9 col-lg-7 mt-3 mt-sm-0 process1">
								<h4>
									In the process of working toward a result we follow Scrum
									methodology, assuring a development workflow that is
									resource-effective and time-sensitive.
								</h4>
								<div className="row ml-1">
									<h5 className="col-6 my-2 font-weight-bold">Back-End</h5>
									<h5 className="col-6 my-2 font-weight-bold">
										Modern Technologies
									</h5>
									<h5 className="col-6 my-2 font-weight-bold">Front-End</h5>
									<h5 className="col-6 my-2 font-weight-bold">Database</h5>
								</div>
							</div>
							{/* SECTION THIRD END */}

							{/* SECTION FOURTH START */}
							<div className="col-12 col-sm-3 col-md-3 col-lg-5 process2 process2H">
								<h2 className="font-weight-bold">QA</h2>
							</div>
							<div className="col-12 col-sm-9 col-md-9 col-lg-7 mt-3 mt-sm-0 process2">
								<h4>
									To be confident that every individual part complements the
									unified system and results in consistent, reliable product
									functionality, exhaustive testing is performed throughout the
									entire development process.
								</h4>
								<div className="row ml-1">
									<h5 className="col-6 my-2 font-weight-bold">
										Manual and Automated Testing
									</h5>
									<h5 className="col-6 my-2 font-weight-bold">API Testing</h5>
									<h5 className="col-6 my-2 font-weight-bold">
										Easily Understandable Reports
									</h5>
									<h5 className="col-6 my-2 font-weight-bold">
										Performance Testing
									</h5>
								</div>
							</div>
							{/* SECTION FOURTH END */}

							{/* SECTION FOURTH START */}
							<div className="col-12 col-sm-3 col-md-3 col-lg-5 process3 process3H">
								<h2 className="font-weight-bold">Delivery</h2>
							</div>
							<div className="col-12 col-sm-9 col-md-9 col-lg-7 mt-3 mt-sm-0 process3">
								<h4>
									With the product designed, developed, and tested, it is now
									ready for launch.
								</h4>
								<div className="row ml-1">
									<h5 className="col-6 font-weight-bold">Strategic Plan</h5>
									<h5 className="col-6 font-weight-bold">Product Launch</h5>
									<h5 className="col-6 font-weight-bold">Customer Analytics</h5>
									<h5 className="col-6 font-weight-bold">Support</h5>
								</div>
							</div>
							{/* SECTION FOURTH END */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurProcess;
