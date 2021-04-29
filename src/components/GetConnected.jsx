import React from "react";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import linkdin from "../assets/linkdin.svg";
import skype from "../assets/skype.svg";

const GetConnected = () => {
	return (
		<div className="getConnected_container d-flex justify-content-center align-items-center mx-auto">
			<h1 className="pl-5 pr-3 pr-sm-5 py-2">GET CONNECTED</h1>
			<div className="ml-3 ml-sm-5 mt-n1 py-2 imgContainer">
				<img src={fb} alt="facebook" />
				<img src={insta} alt="instagram" className="ml-3" />
				<img src={linkdin} alt="linkdin" className="ml-3" />
				<img src={skype} alt="skype" className="ml-3" />
			</div>
		</div>
	);
};

export default GetConnected;
