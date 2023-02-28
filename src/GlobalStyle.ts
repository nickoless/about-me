import { createGlobalStyle } from 'styled-components';
import NeueMontreal from './assets/fonts/NeueMontreal-Book.otf';

export const theme = {
    background: '#DBD7D2',
    text: '#343231'
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Neue Montreal';
        src: url(${NeueMontreal}) format('opentype');
    }
    /* @font-face {
        font-family: 'Neue Montreal Bold';
        src: url(${NeueMontreal}) format('opentype');
    } */

    body {
        margin: 0;
        font-family: 'Neue Montreal';
        color: ${theme.text};
    }

    h1 {
        font-family: 'Neue Montreal';
    }
`;

export default GlobalStyle;
