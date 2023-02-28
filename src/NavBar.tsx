import styled from 'styled-components';
import { theme } from './GlobalStyle';

const NavBar = () => {
    return (
        <NavBarEl>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
        </NavBarEl>
    );
};

export default NavBar;

/** STYLES */

const NavBarEl = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 80px;
`;

const NavLink = styled.a`
    font-family: 'Neue Montreal Medium';
    color: ${theme.offBlack};
    margin-right: 2rem;
    font-size: 1.5rem;
`;
