import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const Item = styled.li`
  width: calc(100% - 20 * 3 / 4);
  border: 2px solid blue;
  border-radius: 6px;
  margin-bottom: 8px;
`;
export const Title = styled.h3`
  width: 100%;
`;
