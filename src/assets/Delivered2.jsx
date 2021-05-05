import React from "react";
import laptop1 from "../assets/laptop1.svg";
import laptop2 from "../assets/laptop2.svg";
import laptop3 from "../assets/laptop3.svg";

const Delivered2 = () => {
	return (
		<div className="delivered2_container">
			<div className="container-fluid">
				<div className="text-center mt-5 px-2">
					<h1 className="font-weight-bold">WHAT WE DEILIVERED</h1>
					<h4 className="row text-secondary">
						<div className="col-11 col-sm-10 col-md-8 mx-auto">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</div>
					</h4>
				</div>
				<div className="row">
					<div className="col-11 col-md-6 mx-auto align-self-center order-2 order-md-1">
						<h1>Choose an individual tours</h1>
						<h4>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
					<div className="col-12 col-md-6 order-1 order-md-2">
						<img style={{ width: "100%" }} src={laptop1} alt="laptop" />
					</div>

					<div className="col-12 col-md-6 order-4 order-md-3">
						<img style={{ width: "100%" }} src={laptop2} alt="laptop" />
					</div>
					<div className="col-11 col-md-6 mx-auto align-self-center order-4 order-md-3">
						<h1>Our Tours</h1>
						<h4>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>

					<div className="col-11 col-md-6 mx-auto align-self-center order-6 order-md-5">
						<h1>News</h1>
						<h4>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
					</div>
					<div className="col-12 col-md-6 order-5 order-md-6">
						<img style={{ width: "100%" }} src={laptop3} alt="laptop" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delivered2;
