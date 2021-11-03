import styled from "styled-components";
import {
	FaJsSquare,
	FaReact,
	FaHtml5,
	FaCss3,
	FaNpm,
	FaGithub,
} from "react-icons/fa";
import {
	SiAbletonlive,
	SiGraphql,
	SiNextdotjs,
	SiMongodb,
	SiSass,
	SiRedux,
	SiAdobecreativecloud,
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiLamborghini,
	SiTailwindcss,
} from "react-icons/si";

const SkillStyles = styled.div`
	> * {
	}

	min-height: 100vh;

	margin: 100px 0;
`;

const Name = styled.h1`
	font-size: 9vw;
	color: var(--blue);
	transform: scaleY(0.3);
	line-height: 1;
	margin: initial;
`;

const SectionIcons = styled.div`
	margin-top: 30px;
	font-weight: 300;
	font-size: 6rem;
	color: grey;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	@media (min-width: 800px) {
		grid-template-columns: repeat(5, 1fr);
	}
	grid-column-gap: 25px;
	grid-row-gap: 50px;
	cursor: pointer;
	padding-top: 10px;

	.icon-hover:hover {
		color: var(--blue);
	}
`;

export default function Skills() {
	return (
		<SkillStyles>
			<div>
				<Name>Skills</Name>
				<SectionIcons>
					<FaHtml5 className="icon-hover" />
					<FaCss3 className="icon-hover" />
					<FaJsSquare className="icon-hover" />
					<FaReact className="icon-hover" />
					<SiRedux className="icon-hover" />
					<SiSass className="icon-hover" />
					<SiMongodb className="icon-hover" />
					<SiAbletonlive className="icon-hover" />
					<SiTailwindcss className="icon-hover" />
					<FaNpm className="icon-hover" />
					<SiGraphql className="icon-hover" />
					<FaGithub className="icon-hover" />
					<SiNextdotjs className="icon-hover" />
					<SiLamborghini className="icon-hover" />
					<SiAdobephotoshop className="icon-hover" />
					<SiAdobepremierepro className="icon-hover" />
					<SiAdobecreativecloud className="icon-hover" />
				</SectionIcons>
			</div>
		</SkillStyles>
	);
}
