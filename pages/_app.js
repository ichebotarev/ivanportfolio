import Page from "../components/Page";
import styled, {
	createGlobalStyle,
	GlobalStyleComponent,
} from "styled-components";


const GlobalStyles = createGlobalStyle`
    html{
        --blue: #0b55ff;
        --offWhite: #f6f6f6;
        --darkGrey: #464141;
        --maxWidth: 1000px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: var(---darkGrey);
        @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
       
        font-size: 62.5%;
        line-height: 1;
       
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        padding: 0;
        margin: 0 75px;
        font-size: 1.5rem;
        font-family: 'Almarai', 'Courier New', Courier, monospace;
        font-weight: lighter;
        
    }
    a {
        text-decoration: none;
        color: var(--blue);

        :hover{
            text-decoration: underline;
            
        }
    }

    img{
        max-width: 100%;
    }

`;


function MyApp({ Component, pageProps }) {
	return (
		<>
		<GlobalStyles/>
		<Page>
			<Component {...pageProps} />
		</Page>
		</>
	);
}

export default MyApp;
