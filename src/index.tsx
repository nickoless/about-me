import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './GlobalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domNode = document.getElementById('root');
const root = createRoot(domNode as Element);

root.render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>
);

reportWebVitals();
