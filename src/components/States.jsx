import React, { useEffect } from "react";
import { connect } from "react-redux";
import { statesFunc } from "../redux/actions";

const States = ({ states, statesFunc }) => {
	useEffect(() => {
		statesFunc();
	}, [statesFunc]);
	return (
		<div className="states_container">
			<div className="container-fluid">
				<div className="d-flex justify-content-center justify-content-lg-between flex-wrap">
					{states.map((prev, i) => {
						return (
							<div key={i} className="states_card">
								<div> {prev.numbers} </div>
								<div> {prev.title} </div>
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
		states: state.Reducer.states,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		statesFunc: function () {
			dispatch(statesFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(States);
