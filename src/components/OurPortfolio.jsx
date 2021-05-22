import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { portfolioFunc } from "../redux/actions";

const OurPortfolio = ({ portfolioFunc, portfolio }) => {
	useEffect(() => {
		portfolioFunc();
	}, [portfolioFunc]);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false,
				},
			},
		],
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
					<h2 className="col-12 text-center lightColor">CLIENT: ABC</h2>
					<br />
					<br />
					<br />
					<h5 className="col-12 col-sm-10 mx-auto text-center h3 lightColor">
						Rest Client testimonials can be taken <br /> from Upwork accounts
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
