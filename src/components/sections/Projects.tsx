import ProjectCard from "../ProjectCard";

export const Projects = () => {

	const projects = [
		{
			projectName:'Ecommerce Website',
			projectLink:'https://ecommerce-frontend-pi.vercel.app/',
			repoLinL:'/Abhinav1190P/Ecommerce_Server'
		},
		{
			projectName:'Movies Hub',
			projectLink:'https://xenodochial-mcclintock-0bbd24.netlify.app/',
			repoLinL:'/Abhinav1190P/moviesApp'
		}
	]

	return (
		<section id="projects" className="projects section is-medium">
			<div className="projects-container">
				<h1>Projects</h1>
				<div className="columns">
					<div
					style={{width:'100%'}}
					className="column is-multiline is-6">
						{
							projects?.map((item,i)=>{
								return (
									<ProjectCard 
									key={i}
									data={item}/>
								)
							})
						}
						
					</div>
					
				</div>
				<h1>
That's about it</h1>
				<div className="colums">
					<div className="column is-full">
						<p
							style={{
								textAlign: "center",
								fontSize: "1.2rem"
							}}
						>
							Well, this is awkward. Nevermind, i'll insert a quote here.
							<br/>
							<i>"Stay hungry, stay foolish"</i>
							<br />
							{" "}
							<a href="#">Steve jobs</a>.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
