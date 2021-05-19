import React from "react";
import dot from "../assets/dot.svg";

const Planning = () => {
	return (
		<div className="planning_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="col-12 text-center display-4">PLANNING</h1>
					<h4 className="col-12 col-sm-10 col-md-8 mx-auto mt-3 mb-2 text-center">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</h4>
				</div>
				<div className="row mt-5">
					<div className="col-9 col-md-4 mx-auto my-5">
						<h2 className="themeText grid_sideLine pl-4">Analysis</h2>
						<h4 className="pl-4 my-4">
							Understanding client’s vision about the apps was critical.
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-2" /> Business Requirements
							Analysis
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-3" />
							Legacy Code evaluations
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-3" />
							Clarifying, understanding and documentingthe scope of work
						</h4>
					</div>
					<div className="col-9 col-md-4 mx-auto my-5">
						<h2 className="themeText grid_sideLine pl-4">Execution</h2>
						<h4 className="pl-4 my-4">
							Understanding client’s vision about the apps was critical.
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-2" /> Business Requirements
							Analysis
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-3" />
							Legacy Code evaluations
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-3" />
							Clarifying, understanding and documentingthe scope of work
						</h4>
					</div>
					<div className="col-9 col-md-4 mx-auto my-5">
						<h2 className="themeText grid_sideLine pl-4">Results</h2>
						<h4 className="pl-4 my-4">
							Understanding client’s vision about the apps was critical.
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-2" /> Business Requirements
							Analysis
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-3" />
							Legacy Code evaluations
						</h4>
						<h4 className="my-3">
							<img src={dot} alt="dot" className="pr-3" />
							Clarifying, understanding and documentingthe scope of work
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Planning;
