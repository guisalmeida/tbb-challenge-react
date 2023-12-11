import CategoryTag from "../categoryTag/categoryTag";
import SearchInput from "../searchInput/searchInput";
import searchImage from "/images/search.svg";
import "./header.scss";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";

const Header = () => {
  const { categories } = useContext(SearchContext);

  return (
    <header className="search-header__container">
      <figure className="search-header__image">
        <img src={searchImage} alt="A man searching with a glass" />
      </figure>
      <h1>
        O que você <span>está procurando?</span>
      </h1>

      <section className="search-input--desktop">
        <SearchInput />
      </section>

      <div className="search-header__bottom">
        {categories.map((cat) => {
          if (cat.checked) {
            return <CategoryTag key={cat._id} category={cat} />;
          }
        })}
      </div>
    </header>
  );
};

export default Header;
