import React from "react";

const CustomDesign = ({ img }) => {
	return (
		<div className="customDesign_container">
			<div className="container-fluid">
				<h1 className="text-center themeText mb-5">A SECURE CUSTOME DESIGN</h1>
				<div className="row">
					<div className="col-10 col-sm-6 mx-auto order-2 order-sm-1 mt-5 mt-sm-0 align-self-center">
						<h1 className="themeText">About the Product</h1>
						<h5>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
							suscipit exercitationem molestiae consequatur iure qui quia
							adipisci sed dolorem voluptatem excepturi corrupti saepe
							perferendis. adipisci sed dolorem voluptatem excepturi corrupti
							saepe perferendis.
						</h5>
					</div>
					<div className="col-10 col-sm-6 mx-auto order-1 order-sm-2">
						<img style={{ width: "100%" }} src={img} alt="travelAgency" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomDesign;
