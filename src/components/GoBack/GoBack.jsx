import { Link } from 'react-router-dom';

export const GoBack = ({ path }) => {
  return <Link to={path}>{'<--Go back'}</Link>;
};
