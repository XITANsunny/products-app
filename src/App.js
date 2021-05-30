import data from "./components/data/data.json";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SerachBar";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import Sale from "./components/Sale/Sale";
import "./App.css";

const PRODCUT_TYPE_ALL = "All";

const productInfo = data;
function App() {
  console.log(productInfo);
  const [searchTerm, setSearchTerm] = useState("");
  const [productType, setProductType] = useState(PRODCUT_TYPE_ALL);

  const filterProducts = (productInfo, searchTerm, productType) => {
    return productInfo.filter((product) => {
      if (!searchTerm) {
        return true;
      }
      const productName = product.productName.toLowerCase();
      return productName.includes(searchTerm);
    }).filter(product => {
      if (productType === PRODCUT_TYPE_ALL) {
        return true;
      }
      return product.type === productType;
    });
  };
  const filteredProducts = filterProducts(productInfo, searchTerm, productType);
  const productTypes = [PRODCUT_TYPE_ALL].concat(Array.from(new Set(productInfo.map((p) => p.type))));
  console.log(productType);

  return (
    <div className={"App"}>
      <div className={"HeaderContainer"}>
        <Header />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter
          filterType={productType}
          setFilterType={setProductType}
          productTypes={productTypes}
        />
      </div>
      <div className={"ProductCard"}>
        {filteredProducts.map((product) => {
          return (
            <Card key={product.index} type={product.type}>
              <div className={"ProductDetail"}>
                {product.isSale ? <Sale/> : null}
                <img
                  src={product.productImage}
                  alt={`${product.productName} product`}
                />
                <div>
                  {product.productName}
                  <div>{product.price}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
