import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../components/productCard/productCard";

export type CategoryType = {
  name: string;
  _id: string;
  checked: boolean;
  quantity: number;
};

type SearchContextType = {
  query: string;
  allProducts: ProductType[];
  searchProducts: ProductType[];
  isFiltersOpen: boolean;
  categories: CategoryType[];
  setAllProducts: Dispatch<SetStateAction<ProductType[]>>;
  setSearchProducts: Dispatch<SetStateAction<ProductType[]>>;
  setIsFiltersOpen: Dispatch<SetStateAction<boolean>>;
  setCategories: Dispatch<SetStateAction<CategoryType[]>>;
  setCategoriesChecked: (bool: boolean, id: string) => void;
  setQuery: Dispatch<SetStateAction<string>>;
  updateCategories: (products: ProductType[]) => void;
};

export const SearchContext = createContext<SearchContextType>({
  query: "",
  allProducts: [],
  searchProducts: [],
  categories: [],
  isFiltersOpen: false,
  setAllProducts: () => null,
  setIsFiltersOpen: () => null,
  setSearchProducts: () => null,
  setCategories: () => null,
  setCategoriesChecked: () => null,
  setQuery: () => null,
  updateCategories: () => null,
});

type SearchProviderPropType = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: SearchProviderPropType) => {
  const [query, setQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [searchProducts, setSearchProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const setCategoriesChecked = (bool: boolean, id: string) => {
    const newCategories = categories.map((cat) => {
      if (cat._id === id) {
        cat.checked = bool;
      }
      return cat;
    });
    setCategories(newCategories);
  };

  const updateCategories = (products: ProductType[] = allProducts) => {
    const existingCats: Set<CategoryType> = new Set();

    const updatedCategories = products.reduce(
      (prevCategories: CategoryType[], prod: ProductType) => {
        const existingCat = prevCategories.find(
          (prevCategory) => prevCategory._id === prod.category._id
        );

        if (existingCat) {
          existingCats.add(existingCat);

          const matchingProducts = products.filter(
            (prod) => prod.category._id === existingCat._id
          );
          existingCat.quantity = matchingProducts.length;
        } else {
          const newCat: CategoryType = {
            name: prod.category.name,
            _id: prod.category._id,
            checked: false,
            quantity: 1,
          };
          existingCats.add(newCat);
          prevCategories.push(newCat);
        }

        return prevCategories;
      },
      [...categories]
    );

    const matchingCategories = Array.from(existingCats);

    // Identify categories in updatedCategories that are not in matchingCategories
    const categoriesNotInMatching = updatedCategories.filter(
      (cat) => !matchingCategories.some((matchCat) => matchCat._id === cat._id)
    );

    // Set quantity to 0 for categories not in matchingCategories
    const updatedCategoriesWithZeros = updatedCategories.map((cat) =>
      categoriesNotInMatching.some(
        (notInMatchCat) => notInMatchCat._id === cat._id
      )
        ? { ...cat, quantity: 0 }
        : cat
    );

    return setCategories(updatedCategoriesWithZeros);
  };

  const filterByQuery = () => {
    if (query === "") {
      return allProducts;
    }

    const filteredProducts = allProducts.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );

    return filteredProducts;
  };

  const filterByCategory = () => {
    const filteredProducts = allProducts.filter((prod) => {
      return categories.some(
        (cat) => cat._id === prod.category._id && cat.checked
      );
    });

    return filteredProducts.length > 0 ? filteredProducts : searchProducts;
  };

  const filterProducts = () => {
    const productsByQuery = filterByQuery();
    const productsByCategory = filterByCategory();

    if (categories.every((cat) => !cat.checked)) {
      return productsByQuery;
    }

    const uniqueProducts: Set<ProductType> = new Set();
    productsByQuery.forEach((prod) => {
      if (
        productsByCategory.some((categoryProd) => categoryProd.id === prod.id)
      ) {
        uniqueProducts.add(prod);
      }
    });

    const filteredProducts = Array.from(uniqueProducts);
    return filteredProducts;
  };

  useEffect(() => {
    setSearchProducts(filterProducts());
  }, [categories, query]);

  const value = {
    query,
    isFiltersOpen,
    allProducts,
    searchProducts,
    categories,
    setIsFiltersOpen,
    setAllProducts,
    setSearchProducts,
    setCategories,
    setCategoriesChecked,
    setQuery,
    updateCategories,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
