import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./cyteerp.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">CyteERP Systems</div>
							<div className="work-subtitle">
								   {" "} IT Technical Consultant
							</div>
							<div className="work-duration">2024 - 2025</div>
						</div>
						<ul>
							<li>Provided end-user support for hardware and software troubleshooting.</li>
							<li>Installed and configured computers, printers, and accounting systems.</li>
							<li>Diagnosed and resolved software issues; ensured antivirus and system updates were current.</li>
							<li>Implematation support and Customer Training for ERPs & other business software.</li>
							<li>Offered technical standby during client training sessions and product rollouts.</li>
							<li>Assisted with network setup and tested basic switch/router connectivity.</li>
						</ul>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
