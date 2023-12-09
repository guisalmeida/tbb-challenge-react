import CategoryTag from '../categoryTag/categoryTag'
import SearchInput from '../searchInput/searchInput'
import searchImage from "/images/search.svg";
import './header.scss'

const Header = () => {
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
          <CategoryTag category="teste" />
          <CategoryTag category="teste" />
        </div>
      </header>
  )
}

export default Header
