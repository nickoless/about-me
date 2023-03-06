import styled from 'styled-components';

import { device, theme } from '../globalStyle';

const SideBar = () => {
    return (
        <SideBarWrapper>
            <a
                href={'https://www.linkedin.com/in/nickoless/'}
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
            <a
                href={'https://github.com/nickoless'}
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            <a
                href={'https://www.instagram.com/orientalshrug/'}
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </a>
        </SideBarWrapper>
    );
};

export default SideBar;

/** STYLES */

const SideBarWrapper = styled.div`
    display: none;
    height: 80%;
    min-width: 80px;
    width: 80px;
    border-right: 2px solid ${theme.offWhite};

    a {
        cursor: none;
        font-family: 'Neue Montreal Medium';
        color: ${theme.offBlack};
        text-decoration: none;
        text-transform: uppercase;
        transform: rotate(-180deg);
        writing-mode: vertical-rl;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;

        :not(:first-child) {
            margin-top: 3rem;
        }
    }

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
