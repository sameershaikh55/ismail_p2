import React from "react";
import image from "../assets/ourCreative.png";

const OurCreative = () => {
	const fontSize = {
		fontSize: "4rem",
	};
	return (
		<div className="ourCreative_container">
			{/* UPPER SECTION START */}
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 text-center">
						<h1 className="themeText">
							Our creative heads build{" "}
							<span className="lightColor">beautiful digital products.</span>
						</h1>
						<h5 className="lightColor">
							Software and mobile app development for businesses from across the
							globe.
						</h5>
					</div>
					<div className="col-12 col-sm-10 col-md-8 mx-auto mt-5">
						<img style={{ width: "100%" }} src={image} alt="our_creative" />
					</div>
				</div>
			</div>
			{/* UPPER SECTION END */}

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			{/* LOWER SECTION START */}
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-6 mb-2 mb-sm-0 text-center">
						<h1 style={fontSize}>
							<span className="themeText">OUR</span> APPROCH
						</h1>
						<h5 className="w-75 mx-auto">
							To be the number one choice for businesses when it comes to
							digital product development, design, quality, and innovation.
						</h5>
					</div>
					<div className="col-12 col-sm-6 mt-5 mt-sm-0 text-center">
						<h1 style={fontSize}>
							<span className="themeText">OUR</span> MISSION
						</h1>
						<h5 className="w-75 mx-auto">
							To help businesses become competitive with the power of digital
							innovation, outstanding design, and emerging technologies via
							building intelligent digital products.
						</h5>
					</div>
				</div>
			</div>
			{/* LOWER SECTION END */}
		</div>
	);
};

export default OurCreative;
