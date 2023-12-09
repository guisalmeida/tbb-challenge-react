import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";
import ProductCard from "../productCard/productCard";
import SearchFilters from "../searchFilters/searchFilters";
import searchImage from "/images/search.svg";
import filterIcon from "../../assets/filter-icon.svg";

import Header from "../header/header";
import SearchInput from "../searchInput/searchInput";
import { ProductType } from "../productCard/productCard";
import "./search.scss";

type SearchPropType = {
  products: ProductType[];
};

const Search = ({ products }: SearchPropType) => {
  const { setIsFiltersOpen } = useContext(SearchContext);
  return (
    <section className="search__container">
      <figure className="search__image">
        <img src={searchImage} alt="A man searching with a glass" />
      </figure>

      <Header />

      <section className="search-input--mobile">
        <button
          className="search-input__button"
          onClick={() => setIsFiltersOpen(true)}
        >
          <img src={filterIcon} alt="Filter icon" />
        </button>
        <SearchInput />
      </section>

      <SearchFilters products={products} />

      <main>
        <div className="search-products__container">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default Search;
