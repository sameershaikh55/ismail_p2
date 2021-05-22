import React from "react";
import submit from "../assets/submit.svg";
import { AiOutlineMail, AiOutlinePaperClip } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const StartProjectBody = () => {
	return (
		<>
			<div className="startAProjectBody_container">
				<div className="container-fluid">
					<div className="row">
						<div className="pl-auto pl-md-5 mt-5 mt-md-0 col-12 col-sm-10 col-md-7 mx-auto mb-5 mb-md-0 align-self-center">
							<h1 className="mb-3 text-white display-4">
								Let's Start A Project Together
							</h1>
							<h6 className="text-white h5">
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
							<div className="d-flex justify-content-center justify-content-md-start align-items-center mt-5 imgContainer1">
								<AiOutlinePaperClip
									style={{
										color: "#2365b1",
										padding: "0.5rem",
										fontSize: "3rem",
										borderRadius: "50%",
										background: "#fff",
									}}
								/>
								<div className="h3 ml-3 text-white mb-0">Add an Attachment</div>
							</div>
							<div className="d-flex justify-content-center justify-content-md-start align-items-center mt-5">
								<input type="checkbox" id="news" className="mt-n2" />
								<label className="ml-3 h5 text-white" htmlFor="news">
									I want to receive news and updates once in a while
								</label>
							</div>
							<div className="d-flex justify-content-center justify-content-md-start mt-4 imgContainer2">
								<button className="themeBtn d-flex justify-content-center align-items-center">
									Send <img className="ml-3" src={submit} alt="submit" />
								</button>
							</div>
						</div>
						<div className="col-10 col-sm-6 mx-auto col-md-4 align-self-center startIconsContainer">
							<div className="d-flex align-items-center">
								<AiOutlineMail className="icon" />
								<div className="text-white h3 mb-0 ml-4">info@Lozpdata.com</div>
							</div>
							<div className="d-flex align-items-center mt-5">
								<BiPhoneCall className="icon" />
								<div className="text-white h3 mb-0 ml-4">+923104167558</div>
							</div>
							<div className="d-flex align-items-center mt-5">
								<IoLocationOutline className="icon" />
								<div className="text-white h3 mb-0 ml-4">36 Johar Town</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StartProjectBody;
