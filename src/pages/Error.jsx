import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Error = () => {
	let history = useHistory();
	return (
		<div className="ErrorPage_container">
			<div className="errorInner">
				<svg className="main" viewBox="0 0 837 1045">
					<g
						id="Page_1"
						stroke="none"
						strokeWidth="1"
						fill="none"
						fillRule="evenodd"
					>
						<path
							d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
							id="Polygon_1"
							stroke="#0384b8"
							strokeWidth="6"
						></path>
						<path
							d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
							id="Polygon_2"
							stroke="#EF4A5B"
							strokeWidth="6"
						></path>
						<path
							d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
							id="Polygon_3"
							stroke="#795D9C"
							strokeWidth="6"
						></path>
						<path
							d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
							id="Polygon_4"
							stroke="#F2773F"
							strokeWidth="6"
						></path>
						<path
							d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
							id="Polygon_5"
							stroke="#36B455"
							strokeWidth="6"
						></path>
					</g>
				</svg>
				<div className="message_box">
					<h1 className="text-center">404</h1>
					<h2 className="text-center">Page not found</h2>
					<div className="buttons_con">
						<div className="action_link_wrap">
							<button
								onClick={() => history.goBack()}
								className="link_button link_back_button"
							>
								Go Back
							</button>
							<NavLink to="/" className="link_button mt-3">
								Go to Home Page
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
