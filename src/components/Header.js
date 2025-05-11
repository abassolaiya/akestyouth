import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Youth Church</Logo>
      <Nav>
        <NavLink>Home</NavLink>
        <NavLink>Events</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
