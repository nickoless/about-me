import { motion } from 'framer-motion';
import styled from 'styled-components';

import meImage from 'assets/images/me.jpg';
import { device } from 'globalStyle';
import { Heading, Paragraph, Section, SubHeading } from 'styles';

const About = () => {
    return (
        <Section>
            <Heading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ alignSelf: 'baseline' }}
            >
                About
            </Heading>
            <ContentWrapper
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Image src={meImage} />
                <TextWrapper>
                    <SubHeading>
                        I am a frontend developer with a creative streak
                    </SubHeading>
                    <Paragraph>
                        I am originally from the West Coast of Canada (Bristish
                        Columbia), and have lived in both Victoria and Vancouver
                        at different points in my life. I currently reside in
                        Montreal, Quebec.
                        <br />
                        <br />
                        I am a frontend developer with a passion for aesthetics.
                        I have four years of experience with bringing designs
                        and concepts to life - the majority of which, has been
                        UI / UX focused.
                        <br />
                        <br />I am most proficient in HTML, CSS (including
                        preprocessors: LESS, SASS and CSS-in-JS: Styled
                        Components), JavaScript / TypeScript and React.
                    </Paragraph>
                </TextWrapper>
            </ContentWrapper>
        </Section>
    );
};

export default About;

const ContentWrapper = styled(motion.section)`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
`;

const Image = styled(motion.img)`
    height: 225px;

    @media ${device.tablet} {
        height: 300px;
    }
    @media ${device.laptop} {
        height: 500px;
    }
`;
