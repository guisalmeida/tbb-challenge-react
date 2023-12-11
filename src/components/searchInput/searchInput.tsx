import { ChangeEvent, useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";
import searchIcon from "../../assets/search-icon.svg";

import "./searchInput.scss";

const SearchInput = () => {
  const { allProducts, searchProducts, setQuery, updateCategories } =
    useContext(SearchContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim().toLowerCase();
    setQuery(query);
    if (query.length === 0) {
      return updateCategories(allProducts);
    }

    return updateCategories(searchProducts);
  };

  return (
    <div className="search-input--wrapper">
      <input
        name="Search input"
        className="search-input"
        type="text"
        placeholder="Busque aqui"
        onChange={handleSearch}
      />
      <button className="search-input--button">
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  );
};

export default SearchInput;
