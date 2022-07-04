
import { Link } from "react-scroll";

export const Introduction = () => {
	return (
		<section id="introduction" className="introduction section is-medium">
			<div className="introduction-container container">
				<div className="columns">
					<div className="column is-12">
						
							<div className="content" style={{ textAlign: "center" }}>
								<h1 className="title">
									Hello, I'm <span className="blue-text">Abhinav Pandey</span>.
								</h1>
								<p className="description">An Indian full-stack web developer.</p>
								<Link to="about" smooth={true} className="button floating">
									View More
									<span>→</span>
								</Link>
							</div>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
