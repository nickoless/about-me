import styled from 'styled-components';
import meImage from './assets/images/me.jpg';
import { device } from './GlobalStyle';
import SideBar from './SideBar';

const Home = () => {
    return (
        <Homepage>
            <SideBar />
            <ContentWrapper>
                <LeftJumbo>
                    Frontend <br />
                    developer
                    <Image src={meImage} />
                </LeftJumbo>
                <RightJumbo>Nick Lee</RightJumbo>
            </ContentWrapper>
        </Homepage>
    );
};

export default Home;

/** STYLES */

const Homepage = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background: #dbd7d2;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media ${device.mobileM} {
        padding: 0 25px;
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

const JumboText = styled.h1`
    margin: 0;
    font-size: 175px;
    line-height: 1;
    text-transform: uppercase;

    @media ${device.mobileS} {
        font-size: 60px;
    }
    @media ${device.tablet} {
        font-size: 125px;
    }
    @media ${device.laptop} {
        font-size: 175px;
    }
`;

const LeftJumbo = styled(JumboText)`
    position: relative;
    /* padding-top: 100px; */
`;

const RightJumbo = styled(JumboText)`
    padding-top: 50px;
    text-align: right;
    z-index: 1;
`;

const Image = styled.img`
    position: absolute;

    @media ${device.mobileS} {
        height: 225px;
        bottom: -230px;
        left: 70px;
    }
    @media ${device.tablet} {
        height: 300px;
        bottom: -290px;
        left: 13px;
    }
`;
