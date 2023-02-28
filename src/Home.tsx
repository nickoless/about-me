import styled from 'styled-components';
import meImage from './assets/images/me.jpg';
import SideBar from './SideBar';

const Home = () => {
    return (
        <Homepage>
            <SideBar />
            <ContentWrapper>
                <LeftJumbo>
                    FRONTEND <br />
                    DEVELOPER
                    <Image src={meImage} />
                </LeftJumbo>
                <RightJumbo>NICK LEE</RightJumbo>
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
    padding: 0 50px;
    height: 80%;
    width: 100%;
`;

const JumboText = styled.h1`
    margin: 0;
    font-size: 175px;
    line-height: 1;
`;

const LeftJumbo = styled(JumboText)`
    position: relative;
    /* padding-top: 100px; */
`;

const RightJumbo = styled(JumboText)`
    padding-top: 50px;
    text-align: right;
`;

const Image = styled.img`
    position: absolute;
    height: 300px;
    bottom: -190px;
    left: 13px;
`;
