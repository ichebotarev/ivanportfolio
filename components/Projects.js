import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const ProjectStyles = styled.div`
	> * {
	}
	display: flex;
	flex-direction: column;

	min-height: 100vh;
	justify-content: center;

	h3 {
		color: var(--blue);
	}

	.projects-container {
	}

	.project {
		outline: 1px solid var(--blue);
		max-width: 500px;
		padding: 10px;
		border-radius: 2%;
		margin: 70px 0;
		line-height: 1;
		color: var(--darkGrey);
	}
`;

const Name = styled.h1`
	font-size: 9vw;
	color: var(--blue);
	transform: scaleY(0.3);
	line-height: 1;
	margin: initial;
`;

const TechTagContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TechTag = styled.span`
	color: var(--blue);
	border: 1px solid var(--blue);
	padding: 3px;
	font-size: 1rem;
	border-radius: 4px;
	margin: 5px 3px 15px 3px;
`;

export default function Projects() {
	return (
		<ProjectStyles>
			<div>
				<Name>Projects</Name>
				<div className="projects-container">
					<div className="project">
						<h3>Faux Comme De Garcon Shop</h3>
						<p>
							Derived from Wes Bos Tutorial, this fully functioning ecommerce
							shop displays faux fashion items
						</p>
						<TechTagContainer>
							<TechTag>Javascript</TechTag>
							<TechTag>React</TechTag>
							<TechTag>CSS</TechTag>
							<TechTag>Styled Components</TechTag>
							<TechTag>Next.JS</TechTag>
							<TechTag>GraphQL</TechTag>
							<TechTag>Keystone.JS</TechTag>
						</TechTagContainer>
						<Link href="https://github.com/ichebotarev" passHref={true}>
							<a href="https://github.com/ichebotarev" target="blank">
								See Projects Here
							</a>
						</Link>
					</div>
					<div className="project">
						<h3>SoundCloud Imitation</h3>
						<p>A Shop to sell my own music with a stream of my own tracks</p>
						<TechTagContainer>
							<TechTag>Javascript</TechTag>
							<TechTag>React</TechTag>
							<TechTag>CSS</TechTag>
							<TechTag>Next.JS</TechTag>
							<TechTag>GraphQL</TechTag>
							<TechTag>Keystone.JS</TechTag>
						</TechTagContainer>
						<Link href="" passHref className="project-link">
							<a href="https://github.com/ichebotarev">See Projects Here</a>
						</Link>
					</div>
					<div className="project">
						<h3>Productivity App</h3>
						<p>
							An App in progress for my girlfriend and I! We are trying to get
							organized
						</p>
						<TechTagContainer>
							<TechTag>Javascript</TechTag>
							<TechTag>React</TechTag>
							<TechTag>CSS</TechTag>
							<TechTag>SASS</TechTag>
						</TechTagContainer>
						<Link href="" passHref>
							<a href="https://github.com/ichebotarev">See Projects Here</a>
						</Link>
					</div>
				</div>
				<div>
					<Name>Design</Name>
				</div>

				<ProjectCard />
			</div>
		</ProjectStyles>
	);
}
