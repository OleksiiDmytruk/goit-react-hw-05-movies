import { Outlet } from 'react-router-dom';
import { Container, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
