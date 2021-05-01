import React from "react";
import process from "../assets/ourProcessHead.svg";
import processLine from "../assets/uiProcess.svg";
import processDot from "../assets/processDot.svg";
import uiProcessMobile from "../assets/uiProcessMobile.svg";
import uiProcessDotMobile from "../assets/uiProcessDotMobile.svg";

const UiUxProcess = () => {
	return (
		<div className="uiUxProcess_container">
			<div className="container-fluid">
				<h1 className="themeText">
					<img style={{ width: "18px" }} src={process} alt="process" /> OUR
					PROCESS
				</h1>
				<br />
				<br />
				<br />
				<div className="row">
					{/* 1 PROCESS START */}
					<div className="col-3 col-sm-5">
						<h2 className="font-weight-bolder">Discuss</h2>
					</div>
					<div className="col-2 col-sm-1">
						<img
							className="d-none d-sm-block"
							style={{ width: "40px" }}
							src={processLine}
							alt="process"
						/>
						<img
							className="d-block d-sm-none"
							style={{ width: "40px" }}
							src={uiProcessMobile}
							alt="process"
						/>
					</div>
					<div className="col-7 col-sm-6">
						<h4 className="upperLine">
							We'll be talking. A lot. Listening even more. You see, for us it's
							crucial to understand how you see your brand and how you want
							people to see it. If you don't understand yet how that should
							sound, we'll help you find your voice, your message and the best
							way of telling the world about it – your brand. Our professional
							team is ready to listen to your vision and turn that into reality.
						</h4>
					</div>
					{/* 1 PROCESS END */}

					{/* 2 PROCESS START */}
					<div className="col-3 col-sm-5">
						<h2 className="font-weight-bolder">Research</h2>
					</div>
					<div className="col-2 col-sm-1">
						<img
							className="d-none d-sm-block"
							style={{ width: "40px" }}
							src={processLine}
							alt="process"
						/>
						<img
							className="d-block d-sm-none"
							style={{ width: "40px" }}
							src={uiProcessMobile}
							alt="process"
						/>
					</div>
					<div className="col-7 col-sm-6">
						<h4 className="upperLine">
							Why is this stage so important? Because what you think or what we
							think about a product does not always conform to how customers
							think. We’ll use market research and competitor and audience
							analysis to provide a design that is both intuitive and user
							friendly.
						</h4>
					</div>
					{/* 2 PROCESS END */}

					{/* 3 PROCESS START */}
					<div className="col-3 col-sm-5">
						<h2
							style={{ wordBreak: "break-word" }}
							className="font-weight-bolder"
						>
							Wireframes & Prototype
						</h2>
					</div>
					<div className="col-2 col-sm-1">
						<img
							className="d-none d-sm-block"
							style={{ width: "40px" }}
							src={processLine}
							alt="process"
						/>
						<img
							className="d-block d-sm-none"
							style={{ width: "40px" }}
							src={uiProcessMobile}
							alt="process"
						/>
					</div>
					<div className="col-7 col-sm-6">
						<h4 className="upperLine">
							With the design in mind, our design time begins by putting
							together wireframes and prototypes of your vision. We involve our
							developers at this stage to give them an advance look at the
							project with an eye toward technical aspects of the design. Our
							objective: to make your concept reality. We work out a series of
							approaches that capture your vision and are time and resource
							conscious.
						</h4>
					</div>
					{/* 3 PROCESS END */}

					{/* 4 PROCESS START */}
					<div className="col-3 col-sm-5">
						<h2 className="font-weight-bolder">Design Process</h2>
					</div>
					<div className="col-2 col-sm-1">
						<img
							className="d-none d-sm-block"
							style={{ width: "40px" }}
							src={processLine}
							alt="process"
						/>
						<img
							className="d-block d-sm-none"
							style={{ width: "40px" }}
							src={uiProcessMobile}
							alt="process"
						/>
					</div>
					<div className="col-7 col-sm-6">
						<h4 className="upperLine">
							We’re now ready to enter the painstaking process of bringing the
							selected designs to life. A winning design must balance style and
							function – and we are committed to finding that balance in the
							finished product.
						</h4>
					</div>
					{/* 4 PROCESS END */}

					{/* 5 PROCESS START */}
					<div className="col-3 col-sm-5">
						<h2 className="font-weight-bolder">Testing</h2>
					</div>
					<div className="col-2 col-sm-1">
						<img
							className="d-none d-sm-block"
							style={{ width: "40px" }}
							src={processDot}
							alt="process"
						/>
						<img
							className="d-block d-sm-none"
							style={{ width: "40px" }}
							src={uiProcessDotMobile}
							alt="process"
						/>
					</div>
					<div className="col-7 col-sm-6">
						<h4 className="upperLine">
							In our early-stage testing we employ design wireframes to help
							identify any potential design flaws. Prior to launch, our Q&A team
							performs a final comprehensive test to insure positive user
							experience.
						</h4>
					</div>
					{/* 5 PROCESS END */}
				</div>
			</div>
		</div>
	);
};

export default UiUxProcess;
