import React from "react";
import placeholder from "../assets/placeholder2.svg";

const WhoWeAre = () => {
	return (
		<div className="whoWeAre_container">
			<div className="container-fluid text-center">
				<h1 className="text-center mb-4 display-4">
					<span className="themeText">WHO WE</span> ARE
				</h1>
				<h6 className="row text-center text-secondary">
					<div className="col-11 col-sm-10 col-md-8 m-auto">
						LozpData is the Software Development company leading the world’s
						enterprises, startups, and technology challenges. We help businesses
						elevate their value through custom software development, product
						design, QA, and consultancy services.
					</div>
				</h6>
				<br />
				<br />
				<div className="imageContainer">
					<div className="d-flex justify-content-between px-5 px-md-0 my-5">
						<img src={placeholder} alt="placeholder" />
						<img src={placeholder} alt="placeholder" />
						<img
							src={placeholder}
							alt="placeholder"
							className="d-none d-sm-block"
						/>
						<img
							src={placeholder}
							alt="placeholder"
							className="d-none d-sm-block"
						/>
					</div>
					<div className="d-flex justify-content-between px-5 px-md-0 my-5">
						<img src={placeholder} alt="placeholder" />
						<img src={placeholder} alt="placeholder" />
						<img
							src={placeholder}
							alt="placeholder"
							className="d-none d-sm-block"
						/>
						<img
							src={placeholder}
							alt="placeholder"
							className="d-none d-sm-block"
						/>
					</div>
				</div>
				<br />
				<br />
				<button className="themeBtn mt-3">lets talk</button>
			</div>
		</div>
	);
};

export default WhoWeAre;
