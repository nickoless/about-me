import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from 'globalStyle';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 80px;
    margin: 4rem;
    height: calc(100% - 80px);
    max-width: 1300px;
    margin: auto;
`;

export const Heading = styled(motion.h2)`
    margin: 0;
    font-size: 55px;
    line-height: 1;
    text-transform: uppercase;

    @media ${device.tablet} {
        font-size: 95px;
    }
    @media ${device.laptop} {
        font-size: 125px;
    }
`;

export const SubHeading = styled(motion.h3)`
    margin: 0;
    font-size: 30px;
    line-height: 1;
    text-transform: uppercase;

    @media ${device.tablet} {
        font-size: 40px;
    }
    @media ${device.laptop} {
        font-size: 48px;
    }
`;

export const Paragraph = styled(motion.p)`
    margin-top: 1rem;
    font-size: 14px;

    @media ${device.tablet} {
        margin-top: 1.5rem;
        font-size: 18px;
    }
    @media ${device.laptop} {
        margin-top: 2rem;
        font-size: 18px;
    }
`;
