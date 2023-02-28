import styled, { keyframes } from 'styled-components';
import { theme } from './GlobalStyle';

const NavBar = () => {
    return (
        <NavBarEl>
            <WIP>work in progress</WIP>
            <WIP>work in progress</WIP>
            <WIP>work in progress</WIP>
            <WIP>work in progress</WIP>
        </NavBarEl>
    );
};

export default NavBar;

/** STYLES */

const NavBarEl = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
`;

const WIP = styled.p`
    color: ${theme.offWhite};
    font-size: 32px;
`;
