import { GoTo } from './GoBack.styled';

export const GoBack = ({ path }) => {
  return <GoTo to={path}>{'<--Go back'}</GoTo>;
};
