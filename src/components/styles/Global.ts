import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
        box-sizing: border-box;
    }

    body {
       
        font-family: Arial, sans-serif;
        margin: 0;
        height: 100vh;
        background: rgb(2,0,36);
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,97,255,1) 100%);
        background-repeat: no-repeat;
        background-size: cover;

    }

   
`;

export default GlobalStyles;
