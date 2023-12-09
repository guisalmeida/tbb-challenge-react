import CategoryTag from "../categoryTag/categoryTag";
import closeIcon from "../../assets/close-icon.svg";
import "./searchFilters.scss";

const filters = () => {
  return (
    <aside className="search-filters__container">
      <button
        type="button"
        className="search-filters__close-button"
        title="Fechar Menu"
        aria-label="Fechar Menu"
      >
        <img src={closeIcon} alt="Close icon" />
      </button>

      <h2>
        Filtros
        <span className="search-filters__results">123 resultados</span>
      </h2>

      <div className="search-filters__tags">
        <CategoryTag category="teste" />
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
          <li>
            <input type="checkbox" id="category2" name="category2" />
            <label htmlFor="category2">category2 (33)</label>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default filters;
