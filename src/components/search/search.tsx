import { useContext, useEffect } from "react";
import { SearchContext } from "../../contexts/searchContext";
import ProductCard, { ProductType } from "../productCard/productCard";
import SearchFilters from "../searchFilters/searchFilters";
import Header from "../header/header";
import SearchInput from "../searchInput/searchInput";

import searchImage from "/images/search.svg";
import filterIcon from "../../assets/filter-icon.svg";

import productsData from "../../../productsCategory.json";
import "./search.scss";

const Search = () => {
  const { searchProducts, setIsFiltersOpen, setAllProducts } =
    useContext(SearchContext);

  useEffect(() => {
    const products: ProductType[] = productsData.data.nodes;

    setAllProducts(products);
  }, [setAllProducts]);

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

      <SearchFilters products={searchProducts} />

      <main>
        <div className="search-products__container">
          {searchProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default Search;
