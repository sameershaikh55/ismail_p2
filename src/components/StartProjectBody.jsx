import React from "react";
import attachment from "../assets/attachment.svg";
import submit from "../assets/submit.svg";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import location from "../assets/location.svg";
import startProject from "../assets/startAProject.svg";

const StartProjectBody = () => {
	return (
		<>
			<div className="startAProjectBody_container">
				<div className="container-fluid">
					<div className="row">
						<div className="pl-auto pl-md-5 mt-5 mt-md-0 col-12 col-sm-10 col-md-7 mx-auto mb-5 mb-md-0 align-self-center">
							<h1 className="mb-3">
								<span className="themeText">Let's Start</span> A Project
								Together
							</h1>
							<h6 className="text-secondary h5">
								We Make All Your Dreams Come True
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
									rows="4"
									placeholder="Message"
								></textarea>
							</div>
							<div className="d-flex justify-content-between w-75 mt-3">
								<div className="d-flex align-items-center">
									<img src={message} alt="message" />
									<a className="ml-2" href="info@gmail.com">
										info@gmail.com
									</a>
								</div>
								<div className="d-flex align-items-center">
									<img src={phone} alt="phone" />
									<a className="ml-2" href="877596621">
										877596621
									</a>
								</div>
								<div className="d-flex align-items-center">
									<img src={location} alt="location" />
									<a className="ml-2" href="36 johar townn">
										36 johar townn
									</a>
								</div>
							</div>
							<div className="d-flex justify-content-start align-items-center mt-5 imgContainer1">
								<img src={attachment} alt="attachment" />
								<div className="h2 ml-3">Add an Attachment</div>
							</div>
							<div className="d-flex justify-content-start align-items-center mt-5">
								<input type="checkbox" id="news" className="mt-n2" />
								<label className="ml-3 h5" htmlFor="news">
									I want to receive news and updates once in a while
								</label>
							</div>
							<div className="d-flex justify-content-start mt-4 imgContainer2">
								<button className="themeBtn d-flex justify-content-center align-items-center">
									SUBMIT <img className="ml-3" src={submit} alt="submit" />
								</button>
							</div>
						</div>
						<div className="col-12 col-md-5 pr-2 pr-md-0 pl-2 pl-md-5">
							<div className="imageContainer">
								<img src={startProject} alt="start a project" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StartProjectBody;
