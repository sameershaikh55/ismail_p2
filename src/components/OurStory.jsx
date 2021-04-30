import React from "react";
import Image from "../assets/ourStory.svg";

const OurStory = () => {
	return (
		<div className="ourStory_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-7 align-self-center">
						<h1>
							<span className="themeText"> OUR </span> STORIES
						</h1>
						<h5 className="h3 text-secondary">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
							dolores nemo optio facilis error commodi saepe recusandae quisquam
							cupiditate adipisci. Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Eligendi dolores nemo optio facilis error
							adipisicing elit. Eligendi dolores nemo optio facilis error
						</h5>
						<button className="themeBtn2 mt-3">VIEW CASE STUDY</button>
					</div>
					<div className="col-11 col-sm-5 mx-auto mt-5 mt-sm-0">
						<img style={{ width: "100%" }} src={Image} alt="our_story" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurStory;
