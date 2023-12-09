import { createContext, useState } from "react";

type SearchContextType = {
  isFiltersOpen: boolean;
  setIsFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextType>({
  isFiltersOpen: false,
  setIsFiltersOpen: () => null,
});

type SearchProviderPropType = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: SearchProviderPropType) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const value = {
    isFiltersOpen,
    setIsFiltersOpen,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
