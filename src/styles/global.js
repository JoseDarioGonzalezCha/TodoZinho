import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
	}

	body{
        font-family: 'Urbanist', sans-serif;

        overflow-x:hidden ;
        scroll-behavior: smooth;
        
        background-color: #E5E5E5;
    }

	button{
        cursor: pointer;
    }

	img{
        max-width: 100%;
    }

	h1, h2, h3 {
        font-weight: 400;
		font-family: 'Bebas Neue', sans-serif;
    }

	p {
        font-weight: 300;
    }
`;
