import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>
					

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
									
									<ul>	
									<h1 className="Skills-title"><strong>My Skills</strong></h1>
									<li className="Skills">Programming & Web Technologies<ul>
										<li>Python, C#, JavaScript, PHP</li>
										<li>React.js, Django, SQL</li></ul> </li>
										<li className="Skills">Professional Competencies<ul>
										<li>Problem-Solving & Critical Thinking</li>
										<li>Collaboration & Teamwork</li>
										<li>Continuous Learning & Adaptability</li></ul> </li>
										<li className="Skills"> ICT & Support Skills<ul>
										<li>Troubleshooting & Infrastructure Support</li>
										<li>End-User Training & Support</li></ul> </li>
										<li className="Skills">Design & Customization<ul>
										<li>Graphics Design (Adobe Illustrator, Photoshop)</li>
										<li>Invoice Template Customization, Crystal Reports, Jinja Templates</li></ul> </li>

									
									</ul>
								
								</div>
							</div>
							

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={process.env.PUBLIC_URL +"about.jpg"}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
								

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
