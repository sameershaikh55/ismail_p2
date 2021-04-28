import React from "react";
import attachment from "../assets/attachment.svg";
import submit from "../assets/submit.svg";
import qoutes from "../assets/qoutes.svg";
import placeholder from "../assets/placeHolderImg.svg";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import location from "../assets/location.svg";

const ContactUs = () => {
	return (
		<div className="contactUs_container">
			<div className="contactUs_innerContainer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-7">
							<h1 className="text-center mb-3">
								<span className="themeText">CONTACT</span> US
							</h1>
							<h6 className="text-center w-75 m-auto text-secondary h5">
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
							<div className="d-flex justify-content-center align-items-center mt-5 imgContainer1">
								<img src={attachment} alt="attachment" />
								<div className="h2 ml-3">Add an Attachment</div>
							</div>
							<div className="d-flex justify-content-center align-items-center mt-5">
								<input type="checkbox" id="news" className="mt-n2" />
								<label className="ml-3 h5" htmlFor="news">
									I want to receive news and updates once in a while
								</label>
							</div>
							<div className="d-flex justify-content-center mt-4 imgContainer2">
								<button className="themeBtn d-flex justify-content-center align-items-center">
									SUBMIT <img className="ml-3" src={submit} alt="submit" />
								</button>
							</div>
						</div>
						<div className="col-5">
							<div className="rightSide d-flex flex-column justify-content-center align-items-center text-center w-75 m-auto">
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
