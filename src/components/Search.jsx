import "./css-components/search.css";
const Search = () => {
  return (
    <div className="container-search">
      <form id="search-form" role="search">
        <input className="input-search" type="text" width="300px" />
      </form>
    </div>
  );
};

export default Search;
