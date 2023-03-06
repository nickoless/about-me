import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { theme } from 'globalStyle';

const Cursor = () => {
    if (typeof navigator !== 'undefined' && isMobile()) return null;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a, svg').forEach((el) => {
            el.addEventListener('mouseover', () => setLinkHovered(true));
            el.addEventListener('mouseout', () => setLinkHovered(false));
        });
    };

    return (
        <CursorEl
            $clicked={clicked}
            $hidden={hidden}
            $link={linkHovered}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default Cursor;

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

/** STYLES */

const CursorEl = styled.div<{
    $clicked: boolean;
    $hidden: boolean;
    $link: boolean;
}>`
    pointer-events: none;
    position: fixed;
    width: 35px;
    height: 35px;
    border: 2px solid ${theme.offWhite};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
    z-index: 999;
    mix-blend-mode: difference;

    ${({ $clicked }) =>
        $clicked &&
        `
        transform: translate(-50%, -50%) scale(0.9);
        background-color: #fefefe;
    `}

    ${({ $hidden }) =>
        $hidden &&
        `
        opacity: 0;
    `}

    ${({ $link }) =>
        $link &&
        `
        transform: translate(-50%, -50%) scale(1.25);
        background-color: #fefefe;
        `}
`;
