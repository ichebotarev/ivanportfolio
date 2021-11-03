import styled from "styled-components";
import Image from "next/image";
import image1 from "../public/1.jpg";
import seedData from "../lib/SeedData";

const Card = styled.div`
	display: flex;
	flex-wrap: wrap;

	justify-content: center;
	align-items: center;
	margin-top: 20px;

	.card-info {
		padding: 10px;
		text-align: right;
	}

	.image-card {
		max-width: 500px;
		> * {
			object-fit: contain;
			max-width: 100px;
		}
	}
`;

export default function ProjectCard() {
	const imagesIndex = [9, 10, 11, 13, 15, 16, 17, 18, 19];

	const renderedList = imagesIndex.map((index) => {
		return (
			<div className="image-card" key={index}>
				<Image
					src={require(`../public/${index}.jpg`)}
					key={index}
					alt={index}
				/>
			</div>
		);
	});

	return <Card>{renderedList}</Card>;
}
