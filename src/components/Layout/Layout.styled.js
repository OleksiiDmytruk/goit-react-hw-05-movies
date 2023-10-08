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

  &.active {
    color: blue;
  }
`;
