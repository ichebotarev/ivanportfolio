import styled from "styled-components";
import Image from "next/image";

const IntroStyles = styled.div`

	display: flex;
	flex-direction: column;
	min-height: 95vh;
	justify-content: flex-start;
	margin-top: 30px;
	

	p{
		font-size: .875rem;
	}


`;

const ImageContainer =styled.div`
	max-width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	
	
`;

const Name = styled.h1`
	font-size: 9vw;
	color: var(--blue);
	transform: scaleY(0.3);
	
	margin: 0;
`;

export default function Intro() {
	return (
		<IntroStyles>
			<ImageContainer>
				<Image src={require("../public/ascii.jpg")} alt="Ivan Ascii Art"/>
			</ImageContainer>
			<div>
				<Name>IVAN CHEBOTAREV</Name>
			</div>
			<div>
				<h4>
					I am a developer based in San Francisco, CA. I make electronic music,
					collages and love binging films
				</h4>
				<p>
					Contact Me: <a href="chebiva@gmail.com">chebiva@gmail.com</a>
				</p>
			</div>
		</IntroStyles>
	);
}
