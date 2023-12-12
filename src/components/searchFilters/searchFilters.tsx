import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";
import CategoryTag from "../categoryTag/categoryTag";

import closeIcon from "../../assets/close-icon.svg";
import "./searchFilters.scss";

const SearchFilters = () => {
  const {
    searchProducts,
    categories,
    isFiltersOpen,
    setCategoryChecked,
    setIsFiltersOpen,
  } = useContext(SearchContext);

  const handleChecked = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const value: boolean = event.currentTarget.checked;
    setCategoryChecked(value, id);
  };

  return (
    <aside
      className={`search-filters__container ${isFiltersOpen ? "open" : ""}`}
    >
      <button
        type="button"
        className="search-filters__close-button"
        title="Fechar Menu"
        aria-label="Fechar Menu"
        onClick={() => setIsFiltersOpen(false)}
      >
        <img src={closeIcon} alt="Close icon" />
      </button>

      <h2>
        Filtros
        <span className="search-filters__results">
          {`${searchProducts.length} resultado${
            searchProducts.length > 1 ? "s" : ""
          }`}
        </span>
      </h2>

      <div className="search-filters__tags">
        {categories.map((cat) => {
          if (cat.checked) {
            return <CategoryTag key={cat._id} category={cat} />;
          }
        })}
      </div>

      <nav>
        <ul>
          {categories.map((category) => {
            return (
              <li key={category._id}>
                <input
                  type="checkbox"
                  checked={category.checked}
                  id={category._id}
                  name={category.name}
                  onChange={(e) => handleChecked(e, category._id)}
                />
                <label htmlFor={category._id}>
                  {category.name} ({category.quantity})
                </label>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SearchFilters;
