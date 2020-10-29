import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        font-family: 'Inter', sans-serif;
        font-size: 100%;
        line-height: 1.25;
        padding: 0;
        margin: 0;
    }
    
    @media screen and (max-width: 768px) {
        html {
            font-size: 75%;
        }
    }

    @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
    }
    
    body {
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    * {
        box-sizing: border-box !important
    }

`;
