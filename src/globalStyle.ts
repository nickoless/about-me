import { createGlobalStyle } from 'styled-components';
import NeueMontreal from './assets/fonts/NeueMontreal-Book.otf';
import NeueMontrealMedium from './assets/fonts/NeueMontreal-Medium.otf';

/** Base theme */

export const theme = {
    background: '#DBD7D2',
    offBlack: '#343231',
    offWhite: '#F5F5F4'
};

/** Media queries */

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

/** Style overrides */

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Neue Montreal';
        src: url(${NeueMontreal}) format('opentype');
    }
    @font-face {
        font-family: 'Neue Montreal Medium';
        src: url(${NeueMontrealMedium}) format('opentype');
    }

    body {
        cursor: none;
        margin: 0;
        background: ${theme.background};
        color: ${theme.offBlack};
        font-family: 'Neue Montreal', sans-serif;
        letter-spacing: 1px;
    }

    h1 {
        font-family: 'Neue Montreal', sans-serif;
    }
`;

export default GlobalStyle;
