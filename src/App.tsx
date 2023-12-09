import Search from "./components/search/search";
import "./styles/global.scss";

import productsData from '../productsCategory.json'

function App() {
  return (
    <>
      <Search products={productsData.data.nodes}/>
    </>
  );
}

export default App;
