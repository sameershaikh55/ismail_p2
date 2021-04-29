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
		<>
			<div className="footer_container">
				<div className="d-flex justify-content-center align-items-center">
					<div className="imgContainer ml-5 ml-sm-0 pr-5 py-2">
						<img src={logoDark} alt="logo" />
					</div>
					<div className="ml-5 mt-n1 py-2 imgContainer2">
						<img src={fb} alt="facebook" />
						<img src={insta} alt="instagram" className="ml-3" />
						<img src={linkdin} alt="linkdin" className="ml-3" />
						<img src={skype} alt="skype" className="ml-3" />
					</div>
				</div>
				<div className="d-flex justify-content-center mt-4 mx-auto align-items-center">
					<div className="d-flex align-items-center mr-4">
						<img src={message} alt="message" />
						<a className="ml-2 mt-1 text-dark h5" href="info@gmail.com">
							info@gmail.com
						</a>
					</div>
					<div className="d-flex align-items-center ml-4">
						<img src={phone} alt="phone" />
						<a className="ml-2 mt-1 text-dark h5" href="877596621">
							877596621
						</a>
					</div>
				</div>
			</div>
			<div className="copyWriteLine text-center py-5 px-1 text-white">
				© 2020Lozpdata . All Rights Reserved. Terms Of Use. Privacy Policy.
			</div>
		</>
	);
};

export default Footer;
