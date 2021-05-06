import React from "react";
import attachment from "../assets/attachment.svg";
import submit from "../assets/submit.svg";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import location from "../assets/location.svg";
import startProject from "../assets/startAProject.png";
import qoutes from "../assets/qoutes.svg";
import placeholder from "../assets/placeHolderImg.svg";

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
							<div className="d-flex justify-content-around mt-3">
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
							<div className="d-flex justify-content-center justify-content-md-start align-items-center mt-5 imgContainer1">
								<img src={attachment} alt="attachment" />
								<div className="h2 ml-3">Add an Attachment</div>
							</div>
							<div className="d-flex justify-content-center justify-content-md-start align-items-center mt-5">
								<input type="checkbox" id="news" className="mt-n2" />
								<label className="ml-3 h5" htmlFor="news">
									I want to receive news and updates once in a while
								</label>
							</div>
							<div className="d-flex justify-content-center justify-content-md-start mt-4 imgContainer2">
								<button className="themeBtn d-flex justify-content-center align-items-center">
									SUBMIT <img className="ml-3" src={submit} alt="submit" />
								</button>
							</div>
						</div>
						<div className="col-12 col-md-5 pr-2 pr-md-0 pl-2 pl-md-5 d-none d-md-block">
							<div className="imageContainer">
								<img src={startProject} alt="start a project" />
							</div>
						</div>
						{/* FOR MOBILE VIEW UNDER FORM START */}
						<div className="col-12 col-sm-8 col-md-5 my-5 my-md-0 mx-auto d-block d-md-none">
							<div className="rightSide d-flex flex-column justify-content-center align-items-center text-center m-auto">
								<img src={qoutes} alt="qoutes" />
								<h5 className="text-white w-75 my-5">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
									neque natus libero rerum, corrupti aperiam quam. Omnis quasi
									tempore ratione. Fugit reprehenderit modi soluta ducimus
									corporis quos aperiam quaerat voluptatum.
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
						{/* FOR MOBILE VIEW UNDER FORM END */}
					</div>
				</div>
			</div>
		</>
	);
};

export default StartProjectBody;
