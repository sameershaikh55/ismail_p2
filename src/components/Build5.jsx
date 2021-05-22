import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { build5Func } from "../redux/actions";

const Build5 = ({ build5Func, build5 }) => {
	useEffect(() => {
		build5Func();
	}, [build5Func]);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
	};
	return (
		<div className="build2_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-5 order-2 order-md-1 text-center text-md-left mt-5 mt-md-0 align-self-center">
						<h1 className=" mt-5 mt-md-0">
							<span className="themeText display-4">WE Can</span> Build
						</h1>
						<h3 className="mt-4 mx-auto">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum hmy text ever since th into electronic
							typesetting, remaining essentially unchanged.
						</h3>
						<button className="themeBtn2 mt-5 h2">LETS START</button>
					</div>
					<div className="col-12 col-md-7 order-1 order-md-2 mb-5 mb-md-0">
						<Slider {...settings}>
							{build5.map((prev, i) => {
								const { title, desc, img, bgColor } = prev;
								return (
									<div
										key={i}
										className={`build2_body d-flex align-items-center ${bgColor}`}
									>
										<div>
											<h1 className="font-weight-bold">{title}</h1>
											<h4>{desc}</h4>
										</div>
										<div>
											<img style={{ width: "100%" }} src={img} alt={title} />
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

const mapStatetoProps = (state) => {
	return {
		build5: state.Reducer.build5,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		build5Func: function () {
			dispatch(build5Func());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Build5);
