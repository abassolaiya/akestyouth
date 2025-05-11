import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const AboutText = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const About = () => (
  <AboutContainer>
    <SectionTitle>About Our Youth Church</SectionTitle>
    <AboutText>
      Welcome to the Youth Ministry of New Covenant Church, Akobo Estate Centre.
      We are a vibrant community of young people committed to growing in our
      faith, building meaningful relationships, and serving our community.
    </AboutText>
    <AboutText>
      Our weekly gatherings include Bible study, worship nights, and fellowship
      activities designed to help you connect with God and with each other.
    </AboutText>
  </AboutContainer>
);

export default About;
