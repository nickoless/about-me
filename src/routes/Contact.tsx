import { ContentWrapper, Heading, Section, SubHeading } from 'styles';

const Contact = () => {
    return (
        <Section>
            <Heading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ alignSelf: 'baseline' }}
            >
                Contact
            </Heading>
            <ContentWrapper>
                <SubHeading>This page is a work in progress</SubHeading>
            </ContentWrapper>
        </Section>
    );
};

export default Contact;
