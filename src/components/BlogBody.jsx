import React, { useEffect } from "react";
import { connect } from "react-redux";
import { blogFunc } from "../redux/actions";

const BlogBody = ({ bodyCard, blogFunc }) => {
	useEffect(() => {
		blogFunc();
	}, [blogFunc]);

	const blogRes = bodyCard.slice(0, 4);

	return (
		<div className="blogBody_container">
			<div className="container-fluid">
				<div className="row">
					{bodyCard.map((prev, i) => {
						const { title, desc, img } = prev;
						const titleSplit = title.split(" ");
						return (
							<div
								key={i}
								className={`col-4 ${
									(i === 4 && "extraMargin1") ||
									(i === 1 && "extraMargin1") ||
									(i === 2 && "extraMargin2") ||
									(i === 5 && "extraMargin2")
								} d-none d-md-block `}
							>
								<div className="blogBody_card mt-5">
									<img src={img} alt={title} />
									<div>
										<h1 className="pt-4 pb-2 px-1 text-center">
											<span className="themeText">{titleSplit[0]} </span>
											{titleSplit[1]}
										</h1>
										<h5 className="pb-4 px-3 text-center">{desc}</h5>
									</div>
								</div>
							</div>
						);
					})}

					{blogRes.map((prev, i) => {
						const { title, desc, img } = prev;
						const titleSplit = title.split(" ");
						return (
							<div
								key={i}
								className={`col-11 col-sm-6 mx-auto d-block d-md-none`}
							>
								<div className="blogBody_card mt-5">
									<img src={img} alt={title} />
									<div>
										<h1 className="pt-4 pb-2 px-1 text-center">
											<span className="themeText">{titleSplit[0]} </span>
											{titleSplit[1]}
										</h1>
										<h5 className="pb-4 px-3 text-center">{desc}</h5>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
const mapStatetoProps = (state) => {
	return {
		bodyCard: state.Reducer.bodyCard,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		blogFunc: function () {
			dispatch(blogFunc());
		},
	};
};
export default connect(mapStatetoProps, mapDispatchtoProps)(BlogBody);
