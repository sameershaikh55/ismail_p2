import React from "react";

const CustomDesign = ({ img }) => {
	return (
		<div className="customDesign_container">
			<div className="container-fluid">
				<h1 className="text-center themeText mb-5 display-4">
					A SECURE CUSTOME DESIGN
				</h1>
				<div className="row">
					<div className="col-12 col-md-10 mx-auto">
						<div className="row">
							<div className="col-10 col-sm-6 mx-auto order-2 order-sm-1 mt-5 mt-sm-0 align-self-center">
								<h1 className="themeText display-4">About the Product</h1>
								<h4 className="lightColor mt-4">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Maiores, suscipit exercitationem molestiae consequatur iure
									qui quia adipisci sed dolorem voluptatem excepturi corrupti
									saepe perferendis. adipisci sed dolorem voluptatem excepturi
									corrupti saepe perferendis.
								</h4>
							</div>
							<div className="col-10 col-sm-6 mx-auto order-1 order-sm-2">
								<img style={{ width: "100%" }} src={img} alt="travelAgency" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomDesign;
