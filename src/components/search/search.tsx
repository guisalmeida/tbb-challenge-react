import { useContext, useEffect } from "react";
import { SearchContext } from "../../contexts/searchContext";
import ProductCard, { ProductType } from "../productCard/productCard";
import SearchFilters from "../searchFilters/searchFilters";
import Header from "../header/header";
import SearchInput from "../searchInput/searchInput";

import filterIcon from "../../assets/filter-icon.svg";

import productsData from "../../../productsCategory.json";
import "./search.scss";

const Search = () => {
  const { updateCategories, searchProducts, setIsFiltersOpen, setAllProducts } =
    useContext(SearchContext);

  useEffect(() => {
    const fetchProducts = () => {
      const products: ProductType[] = productsData.data.nodes;
      setAllProducts(products);
      updateCategories(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="search__container">
      <Header />

      <section className="search-input__container">
        <button
          className="search-input__button"
          onClick={() => setIsFiltersOpen(true)}
          aria-label="Open Filters"
        >
          <img src={filterIcon} alt="Filter icon" />
        </button>
        <SearchInput />
      </section>

      <SearchFilters />

      <main role="main" className="search-products__container">
        {searchProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </main>
    </div>
  );
};

export default Search;
