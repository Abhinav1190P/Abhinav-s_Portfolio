import { RepoIcon, StarFillIcon, QuestionIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";

const getRepository = (username: string, repository: string): any => {
	const [response, setResponse] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/repos/${username}/${repository}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(async (response) => {
				setResponse(await response.json());
				setLoading(false);
			})
			.catch(() => {
				setError(true);
				setLoading(false);
			});
	}, [repository]);

	return [response, error, loading];
};

const getLanguageIcon = (language: string): string => {
	if (!language) language = "github";

	switch (language.toLowerCase()) {
		case "shell":
			language = "bash";
			break;
		case "scss":
			language = "css3";
			break;
	}

	return `devicon-${language.toLowerCase()}-plain`;
};

export const ProjectCard = ({data}) => {
	

	return (
		<div className="card">
			<div className="card-content">
				<div className="repo-title">
					<a 
					style={{color:'white'}} href="#" target="_blank">
						{data.projectName}
					</a>
				</div>
				<div className="repo-description">
					<p>{data.repoLinL}</p>
					<br />
					<div style={{ display: "flex" }}>
						<div style={{ marginRight: "3rem" }}>
						<a href={data.projectLink} target="_blank">
						Visit
					</a>
						</div>
						
						{/* <div style={{ marginRight: "12px" }}>
                           <QuestionIcon size={16} /> {data.archived ? "Archived" : "Maintained"}
                        </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
