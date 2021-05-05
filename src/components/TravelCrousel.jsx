import React from "react";
import travelAgencyC from "../assets/travelAgencyC.svg";
import travelAgencyC1 from "../assets/travelAgencyC1.svg";
import Slider from "react-slick";

const TravelCrousel = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
	};
	const data = [travelAgencyC, travelAgencyC1];
	return (
		<div style={{ background: "#2365B1" }} className="container-fluid">
			<div className="travelCrousel">
				<div className="row">
					<div className="col-12">
						<Slider {...settings}>
							{data.map((prev) => {
								return (
									<div className="travelCBody d-flex justify-content-between align-items-center">
										<div>
											<img style={{ width: "100%" }} src={prev} alt="travel" />
										</div>
										<div className="col-6 text-center text-white">
											<h1 className="mb-4">Travel Agency</h1>
											<h5>
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												typesetting industry. Lorem Ipsum has been the
												typesetting industry. Lorem Ipsum has been the
											</h5>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelCrousel;
