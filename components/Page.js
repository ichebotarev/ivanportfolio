import styled, {
	createGlobalStyle,
	GlobalStyleComponent,
} from "styled-components";
import Background from "./Background";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Page({ children }) {
	return (
		<div>
			<Intro />
			<Background />
			<Skills />
			<Projects />
		</div>
	);
}
