import React from "react";
import solution1 from "../assets/solution1.svg";
import solution2 from "../assets/solution2.svg";

const ChallengeAndSol = () => {
	return (
		<div className="challengeAndSolution_container">
			<div className="container-fluid">
				<div className="row">
					<div className="ESpace col-12 col-sm-10 col-md-6 mx-auto text-center align-self-center">
						<img style={{ width: "30%" }} src={solution1} alt="solution" />
					</div>
					<div className="ESpace col-12 col-sm-8 col-md-6 text-center text-md-left mx-auto align-self-center mt-5 mt-md-0">
						<h1 className="display-4">The challenge</h1>
						<h5>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.Lorem Ipsum is
							simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled
							it to make a type specimen book.
						</h5>
					</div>

					<div className="col-12 col-sm-8 col-md-6 order-2 order-md-1 text-center text-md-left mx-auto align-self-center mt-5 mt-md-0">
						<h1 className="display-4">The solution</h1>
						<h5>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.Lorem Ipsum is
							simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled
							it to make a type specimen book.
						</h5>
					</div>
					<div className="col-12 col-sm-10 col-md-6 order-1 order-md-2 mx-auto text-center align-self-center mt-5 mt-md-0">
						<img style={{ width: "30%" }} src={solution2} alt="solution" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChallengeAndSol;
