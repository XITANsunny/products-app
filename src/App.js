import data from "./components/data/data.json";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SerachBar";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import style from"./App.module.css";

const PRODCUT_TYPE_ALL = "All";

const productInfo = data;
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productType, setProductType] = useState(PRODCUT_TYPE_ALL);

  const filterProducts = (productInfo, searchTerm, productType) => {
    return productInfo.filter((product) => {
      if (!searchTerm) {
        return true;
      }
      const productName = product.productName.toLowerCase();
      return productName.includes(searchTerm.toLowerCase());
    }).filter(product => {
      if (productType === PRODCUT_TYPE_ALL) {
        return true;
      }
      return product.type === productType;
    });
  };
  const filteredProducts = filterProducts(productInfo, searchTerm, productType);
  const productTypes = [PRODCUT_TYPE_ALL].concat(Array.from(new Set(productInfo.map((p) => p.type))))
  console.log(filteredProducts.length)

  return (
    <div className={style.App}>
      <div className={style.HeaderContainer}>
        <Header />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter
          filterType={productType}
          setFilterType={setProductType}
          productTypes={productTypes}
        />
      </div>
      <div className={style.ProductCardsContainer}>
        {filteredProducts.length === 0 ? <div>Sorry, 0 results found for {searchTerm}</div>:<></>}
        {filteredProducts.map((product) => {
          return (
            <Card product={product} key={product.index} type={product.type}>
            </Card>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
