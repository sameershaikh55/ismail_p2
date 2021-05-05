import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TechnologyBody from "./TechnologyBody";

const Technologies = () => {
	return (
		<div className="technologies_container">
			<div className="container-fluid text-center">
				<h1 className="text-center mb-4">
					<span className="themeText">TECHNOLOGIES</span> WE WORK WITH
				</h1>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-10 col-md-8 mx-auto">
						<Tabs>
							<TabList>
								<Tab>Mobile</Tab>
								<Tab>Front End</Tab>
								<Tab>Database</Tab>
								<Tab>Back end</Tab>
								<Tab>CMS</Tab>
								<Tab>Infra and Devops</Tab>
							</TabList>

							<TabPanel className="my-2">
								<TechnologyBody />
							</TabPanel>
							<TabPanel>
								<TechnologyBody fontEnd />
							</TabPanel>
							<TabPanel>
								<TechnologyBody database />
							</TabPanel>
							<TabPanel>
								<TechnologyBody backEnd />
							</TabPanel>
							<TabPanel>
								<TechnologyBody cms />
							</TabPanel>
							<TabPanel>
								<TechnologyBody infra />
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
