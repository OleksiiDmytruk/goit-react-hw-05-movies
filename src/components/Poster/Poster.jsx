export const Poster = ({ path, width }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const defaultPath = 'https://image.tmdb.org/t/p/w500/';

  return (
    <img
      src={path ? `${defaultPath}${path}` : defaultImg}
      width={width}
      alt="poster"
    />
  );
};
