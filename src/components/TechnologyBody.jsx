import React from "react";
import apple from "../assets/appleDark.svg";
import android from "../assets/androidDark.svg";
import reactNative from "../assets/reactNative.svg";
import flutter from "../assets/flutter.svg";
import ionic from "../assets/ionic.svg";
import swift from "../assets/swift.svg";
import kotlin from "../assets/kotlin.svg";
import objectiveC from "../assets/objectiveC.svg";

const TechnologyBody = ({ fontEnd, database, backEnd, cms }) => {
	const fullWidth = {
		width: "40%",
		marginBottom: "1rem",
	};
	return (
		<div className="row justify-content-center align-items-center">
			{!database && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={apple} alt="apple" />
						<h4>IOS</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={android} alt="android" />
						<h4>Android</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={reactNative} alt="reactNative" />
						<h4>React Native</h4>
					</div>
				</>
			)}
			{!fontEnd && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={flutter} alt="flutter" />
						<h4>Flutter</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img
							style={{ width: "55%", marginBottom: "0.6rem" }}
							src={ionic}
							alt="ionic"
						/>
						<h4>Ionic</h4>
					</div>
				</>
			)}
			{!backEnd && (
				<div className="col-3 col-sm-2 text-center mt-5">
					<img
						style={{ width: "55%", marginBottom: "0.6rem" }}
						src={swift}
						alt="swift"
					/>
					<h4>Swift</h4>
				</div>
			)}
			{!cms && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={kotlin} alt="kotlin" />
						<h4>Kotlin</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img
							style={{ width: "50%", marginBottom: "0.6rem" }}
							src={objectiveC}
							alt="objectiveC"
						/>
						<h4>ObjectiveC</h4>
					</div>
				</>
			)}
		</div>
	);
};

export default TechnologyBody;
