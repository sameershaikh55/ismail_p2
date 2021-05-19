import React from "react";
import branding from "../assets/branding.svg";
import branding2 from "../assets/brandingRes.svg";
import { GoPrimitiveDot } from "react-icons/go";

const Branding = () => {
	return (
		<div className="branding_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-7 col-lg-8">
						<h1 className="themeText font-weight-bold display-4">Branding</h1>
						<h4 className="col-11 col-md-8 px-md-0">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
						<br />
						<div className="col-10 col-sm-8 mx-auto d-block d-md-none">
							<img style={{ width: "100%" }} src={branding2} alt="branding" />
						</div>
						<br />
						<h1 className="themeText mt-2 display-4">
							Considering launching a new product?
						</h1>
						<h4>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</h4>
						<h1 className="themeText mt-5 display-4">
							Is your current brand not engaging your audience the way you'd
							like?
						</h1>
						<h4>
							Rebranding can shape a new identity among users and attract new
							market share.
						</h4>
						<div className="w-75 mx-0 mx-md-auto mt-4">
							<h3>
								<GoPrimitiveDot color="#2365b1" /> visual identity
							</h3>
							<h3>
								<GoPrimitiveDot color="#2365b1" /> brand strategy
							</h3>
							<h3>
								<GoPrimitiveDot color="#2365b1" /> logo design
							</h3>
						</div>
					</div>
					<div className="d-none d-md-block col-md-5 col-lg-4 align-self-center">
						<img style={{ width: "100%" }} src={branding} alt="branding" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Branding;
