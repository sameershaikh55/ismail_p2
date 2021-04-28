import React from "react";
import build1 from "../assets/build1.svg";
import build2 from "../assets/build2.svg";

const Build = () => {
	return (
		<div className="build_container">
			<div className="container-fluid text-center">
				<h1 className="text-center mb-4">
					<span className="themeText">WE LOVE TO</span> BUILD
				</h1>
				<h6 className="text-center m-auto w-50 text-secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam
					explicabo dolor fugit quaerat voluptates optio ipsum suscipit!
					Accusantium, debitis. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ea aliquam explicabo dolor fugit quaerat voluptates
				</h6>
				<div className="build_body row">
					<div className="imgContainer1 col-6">
						<img src={build1} alt="build" />
					</div>
					<div className="grid_sideLine col-6 align-self-center text-left py-3 pl-5 mb-5">
						<h1>
							<span className="themeText">APP</span> DEVELOPMENT
						</h1>
						<h6 className="w-75 text-secondary">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							sapiente iure quam nostrum reprehenderit corporis dolores eum
							impedit illo, in ratione cumque veritatis, magni nobis deserunt ab
							explicabo dolorum! Aut?
						</h6>
						<button className="themeBtn2 mt-3">VIEW CASE STUDY</button>
					</div>
					<div className="grid_sideLine col-6 align-self-center text-left py-3 pl-5 my-5">
						<h1>
							<span className="themeText">WEB</span> DEVELOPMENT
						</h1>
						<h6 className="text-secondary">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							sapiente iure quam nostrum reprehenderit corporis dolores eum
							impedit illo, in ratione cumque veritatis, magni nobis deserunt ab
							explicabo dolorum! Aut?
						</h6>
						<button className="themeBtn2 mt-3">VIEW CASE STUDY</button>
					</div>
					<div className="imgContainer2 col-6">
						<img src={build2} alt="build" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Build;
