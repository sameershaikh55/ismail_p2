import React, { useEffect } from "react";
import { connect } from "react-redux";
import { statesFunc } from "../redux/actions";
import img from "../assets/verticalDivider.svg";

const AboutStates = ({ states, statesFunc }) => {
	useEffect(() => {
		statesFunc();
	}, [statesFunc]);

	return (
		<div className="aboutStates_container">
			<div className="container-fluid">
				<div className="row">
					{states.map((prev, i) => {
						return (
							<>
								<div
									key={i}
									className="aboutEachState col-3 py-5 text-white text-center"
								>
									<div className="h1 font-weight-bold"> {prev.numbers} </div>
									<div className="h4">{prev.title}</div>
								</div>
								{prev.title !== "talented lozpdata" && (
									<div
										style={{
											width: "1px",
											height: "118px",
											background: "white",
										}}
									></div>
								)}
							</>
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
export default connect(mapStatetoProps, mapDispatchtoProps)(AboutStates);
