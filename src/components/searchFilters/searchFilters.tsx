import { useContext } from "react";
import CategoryTag from "../categoryTag/categoryTag";
import { ProductType } from "../productCard/productCard";

import { SearchContext } from "../../contexts/searchContext";

import closeIcon from "../../assets/close-icon.svg";
import "./searchFilters.scss";

type FiltersPropType = {
  products: ProductType[];
};

const SearchFilters = ({ products }: FiltersPropType) => {
  const { isFiltersOpen, setIsFiltersOpen } = useContext(SearchContext);

  return (
    <aside
      className={`search-filters__container ${isFiltersOpen ? "open" : ""}`}
    >
      <button
        type="button"
        className="search-filters__close-button"
        title="Fechar Menu"
        aria-label="Fechar Menu"
        onClick={()=> setIsFiltersOpen(false)}
      >
        <img src={closeIcon} alt="Close icon" />
      </button>

      <h2>
        Filtros
        <span className="search-filters__results">123 resultados</span>
      </h2>

      <div className="search-filters__tags">
        <CategoryTag category="Favoritos" />
        <CategoryTag category="testeteste" />
        <CategoryTag category="testeteste" />
        <CategoryTag category="teste" />
        <CategoryTag category="teste" />
      </div>

      <nav>
        <ul>
          <li>
            <input type="checkbox" id="favorites" name="favorites" />
            <label htmlFor="favorites">Favoritos (0)</label>
          </li>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <input type="checkbox" id="category2" name="category2" />
                <label htmlFor="category2">{product.category.name} (33)</label>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SearchFilters;
