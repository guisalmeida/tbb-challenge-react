import ProductCard from "../productCard/productCard";
import searchIcon from "/images/search-icon.svg";

import "./search.scss";

const search = () => {
  return (
    <section className="search__container">
      <figure className="search__image">
        <img src={searchIcon} alt="test" />
      </figure>
      <header className="search-header__container">
        <h1>
          O que você <span>está procurando?</span>
        </h1>

        <input type="text" placeholder="Busque aqui" />

        <div className="search-header__bottom">
          <button className="search-filters__button">Category</button>
          <button className="search-filters__button">Category</button>
          <button className="search-filters__button">Category</button>
          <button className="search-filters__button">Category</button>
          <button className="search-filters__button">Category</button>
          <button className="search-filters__button">Category</button>
          <button className="search-filters__button">Category</button>
          <button className="search-filters__button">Category</button>
        </div>
      </header>

      <aside className="search-filters__container">
        <h2>
          Filtros
          <span className="search-filters__results">123 resultados</span>
        </h2>
        <nav>
          <ul>
            <li>
              <input type="checkbox" id="category" name="category" />
              <label htmlFor="category">category1 (22)</label>
            </li>
            <li>
              <input type="checkbox" id="category2" name="category2" />
              <label htmlFor="category2">category2 (33)</label>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className="search-products__container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </section>
  );
};

export default search;
