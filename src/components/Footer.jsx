import React from "react";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import linkdin from "../assets/linkdin.svg";
import skype from "../assets/skype.svg";
import logoDark from "../assets/logoDark.png";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";

const Footer = () => {
	return (
		<div className="footer_container">
			<div className="d-flex justify-content-center align-items-center">
				<div className="imgContainer pr-5 py-2">
					<img src={logoDark} alt="logo" />
				</div>
				<div className="ml-5 mt-n1 py-2 imgContainer2">
					<img src={fb} alt="facebook" />
					<img src={insta} alt="instagram" className="ml-3" />
					<img src={linkdin} alt="linkdin" className="ml-3" />
					<img src={skype} alt="skype" className="ml-3" />
				</div>
			</div>
			<div className="d-flex justify-content-around w-50 mt-4 mx-auto align-items-center">
				<div className="d-flex align-items-center">
					<img src={message} alt="message" />
					<a className="ml-2 text-dark h5" href="info@gmail.com">
						info@gmail.com
					</a>
				</div>
				<div className="d-flex align-items-center ml-n5">
					<img src={phone} alt="phone" />
					<a className="ml-2 text-dark h5" href="877596621">
						877596621
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
