import React from "react";

const WebDevelopmentSection = ({ heading, image }) => {
	return (
		<div className="webDevelopmentS_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-9 col-md-8 order-2 order-md-1 mb-5 mb-md-0 mt-5 mt-md-0 mx-auto align-self-center text-left py-3 pl-5 my-5">
						<h1 className="font-weight-bold display-4">
							{(heading === "DESIGN AND BRANDING" && "DESIGN AND BRANDING") || (
								<>
									<span className="themeText"> {heading} </span> DEVELOPMENT
								</>
							)}
						</h1>
						<h4
							className={`${
								heading === "DESIGN AND BRANDING" && "grid_sideLine pl-4 mt-3"
							}`}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							sapiente iure quam nostrum reprehenderit corporis dolores eum
							impedit illo, in ratione cumque veritatis, magni nobis deserunt ab
							explicabo dolorum! Aut? sapiente iure quam nostrum reprehenderit
							corporis dolores eum impedit illo, in ratione cumque veritatis,
						</h4>
						<button
							// onClick={() => history.push("/webDevelopment")}
							className="themeBtn mt-5"
						>
							LETS TALK
						</button>
					</div>
					<div className="col-12 col-sm-10 col-md-4 mx-auto order-1 order-md-2">
						<img style={{ width: "100%" }} src={image} alt="build" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebDevelopmentSection;
