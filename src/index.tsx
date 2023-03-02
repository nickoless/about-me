import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'App';
import GlobalStyle from 'globalStyle';
import reportWebVitals from 'reportWebVitals';

const domNode = document.getElementById('root');
const root = createRoot(domNode as Element);

root.render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>
);

// Cursor is courtesy of Andriy Chermerynskiy via https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3
// Design heavily inspired by https://dribbble.com/gilhuybrecht

reportWebVitals();
