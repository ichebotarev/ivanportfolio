import styled from "styled-components";

const BackgroundStyles = styled.div`
	> * {
	}
	display: flex;
	flex-direction: column;

	min-height: 80vh;
	justify-content: flex-start;
	align-items: flex-start;

	p {
		font-size: .875rem;
	}
`;

const Name = styled.h1`
	font-size: 9vw;
	color: var(--blue);
	transform: scaleY(0.3);
	line-height: 1;
	
	margin-bottom: 40px;
	margin-top: 200px;
`;

const BackgroundContainer = styled.div`
	max-width: 90%;

	@media (min-width: 800px){
		max-width: 50%;
		line-height: 2;
	}


`;

export default function Background() {
	return (
		<>
			<Name>Background</Name>
			<BackgroundStyles>
				
				<BackgroundContainer>
					<h4>
						Originally born in Russia I moved to the United States when I was 5
						years old. I grew up in the Bay Area and spent three years of my
						adult life living in New York City.
					</h4>
					<h4>
						My path through programming has been an interesting one but
						ultimately I realized that what I love about it is the creative
						problem solving. The motivation
						behind any creation is to make or express something you feel that is
						missing from the world, and that has always been my driving force. 
					</h4>
					<h4>
						My intention is to learn as much as possible to diversify my ability
						to make things. I am very hungry. <span><p>(Please give me food)</p></span>.
					</h4>
					<h5>
						<a href="https://ivanprojects.s3.us-west-1.amazonaws.com/Ivan_Chebotarev_-_Web_Developer.pdf" target="_blank" rel="noreferrer">Check out my Resume</a>
					</h5>

					<img src="https://media0.giphy.com/media/aNEDbjEGn9y6CjgIJg/giphy.gif" />
				</BackgroundContainer>
			</BackgroundStyles>
		</>
	);
}
