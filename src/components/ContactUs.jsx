import React from "react";
import attachment from "../assets/attachment.svg";
import submit from "../assets/submit.svg";
import qoutes from "../assets/qoutes.svg";
import placeholder from "../assets/placeHolderImg.svg";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import location from "../assets/location.svg";

const ContactUs = ({ uiux }) => {
	return (
		<div className="contactUs_container">
			<div className="contactUs_innerContainer">
				<div className="container-fluid">
					<div className="row">
						<div
							className={`pl-auto pl-sm-5 col-12 ${
								(uiux && "col-md-12") || "col-md-7"
							} mb-5 mb-md-0`}
						>
							<h1
								className={`${
									(uiux && "text-center text-sm-left mx-auto ml-md-0") ||
									"text-center"
								} mb-3 display-4`}
							>
								<span className="themeText">CONTACT</span> US
							</h1>
							<h6
								className={`${
									(uiux && "text-center text-sm-left mx-auto ml-md-0") ||
									"text-center m-auto"
								} w-75 text-secondary h5`}
							>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Maiores repellendus saepe perferendis? Officia dignissimos non,
								iure obcaecati enim architecto sunt? enim architecto sunt?
							</h6>
							<div className="mt-5">
								<div className="d-flex justify-content-between">
									<input
										type="text"
										placeholder="Name"
										className="contactInp w-100"
									/>
									<input
										type="text"
										placeholder="Email"
										className="contactInp w-100 ml-4"
									/>
								</div>
								<br />
								<div className="d-flex justify-content-between">
									<input
										type="text"
										placeholder="Skype"
										className="contactInp w-100"
									/>
									<input
										type="text"
										placeholder="Phone"
										className="contactInp w-100 ml-4"
									/>
								</div>
								<br />
								<textarea
									className="w-100"
									cols="30"
									rows={`${(uiux && "7") || "4"}`}
									placeholder="Message"
								></textarea>
							</div>
							<div className="d-flex justify-content-around mt-3">
								<div className="d-flex align-items-center">
									<img src={message} alt="message" />
									<a
										className="ml-2 h5 mb-0 text-decoration-none"
										href="info@gmail.com"
									>
										info@gmail.com
									</a>
								</div>
								<div className="d-flex align-items-center">
									<img src={phone} alt="phone" />
									<a
										className="ml-2 h5 mb-0 text-decoration-none"
										href="877596621"
									>
										877596621
									</a>
								</div>
								<div className="d-flex align-items-center">
									<img src={location} alt="location" />
									<a
										className="ml-2 h5 mb-0 text-decoration-none"
										href="36 johar townn"
									>
										36 johar townn
									</a>
								</div>
							</div>
							<div
								className={`d-flex ${
									(uiux && "justify-content-center justify-content-md-start") ||
									"justify-content-center"
								} align-items-center mt-5 imgContainer1`}
							>
								<img
									style={{ width: uiux && "4%" }}
									className="pointer"
									src={attachment}
									alt="attachment"
								/>
								<div className="h2 ml-3">Add an Attachment</div>
							</div>
							<div
								className={`d-flex ${
									(uiux && "justify-content-center justify-content-md-start") ||
									"justify-content-center"
								} align-items-center mt-5`}
							>
								<input type="checkbox" id="news" className="mt-n2" />
								<label className="ml-3 h5 font-weight-bold" htmlFor="news">
									I want to receive news and updates once in a while
								</label>
							</div>
							<div
								className={`d-flex ${
									(uiux && "justify-content-center justify-content-md-start") ||
									"justify-content-center"
								} align-items-center mt-5 imgContainer2`}
							>
								<button className="themeBtn d-flex justify-content-center align-items-center">
									SUBMIT <img className="ml-3" src={submit} alt="submit" />
								</button>
							</div>
						</div>
						{!uiux && (
							<div className="col-12 col-md-5 mt-5 mt-md-0">
								<div className="rightSide d-flex flex-column justify-content-center align-items-center text-center m-auto">
									<img src={qoutes} alt="qoutes" />
									<h5 className="text-white my-5 px-3">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Sed neque natus libero rerum, corrupti aperiam quam. Omnis
										quasi tempore ratione. Fugit reprehenderit modi soluta
										ducimus corporis quos aperiam quaerat voluptatum.
									</h5>
									<div>
										<img
											style={{ width: "75%" }}
											src={placeholder}
											alt="placholder"
										/>
										<h3 className="text-white">Rashid</h3>
										<h5 className="text-white mt-n2">CEO</h5>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
