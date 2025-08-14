import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
//import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
//import myArticles from "../data/articles";

import "./styles/articles.css";

const Certificates = ({image, zita}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		
	<div>
								<div className="Certificates-container">
									<div className="Certificates-wrapper" onClick={() => setIsOpen(true)}>
										<img
											src={image}
											alt={zita}
											className="Certificates-image"
										/>
										<h3 className="zita">{zita}</h3>
									</div>
									 
								</div>
								{/* Modal / Lightbox */}
                                     {isOpen && (
                                       <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                                         <img src={image} alt={zita} className="modal-image" />
                                       </div>)}
		</div>
							)
}

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Certificates | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>
					

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								
								<Certificates image={process.env.PUBLIC_URL +'/Diploma.png'} zita={'Diploma In Software Engineering'}/>
								<Certificates image={process.env.PUBLIC_URL +'/Transcript.png'} zita={'School Transcript'}/>
								<Certificates image={process.env.PUBLIC_URL +'/O-level-Nov.png'} zita={'O-Level Certificate'}/>
								<Certificates image={process.env.PUBLIC_URL +'/O-level-June.png'} zita={'O-Level Certificate 2'}/>
								<Certificates image={process.env.PUBLIC_URL +'/Sage-Intact.png'} zita={'Sage Intacct Implementation'}/>
								<Certificates image={process.env.PUBLIC_URL +'/Sage-Intact-Accounting.png'} zita={'Sage Intacct Accounting'}/>
								<Certificates image={process.env.PUBLIC_URL +'/Sdmo.png'} zita={'Sage Distribution and Management Operations'}/>
								<Certificates image={process.env.PUBLIC_URL +'/Palladium.png'} zita={'Palladium Accounting Certificate'}/>
								<Certificates image={process.env.PUBLIC_URL +'/Payspace.png'} zita={'Payspace Advanced Features Certificate'}/>
								<Certificates image={process.env.PUBLIC_URL +'/license.png'} zita={'Class 4 Drivers License'}/>

							</div>
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

export default Articles;
