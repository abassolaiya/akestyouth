import styled from "styled-components";

const HeroContainer = styled.div`
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Hero = () => (
  <HeroContainer>
    <HeroTitle>New Covenant Church Youth</HeroTitle>
    <HeroSubtitle>
      Akobo Estate Centre - Growing together in faith and fellowship
    </HeroSubtitle>
  </HeroContainer>
);

export default Hero;
