import { motion } from 'framer-motion';
import { device } from 'globalStyle';
import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 60px;
    padding: 2rem;
    height: 100%;
    max-width: 1300px;

    @media ${device.tablet} {
        margin-left: 80px;
        padding: 4rem;
    }
`;

export const ContentWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;

    @media ${device.tablet} {
        justify-content: flex-start;
        margin-top: 100px;
    }
    @media ${device.laptop} {
        flex-direction: row;
    }
`;

export const Heading = styled(motion.h1)`
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

export const SubHeading = styled(motion.h2)`
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
