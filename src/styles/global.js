import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
     @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Open+Sans&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        -webkit-font-smoothing: antialised !important;
    }
    
`