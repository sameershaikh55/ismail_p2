import React, { useEffect } from "react";
import { connect } from "react-redux";
import { weOfferingFunc } from "../redux/actions";

const WeOffering = ({ weOfferingFunc, weOffer }) => {
	useEffect(() => {
		weOfferingFunc();
	}, [weOfferingFunc]);
	return (
		<div className="UIUXSection_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="font-weight-bold text-center col-11 col-sm-9 col-md-8 mx-auto">
						<span className="themeText">WE</span> OFFERING
					</h1>
					<h5 className="col-11 col-sm-9 col-md-8 mx-auto text-center">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</h5>
				</div>
				<br />
				<div className="row mt-5">
					{weOffer.map((prev, i) => {
						return (
							<div
								key={i}
								className="col-11 col-sm-9 col-md-6 col-lg-4 mx-auto my-4"
							>
								<h4 className="grid_sideLine pl-4 themeText">{prev.title}</h4>
								<h5 className="pl-4">{prev.desc}</h5>
							</div>
						);
					})}
				</div>
				<br />
				<br />
				<br />
				<div className="text-center">
					<button className="themeBtn">START PROJECT</button>
				</div>
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		weOffer: state.Reducer.weOffer,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		weOfferingFunc: function () {
			dispatch(weOfferingFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(WeOffering);
