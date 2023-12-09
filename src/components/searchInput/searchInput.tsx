import "./searchInput.scss";
import searchIcon from "../../assets/search-icon.svg";

const SearchInput = () => {
  return (
    <div className="search-input--wrapper">
      <input className="search-input" type="text" placeholder="Busque aqui" />
      <button className="search-input--button">
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  );
};

export default SearchInput;
