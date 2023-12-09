import ProductCard from "../productCard/productCard";
import Filters from "../searchFilters/searchFilters";
import searchImage from "/images/search.svg";
import filterIcon from "../../assets/filter-icon.svg";

import Header from "../header/header";
import SearchInput from "../searchInput/searchInput";
import "./search.scss";

const search = () => {
  return (
    <section className="search__container">
      <figure className="search__image">
        <img src={searchImage} alt="A man searching with a glass" />
      </figure>

      <Header />

      <section className="search-input--mobile">
        <button className="search-input__button">
          <img src={filterIcon} alt="Filter icon" />
        </button>
        <SearchInput />
      </section>

      <Filters />

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
