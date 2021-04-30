import React from "react";
import image from "../assets/ceoImage.svg";

const CeoSection = () => {
	return (
		<div className="ceoSection_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-8 col-sm-5 col-md-4 mx-auto">
						<img style={{ width: "100%" }} src={image} alt="ceo" />
					</div>
					<div className="col-12 col-sm-9 mx-auto text-center">
						<br />
						<br />
						<br />
						<h3 className="themeText">CEO</h3>
						<br />
						<h4 className="text-secondary">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum hmy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five centuries, but
							also the leap into electronic typesetting, remaining essentially
							unchanged.
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CeoSection;
