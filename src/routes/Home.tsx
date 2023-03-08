import styled from 'styled-components';
import mirrorImage from 'assets/images/mirror.png';
import { device } from 'globalStyle';
import SideBar from 'components/SideBar';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    return (
        <Homepage>
            <SideBar />
            <ContentWrapper>
                <div style={{ position: 'relative' }}>
                    <LeftJumbo
                        initial={{
                            x: -50,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            type: 'tween',
                            delay: 3,
                            duration: 1.5
                        }}
                        exit={{
                            opacity: 0
                        }}
                    >
                        Frontend <br />
                        developer
                    </LeftJumbo>
                    <Image
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            type: 'tween',
                            delay: 1.5,
                            duration: 1.5
                        }}
                        src={mirrorImage}
                    />
                </div>
                <TextWrapper>
                    <RightJumbo
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Nick Lee
                    </RightJumbo>
                    <SubHeading
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: 3,
                            duration: 1.5
                        }}
                    >
                        Experienced front end developer driven by aesthetics. I
                        enjoy bringing designs and concepts to life.
                    </SubHeading>
                </TextWrapper>
            </ContentWrapper>
        </Homepage>
    );
};

export default Home;

/** STYLES */

const Homepage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #dbd7d2;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    padding: 0 25px;
    width: 100%;
    max-width: 1300px;

    @media ${device.mobileM} {
        height: 525px;
    }
    @media ${device.tablet} {
        padding: 0 50px;
        width: calc(100% - 80px);
    }
    @media ${device.laptop} {
        height: 700px;
    }
    @media ${device.desktop} {
        height: 900px;
    }
`;

const JumboText = styled(motion.h1)`
    margin: 0;
    font-size: 50px;
    line-height: 1;
    text-transform: uppercase;

    @media ${device.mobileL} {
        font-size: 75px;
    }
    @media ${device.tablet} {
        font-size: 125px;
    }
    @media ${device.laptop} {
        font-size: 150px;
    }
`;

const LeftJumbo = styled(JumboText)`
    position: relative;
`;

const RightJumbo = styled(JumboText)`
    text-align: right;
    z-index: 1;
`;

const Image = styled(motion.img)`
    width: 100%;
    mix-blend-mode: difference;

    @media ${device.mobileL} {
        position: absolute;
        height: 175px;
        width: unset;
    }
    @media ${device.tablet} {
        height: 225px;
        width: unset;
        bottom: -220px;
        left: 10px;
    }
`;

const SubHeading = styled(motion.p)`
    font-size: 18px;
    text-align: right;
    text-transform: uppercase;
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
    left: 0;

    @media ${device.laptop} {
        font-size: 25px;
        text-align: left;
        width: 540px;
        margin-top: 10px;
        margin-left: 10px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: end;
    align-items: flex-end;
    margin-top: 50px;
    width: 100%;

    @media ${device.tablet} {
        align-items: flex-start;
        margin-top: 166px;
        width: 540px;
    }
    @media ${device.laptop} {
        margin-top: 0;
        width: 675px;
    }
`;
