import React from "react";
import { useHistory } from "react-router-dom";

const History = () => {
	let history = useHistory();
	return (
		<div className="history_container text-center px-1">
			<h1 className="font-weight-bold">
				<span className="themeText">12 Years</span> Of Building Digital Product
				And We Are Just Getting Started!
			</h1>
			<button
				onClick={() => history.push("/start_A_Project")}
				className="themeBtn mt-4 h5 m-0 py-4"
			>
				start project
			</button>
		</div>
	);
};

export default History;
