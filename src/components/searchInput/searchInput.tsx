import { ChangeEvent, useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";
import searchIcon from "../../assets/search-icon.svg";

import "./searchInput.scss";

const SearchInput = () => {
  const { allProducts, setSearchProducts } = useContext(SearchContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim();
    if (query === "") {
      return setSearchProducts([]);
    }

    const searchProducts = allProducts.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );

    return setSearchProducts(searchProducts);
  };

  return (
    <div className="search-input--wrapper">
      <input
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
