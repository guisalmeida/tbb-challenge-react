import { useContext, useEffect, useState } from "react";
import { SearchContext, ProductType } from "../../contexts/searchContext";
import ProductCard from "../productCard/productCard";
import SearchFilters from "../searchFilters/searchFilters";
import Header from "../header/header";
import SearchInput from "../searchInput/searchInput";

import loadingImage from "../../assets/loading.svg";
import filterIcon from "../../assets/filter-icon.svg";
import productsData from "../../../productsCategory.json";
import "./search.scss";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const { updateCategories, searchProducts, setIsFiltersOpen, setAllProducts } =
    useContext(SearchContext);

  useEffect(() => {
    /**
     * Function that simulates fetching products from an api.
     */
    const fetchProducts = async (): Promise<ProductType[] | void> => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const products: ProductType[] = productsData.data.nodes;

      setAllProducts(products);
      updateCategories(products);

      return setLoading(false);
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
        {loading ? (
          <div className="search-products__loading">
            <img src={loadingImage} alt="Loading" />
            <p>Buscando produtos...</p>
          </div>
        ) : (
          searchProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </main>
    </div>
  );
};

export default Search;
