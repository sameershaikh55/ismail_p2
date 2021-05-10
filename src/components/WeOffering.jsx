import React, { useEffect } from "react";
import { connect } from "react-redux";
import { weOfferingFunc } from "../redux/actions";
import education1 from "../assets/education1.svg";

const WeOffering = ({ weOfferingFunc, weOffer, education }) => {
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
					<div className="col-12 d-block d-md-none text-center my-5 my-md-0">
						<img style={{ width: "80%" }} src={education1} alt="education1" />
					</div>
				</div>
				<br />
				{education ? (
					<div className="row mt-5">
						<div className="col-11 col-sm-10 col-md-8 mx-auto align-self-center">
							<h4 className="grid_sideLine themeText pl-4">
								Learning management systems for educational institutions of
								various sizes
							</h4>
							<br />
							<h4 className="grid_sideLine themeText pl-4">
								Interactive games for students falling into younger age-groups
							</h4>
							<br />
							<h4 className="grid_sideLine themeText pl-4">
								Informative yet interesting applications for older students
							</h4>
							<br />
							<h4 className="grid_sideLine themeText pl-4">
								Special systems for digitising traditional academic resources
							</h4>
							<br />
							<h4 className="grid_sideLine themeText pl-4">
								Customised systems designed for distribution of educational
								content deployed on mobile platforms (smartphones and tablets)
							</h4>
							<br />
							<h4 className="grid_sideLine themeText pl-4">
								Customised systems designed for distribution of educational
								content deployed on mobile platforms (smartphones and tablets)
							</h4>
						</div>
						<div className="col-4 d-none d-md-block text-center">
							<img style={{ width: "80%" }} src={education1} alt="education1" />
						</div>
					</div>
				) : (
					<>
						<div className="row mt-5">
							{weOffer.map((prev, i) => {
								return (
									<div
										key={i}
										className="col-11 col-sm-9 col-md-6 col-lg-4 mx-auto my-4"
									>
										<h4 className="grid_sideLine pl-4 themeText">
											{prev.title}
										</h4>
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
					</>
				)}
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
