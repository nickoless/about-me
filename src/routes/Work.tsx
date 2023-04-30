import { motion } from 'framer-motion';
import styled from 'styled-components';

import HistoryCard from 'components/HistoryCard';
import { device } from 'globalStyle';
import { ContentWrapper, Heading, Section, SubHeading } from 'styles';

const Work = () => {
    return (
        <Section>
            <Heading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ alignSelf: 'baseline' }}
            >
                Work
            </Heading>
            <ContentWrapper>
                <CardWrapper>
                    {workHistory.map((work) => (
                        <HistoryCard
                            key={work.company}
                            company={work.company}
                            position={work.position}
                            role={work.role}
                            tenure={work.tenure}
                            languagesFrameworks={work.languagesFrameworks}
                            librariesOther={work.librariesOther}
                            // projects={work.projects}
                        />
                    ))}
                </CardWrapper>
            </ContentWrapper>
        </Section>
    );
};

export default Work;

export interface WorkHistory {
    company: string;
    position: string;
    role: string;
    tenure: string;
    languagesFrameworks: string[];
    librariesOther?: string[];
    // projects: string[];
}

const workHistory: WorkHistory[] = [
    {
        company: 'Samdesk',
        position: 'Frontend Developer',
        role: 'Helped to develop a rebuild of Samdesk platform, using an up-to-date tech stack.',
        tenure: 'April 2022 to February 2023',
        languagesFrameworks: ['React', 'TypeScript', 'Styled Components'],
        librariesOther: [
            'GitHub Actions',
            'Material UI',
            'React Query',
            'React Router',
            'React Testing Library',
            'React Virtuoso',
            'Zustand'
        ]
        // projects: [
        //     'Scaffolded pages with declarative routing via a tab like structure (similar to modern internet browsers)',
        //     'Implemented various settings pages - allowing for the configuration of the  application',
        //     'Setup various GraphQL mutations and queries (migrating fro'
        // ]
    },
    {
        company: 'Stocksy',
        position: 'Junior Frontend Developer',
        role: 'My primary focus was working on the UI / UX of the platform. Making improvements to the platform to optimize userflows and improve discoverability of the product.',
        tenure: 'March 2020 to April 2022',
        languagesFrameworks: [
            'React',
            'JavaScript',
            'TypeScript',
            'PHP',
            'SASS',
            'Styled Components'
        ],
        librariesOther: ['Framer Motion', 'Selenium', 'Zustand']
        // projects: [
        //     'Refactored parts of the codebase (phtml, JavaScript) into React / TypeScript components',
        //     'Improved internal tool for managing assets by optimizing search functionality',
        //     'Added additional asset feeds to user and product pages in order to improve discoverability',
        //     'Created landing pages for enterprise clients and potential contributors',
        //     'Ensuring cross compatability between browsers and optimizing layouts for multiple viewports'
        // ]
    },
    {
        company: 'Vizzlo',
        position: 'Frontend Engineer',
        role: 'Developing visual representations of data via different chart types and implementing analytical tools and the accompanying UI / UX.',
        tenure: 'March 2020 to April 2022',
        languagesFrameworks: ['React', 'TypeScript', 'LESS'],
        librariesOther: ['Blueprint JS', 'Hugo', 'Material UI']
        // projects: ['Added analytis']
    }
];

const CardWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;
    gap: 1.5rem;

    @media ${device.tablet} {
        justify-content: flex-start;
    }
`;

const Image = styled(motion.img)`
    margin-bottom: 2rem;
    height: unset;
    width: 100%;
    max-width: 450px;

    @media ${device.tablet} {
        height: 300px;
        width: unset;
        max-width: unset;
    }
    @media ${device.laptop} {
        height: 500px;
    }
`;
