import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
// RESPONSIVE BREAKPOINTS
$bp-largest: 75em;   // 1200px
$bp-large: 62.5em;   // 1000px
$bp-medium: 50em;    // 800px;
$bp-small: 37.5em;    // 600px;

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    

    @media only screen and (max-width: $bp-largest) {
        font-size: 50%;
    }
}

body {
    font-family: Menlo;
}
`;
