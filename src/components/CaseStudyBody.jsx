import React, { useEffect } from "react";
import { connect } from "react-redux";
import { caseStudyFunc } from "../redux/actions";

const CaseStudyBody = ({ caseStudyFunc, caseStudy }) => {
	useEffect(() => {
		caseStudyFunc();
	}, [caseStudyFunc]);

	return (
		<>
			{caseStudy.map((prev, i) => {
				const { img, bgColor, desc, title } = prev;
				return (
					<div key={i} style={{ background: bgColor }}>
						<div className="caseStudyBodyInner_container px-5 my-0">
							<div className="container-fluid py-5">
								<div className="row">
									<div className="col-11 col-sm-10 col-md-6 order-2 order-lg-1 mx-auto align-self-center grid_sideLine pl-5">
										<h1 className="font-weight-bolder"> {title} </h1>
										<h4>{desc}</h4>
										<br />
										<button className="themeBtn2">VIEW CASE STUDY</button>
									</div>
									<div className="col-10 col-sm-8 mx-auto col-md-6 order-1 order-lg-2">
										<img style={{ width: "100%" }} src={img} alt={title} />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		caseStudy: state.Reducer.caseStudy,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		caseStudyFunc: function () {
			dispatch(caseStudyFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(CaseStudyBody);
