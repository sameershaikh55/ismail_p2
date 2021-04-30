import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { portfolioFunc } from "../redux/actions";

const OurPortfolio = ({ portfolioFunc, portfolio }) => {
	useEffect(() => {
		portfolioFunc();
	}, []);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};
	return (
		<div className="ourPortfolio_container">
			<div className="container-fluid">
				<div>
					<h1 className="text-center">OUR PORTFOLIO</h1>
				</div>
				<div className="row mt-5">
					<div className="col-10 col-sm-8 col-md-6 mx-auto">
						<Slider {...settings}>
							{portfolio.map((prev, i) => {
								return (
									<div key={i}>
										<img
											className="mx-auto"
											style={{ width: "100%" }}
											src={prev}
											alt="img"
										/>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="row">
					<h2 className="col-12 text-center">CLIENT: ABC</h2>
					<h5 className="col-12 col-sm-10 mx-auto text-center">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum hmy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged.
					</h5>
				</div>
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		portfolio: state.Reducer.portfolio,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		portfolioFunc: function () {
			dispatch(portfolioFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(OurPortfolio);
