import styled from 'styled-components';

import { device, theme } from 'globalStyle';
import { WorkHistory } from 'routes/Work';

const HistoryCard = ({
    company,
    position,
    role,
    tenure,
    languagesFrameworks,
    librariesOther
}: // projects
WorkHistory) => {
    return (
        <Card>
            <TagWrapper>
                {languagesFrameworks.map((item) => (
                    <Tag key={item} $important={true}>
                        {item}
                    </Tag>
                ))}
                {librariesOther?.map((item) => (
                    <Tag key={item}>{item}</Tag>
                ))}
            </TagWrapper>
            <Heading>{company}</Heading>
            <Section>
                <SectionDescription>Position</SectionDescription>
                <SectionContent>{position}</SectionContent>
            </Section>
            <Section>
                <SectionDescription>Tenure</SectionDescription>
                <SectionContent>{tenure}</SectionContent>
            </Section>
            <Section>
                <SectionDescription>Role</SectionDescription>
                <SectionContent>{role}</SectionContent>
            </Section>
            {/* <Section>
                <SectionDescription>Projects</SectionDescription>
                <SectionContent>
                    {projects.map((project) => (
                        <li>{project}</li>
                    ))}
                </SectionContent>
            </Section> */}
        </Card>
    );
};

export default HistoryCard;

const Card = styled.article`
    padding: 2rem;
    background: ${theme.offWhite};
    border-radius: 8px;

    @media ${device.tablet} {
        padding: 4rem;
    }
    @media ${device.laptop} {
        align-self: flex-start;
        width: 100%;
        max-width: 800px;
    }
`;

const Heading = styled.h2`
    font-family: 'Neue Montreal Medium';
    font-size: 45px;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 1.5rem;

    @media ${device.tablet} {
        font-size: 60px;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const SectionDescription = styled.p`
    font-family: 'Neue Montreal Medium';
    text-transform: uppercase;
    flex: 1;
    margin-top: 0;
    margin-bottom: 0.5rem;

    @media ${device.tablet} {
        margin-bottom: 1rem;
    }
`;

const SectionContent = styled.p`
    flex: 3;
    margin-top: 0;
`;

const Tag = styled.div<{ $important: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Neue Montreal Medium';
    font-size: 0.5rem;
    text-transform: uppercase;
    padding: 0 0.75rem;
    height: 28px;
    width: fit-content;
    border: 1px solid ${theme.offBlack};
    border-radius: 30px;

    ${({ $important }) =>
        $important &&
        `background: ${theme.offBlack}; color: ${theme.offWhite};`}

    @media ${device.tablet} {
        border: 3px solid ${theme.offBlack};
        font-size: 0.75rem;
    }
`;

const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
