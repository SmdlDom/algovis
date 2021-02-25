import { createGlobalStyle } from 'styled-components'
import colorSheet from "./colorSheet.styles";

export const GlobalStyle = createGlobalStyle`
    body {
			font-family: sans-serif;
			background-color: ${colorSheet.grey};
    }

    a {
        text-decoration: none;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }
`;