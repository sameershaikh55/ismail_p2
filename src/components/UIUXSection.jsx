import React, { useEffect } from "react";
import { connect } from "react-redux";
import { uiUxFunc } from "../redux/actions";

const UIUXSection = ({ uiux, uiUxFunc }) => {
	useEffect(() => {
		uiUxFunc();
	}, [uiUxFunc]);
	return (
		<div className="UIUXSection_container">
			<div className="container-fluid">
				<div className="row">
					<h1 className="font-weight-bold themeText col-11 col-sm-9 col-md-8 mx-auto mx-md-0">
						UI / UX
					</h1>
					<h5 className="col-11 col-sm-9 col-md-8 mx-auto mx-md-0">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</h5>
				</div>
				<div className="row mt-5">
					{uiux.map((prev, i) => {
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
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		uiux: state.Reducer.uiux,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		uiUxFunc: function () {
			dispatch(uiUxFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(UIUXSection);
