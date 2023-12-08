import ProductCard from "./components/productCard/productCard";
import "./styles/global.scss";
import searchIcon from "/images/search-icon.svg";

function App() {
  return (
    <>
      <header className="header__container">
        <img src={searchIcon} alt="test" />
        <h1>O que você está procurando?</h1>

        <input type="text" placeholder="Busque aqui" />
        <h2>X resultados</h2>
      </header>

      <main className="main__container">
        <aside className="filters__container">
          <h2>Filtros</h2>
          <nav>
            <ul>
              <li>
                <input type="checkbox" id="category" name="category" />
                <label htmlFor="category">category1 (XX)</label>
              </li>
              <li>
                <input type="checkbox" id="category2" name="category2" />
                <label htmlFor="category2">category2 (XX)</label>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="products__container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </>
  );
}

export default App;
