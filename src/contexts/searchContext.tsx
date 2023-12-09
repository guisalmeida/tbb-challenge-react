import { createContext, useState } from "react";
import { ProductType } from "../components/productCard/productCard";

type SearchContextType = {
  allProducts: ProductType[];
  searchProducts: ProductType[];
  isFiltersOpen: boolean;
  setAllProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setSearchProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setIsFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextType>({
  allProducts: [],
  searchProducts: [],
  isFiltersOpen: false,
  setAllProducts: () => null,
  setIsFiltersOpen: () => null,
  setSearchProducts: () => null,
});

type SearchProviderPropType = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: SearchProviderPropType) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [searchProducts, setSearchProducts] = useState<ProductType[]>([]);

  const value = {
    isFiltersOpen,
    allProducts,
    searchProducts,
    setIsFiltersOpen,
    setAllProducts,
    setSearchProducts,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
