import React from "react";
// import { FaGreaterThan } from "react-icons/fa";
import telegram from "../assets/telegram.svg";
import search from "../assets/search.svg";
import submit from "../assets/submit.svg";

const TwoCards = () => {
	return (
		<div className="twoCards_container">
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-8 col-md-5 mb-3 mb-md-0 text-center">
						<div className="each_card p-5">
							<div className="d-flex justify-content-between align-items-center w-100">
								<div className="imgContainer">
									<img src={telegram} alt="telegram" />
								</div>
								<div className="w-75 text-left ml-1">
									<h2
										style={{
											fontFamily: "'Playfair Display', serif",
										}}
										className="h3 font-weight-bold"
									>
										Ready to get started?
									</h2>
									<h6 className="text-secondary h5">
									We help build and manage a team of world-class developers to bring your vision to life.
									</h6>
								</div>
							</div>
							<button className="themeBtn2 mt-4">lets talk</button>
						</div>
					</div>
					<div className="col-12 col-sm-8 col-md-5 mt-4 mt-md-0 text-center">
						<div className="each_card p-5">
							<div className="d-flex justify-content-between align-items-center w-100">
								<div className="imgContainer">
									<img src={search} alt="search" />
								</div>
								<div className="w-75 text-left ml-1">
									<h2
										style={{
											fontFamily: "'Playfair Display', serif",
										}}
										className="h3 font-weight-bold"
									>
										DIARIES
									</h2>
									<h6 className="text-secondary h5">
									Find out further information here!
									</h6>
								</div>
							</div>
							<button className="themeBtn2 mt-4 bg-danger">
								lets talk{" "}
								<img
									style={{ width: "15%" }}
									className="ml-3"
									src={submit}
									alt="submit"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TwoCards;
