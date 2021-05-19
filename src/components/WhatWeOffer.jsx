import React, { useEffect } from "react";
import { whatWeOfferFunc } from "../redux/actions";
import CoolTabs from "react-cool-tabs";
import { connect } from "react-redux";

function Content1({ whatWeOfferIS }) {
	return (
		<div className="row">
			{whatWeOfferIS[0] &&
				whatWeOfferIS[0].first.map((prev, i) => {
					return (
						<div className="col-4 mt-5 text-center" key={i}>
							<img
								style={{ width: "26%", height: "70px" }}
								src={prev.image}
								alt="offers"
							/>
							<h6 className="mt-3 h5 mx-auto font-weight-bold">{prev.name}</h6>
						</div>
					);
				})}
		</div>
	);
}
function Content2({ whatWeOfferIS }) {
	return (
		<div className="row">
			{whatWeOfferIS[0] &&
				whatWeOfferIS[0].second.map((prev, i) => {
					return (
						<div className="col-4 mt-5 text-center" key={i}>
							<img
								style={{ width: "26%", height: "70px" }}
								src={prev.image}
								alt="offers"
							/>
							<h6 className="mt-3 h5 w-75 m-auto font-weight-bold">
								{prev.name}
							</h6>
						</div>
					);
				})}
		</div>
	);
}

const WhatWeOffer = ({ whatWeOfferIS, whatWeOfferFunc }) => {
	useEffect(() => {
		whatWeOfferFunc();
	}, [whatWeOfferFunc]);

	return (
		<div className="whoWeOffer_container">
			<div className="container-fluid">
				<h1 className="text-center mb-4">
					<span className="themeText">WHAT WE</span> OFFER
				</h1>
			</div>
			<div className="d-flex justify-content-center">
				<CoolTabs
					tabKey={"1"}
					style={{ width: 650, height: 270, background: "transparent" }}
					activeTabStyle={{ background: "transparent", color: "#2365b1" }}
					unActiveTabStyle={{ background: "transparent", color: "black" }}
					activeLeftTabBorderBottomStyle={{
						background: "#2365b1",
						height: 4,
					}}
					activeRightTabBorderBottomStyle={{
						background: "#2365b1",
						height: 4,
					}}
					tabsBorderBottomStyle={{ background: "#ccc", height: 4 }}
					tabsHeaderStyle={{
						width: "240px",
						margin: "auto",
						fontSize: "1.7rem",
						paddingBottom: "0rem",
					}}
					leftContentStyle={{ background: "transparent" }}
					rightContentStyle={{ background: "transparent" }}
					leftTabTitle={"Services"}
					rightTabTitle={"Industries"}
					leftContent={<Content1 whatWeOfferIS={whatWeOfferIS} />}
					rightContent={<Content2 whatWeOfferIS={whatWeOfferIS} />}
					contentTransitionStyle={"transform 0.6s ease-in"}
					borderTransitionStyle={"all 0.6s ease-in"}
				/>
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		whatWeOfferIS: state.Reducer.whatWeOfferIS,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		whatWeOfferFunc: function () {
			dispatch(whatWeOfferFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(WhatWeOffer);
