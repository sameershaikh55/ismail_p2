import React from "react";
import build1 from "../assets/build1.svg";
import singleMob from "../assets/singleMobile.svg";

const Delivered = () => {
	return (
		<div className="delivered_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="col-12 text-center">WHAT WE DEILIVERED</h1>
					<h4 className="col-12 col-sm-11 col-md-10 mx-auto mt-3 mb-5 text-center">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</h4>
				</div>
				<div className="col-12 col-sm-10 mx-auto">
					<div className="row my-5">
						<div className="col-9 col-sm-7 col-md-4 mx-auto mb-5 mb-md-0">
							<img style={{ width: "100%" }} src={build1} alt="build" />
						</div>
						<div className="col-12 col-sm-8 col-md-6 mb-5 mx-auto mb-md-0 align-self-center text-left py-3 pl-5">
							<h1 className="themeText">Create PO</h1>
							<h5 className="text-secondary">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
								sapiente iure quam nostrum reprehenderit corporis dolores eum
								impedit illo, in ratione cumque veritatis, magni nobis deserunt
								ab explicabo dolorum! Aut?
							</h5>
						</div>
						<div className="col-12 col-sm-8 col-md-6 mb-5 mx-auto mb-md-0 order-4 order-md-3 align-self-center text-left py-3 pl-5">
							<h1 className="themeText">Home</h1>
							<h5 className="text-secondary">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
								sapiente iure quam nostrum reprehenderit corporis dolores eum
								impedit illo, in ratione cumque veritatis, magni nobis deserunt
								ab explicabo dolorum! Aut?
							</h5>
						</div>
						<div className="col-8 col-sm-6 col-md-3 order-3 order-md-4 mx-auto mb-5 mb-md-0">
							<img style={{ width: "100%" }} src={singleMob} alt="build" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delivered;
