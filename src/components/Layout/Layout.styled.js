import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  text-transform: capitalize;
  padding: 4px 8px;

  &.active {
    color: blueviolet;
    border-color: blueviolet;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: start;
  width: 100%;
  border-bottom: 2px solid blue;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;
