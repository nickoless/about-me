import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'wouter';
import { useState } from 'react';

import { device } from 'globalStyle';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { theme } from 'globalStyle';
import useMediaQuery from 'hooks/useMediaQuery';

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
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = !useMediaQuery(device.tablet);
    const location = useLocation();
    const currentLocation = location[0];

    const navLinksMap = navLinks.map((navLink) => (
        <NavLink
            key={navLink.name}
            link={navLink.link}
            name={navLink.name}
            selected={navLink.link === currentLocation}
        />
    ));

    if (isMobile)
        return (
            <>
                <NavBarEl>
                    {showMenu ? (
                        <CloseIcon
                            style={{
                                marginRight: '20px',
                                height: '30px',
                                width: '30px'
                            }}
                            onClick={() => setShowMenu(false)}
                        />
                    ) : (
                        <MenuIcon
                            style={{
                                marginRight: '20px',
                                height: '30px',
                                width: '30px'
                            }}
                            onClick={() => setShowMenu(true)}
                        />
                    )}
                </NavBarEl>
                {showMenu && <NavDropdown>{navLinksMap}</NavDropdown>}
            </>
        );
    else return <NavBarEl>{navLinksMap}</NavBarEl>;
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
    height: 60px;
    background: ${theme.offWhite};

    @media ${device.tablet} {
        background: none;
    }
`;

const NavLinkEl = styled(motion.a)`
    cursor: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 60px;
    width: fit-content;
    color: ${theme.offBlack};
    font-family: 'Neue Montreal Medium';
    font-size: 1.5rem;
    text-decoration: none;

    @media ${device.tablet} {
        display: block;
        margin-right: 2rem;
        height: unset;
    }
`;

const NavUnderline = styled(motion.div)`
    position: absolute;
    bottom: 0.25rem;
    left: 0;
    width: 92%;
    height: 4px;
    background: ${theme.offBlack};

    @media ${device.tablet} {
        bottom: -0.5rem;
        width: 92%;
        background: ${theme.offWhite};
    }
`;

const NavDropdown = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 60px;
    padding-bottom: 20px;
    width: 100%;
    background: ${theme.offWhite};
    z-index: 1;
`;
