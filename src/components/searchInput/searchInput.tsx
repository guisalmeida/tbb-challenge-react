import { ChangeEvent, useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";

import searchIcon from "../../assets/search-icon.svg";
import "./searchInput.scss";

const SearchInput = () => {
  const { query, allProducts, searchProducts, setQuery, updateCategories } =
    useContext(SearchContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value.trim().toLowerCase();
    setQuery(newQuery);
    if (newQuery.length === 0) {
      return updateCategories(allProducts);
    }

    return updateCategories(searchProducts);
  };

  return (
    <div className="search-input__wrapper">
      <input
        name="Search input"
        className="search-input"
        type="text"
        placeholder="Busque aqui"
        onChange={handleSearch}
        value={query}
      />
      <button className="search-input__button--search-icon">
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  );
};

export default SearchInput;
