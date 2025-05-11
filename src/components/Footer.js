import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.dark};
  color: white;
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 0;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => (
  <FooterContainer>
    <p>New Covenant Church Youth - Akobo Estate Centre</p>
    <SocialLinks>
      <a href="#">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i className="fab fa-youtube"></i>
      </a>
    </SocialLinks>
    <Copyright>
      &copy; {new Date().getFullYear()} NCC Akobo Youth. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer;
