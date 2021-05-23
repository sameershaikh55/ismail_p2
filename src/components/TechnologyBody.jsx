import React from "react";
import apple from "../assets/appleDark.svg";
import android from "../assets/androidDark.svg";
import reactNative from "../assets/reactNative.svg";
import flutter from "../assets/flutter.svg";
import ionic from "../assets/ionic.svg";
import swift from "../assets/swift.svg";
import kotlin from "../assets/kotlin.svg";
import objectiveC from "../assets/objectiveC.svg";
import frontend1 from "../assets/frontend/Page-1.svg";
import frontend2 from "../assets/frontend/Page-2.svg";
import frontend3 from "../assets/frontend/Page-3.svg";
import frontend4 from "../assets/frontend/Page-4.svg";
import frontend5 from "../assets/frontend/Page-5.svg";
import frontend6 from "../assets/frontend/Page-6.svg";
import database1 from "../assets/database/Page-1.svg";
import database2 from "../assets/database/Page-2.svg";
import database3 from "../assets/database/Page-3.svg";
import database4 from "../assets/database/Page-4.svg";
import database5 from "../assets/database/Page-5.svg";
import database6 from "../assets/database/Page-6.svg";
import backend1 from "../assets/backend/Page-1.svg";
import backend2 from "../assets/backend/Page-2.svg";
import backend3 from "../assets/backend/Page-3.svg";
import cms1 from "../assets/cms/Page-1.svg";
import cms2 from "../assets/cms/Page-2.svg";
import cms3 from "../assets/cms/Page-3.svg";
import infra1 from "../assets/infra_and/Page-1.svg";
import infra2 from "../assets/infra_and/Page-2.svg";
import infra3 from "../assets/infra_and/Page-3.svg";
import infra4 from "../assets/infra_and/Page-4.svg";
import infra5 from "../assets/infra_and/Page-5.svg";
import infra6 from "../assets/infra_and/Page-6.svg";
import infra7 from "../assets/infra_and/Page-7.svg";
import infra8 from "../assets/infra_and/Page-8.svg";
import infra9 from "../assets/infra_and/Page-9.svg";

const TechnologyBody = ({ mobile, fontEnd, database, backEnd, cms, infra }) => {
	const fullWidth = {
		width: "40%",
		marginBottom: "1rem",
	};
	return (
		<div className="row justify-content-center align-items-center">
			{mobile && (
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
						<h4 style={{ width: "max-content" }}>React Native</h4>
					</div>
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
					<div className="col-3 col-sm-2 text-center mt-5">
						<img
							style={{ width: "55%", marginBottom: "0.6rem" }}
							src={swift}
							alt="swift"
						/>
						<h4>Swift</h4>
					</div>
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

			{fontEnd && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={frontend1} alt="apple" />
						<h4>Angular.Js</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={frontend2} alt="apple" />
						<h4>React.Js</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={frontend3} alt="apple" />
						<h4>Typescript</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={frontend4} alt="apple" />
						<h4>Vue</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={{ width: "70%" }} src={frontend5} alt="apple" />
						<h4 className="mt-4">Wpf</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={frontend6} alt="apple" />
						<h4>HTML5</h4>
					</div>
				</>
			)}

			{database && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={{ width: "25%" }} src={database1} alt="apple" />
						<h4>Mongo Db</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={database2} alt="apple" />
						<h4>MySql</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={database3} alt="apple" />
						<h4>MsSql</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={database4} alt="apple" />
						<h4>Firebase</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={database5} alt="apple" />
						<h4>Dynamodb</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={database6} alt="apple" />
						<h4>Redis</h4>
					</div>
				</>
			)}

			{backEnd && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img
							style={{ width: "50%", marginBottom: "1rem" }}
							src={backend1}
							alt="apple"
						/>
						<h4>Php</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={backend2} alt="apple" />
						<h4>Java</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={backend3} alt="apple" />
						<h4>Node JS</h4>
					</div>
				</>
			)}

			{cms && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={cms1} alt="apple" />
						<h4>Wordpress</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={cms2} alt="apple" />
						<h4>Magento</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={cms3} alt="apple" />
						<h4>Shopify</h4>
					</div>
				</>
			)}

			{infra && (
				<>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra1} alt="apple" />
						<h4>Ios</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra2} alt="apple" />
						<h4>Android</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra3} alt="apple" />
						<h4 style={{ width: "max-content" }}>React Native</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra4} alt="apple" />
						<h4>Flutter</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra5} alt="apple" />
						<h4>Ionic</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra6} alt="apple" />
						<h4>Lincode</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra7} alt="apple" />
						<h4>Azure</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra8} alt="apple" />
						<h4 style={{ width: "max-content" }}>Degital Ocean</h4>
					</div>
					<div className="col-3 col-sm-2 text-center mt-5">
						<img style={fullWidth} src={infra9} alt="apple" />
						<h4>Rackspace</h4>
					</div>
				</>
			)}
		</div>
	);
};

export default TechnologyBody;
