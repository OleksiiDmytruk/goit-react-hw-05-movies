export const SearchForm = ({ getSearch }) => {
  return (
    <form>
      <input type="text" name="query" />
      <button type="submit" onSubmit={getSearch}>
        Search
      </button>
    </form>
  );
};
