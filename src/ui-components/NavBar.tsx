import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'wouter';

import { theme } from 'globalStyle';

interface Props {
    name: string;
    link: string;
    selected: boolean;
}

const NavLink = ({ name, link, selected }: Props) => (
    <Link href={link}>
        <NavLinkEl>
            {name}
            {selected && <NavUnderline layoutId={'navBar'} />}
        </NavLinkEl>
    </Link>
);

const NavBar = () => {
    const location = useLocation();
    const currentLocation = location[0];

    return (
        <NavBarEl>
            {navLinks.map((navLink) => (
                <NavLink
                    key={navLink.name}
                    link={navLink.link}
                    name={navLink.name}
                    selected={navLink.link === currentLocation}
                />
            ))}
        </NavBarEl>
    );
};

export default NavBar;

const navLinks = [
    { name: 'Home.', link: '/' },
    { name: 'About.', link: '/about' },
    { name: 'Contact.', link: '/contact' },
    { name: 'Work.', link: '/work' }
];

/** STYLES */

const NavBarEl = styled.nav`
    display: flex;
    align-items: center;
    justify-content: end;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
`;

const NavLinkEl = styled(motion.a)`
    cursor: none;
    position: relative;
    margin-right: 2rem;
    color: ${theme.offBlack};
    font-family: 'Neue Montreal Medium';
    font-size: 1.5rem;
    text-decoration: none;
`;

const NavUnderline = styled(motion.div)`
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 92%;
    height: 4px;
    background: ${theme.offWhite};
`;
