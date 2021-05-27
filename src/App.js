import data from "./components/data/data.json";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import './App.css';
import SearchBar from "./components/SearchBar/SerachBar";
import { useState } from "react";
import Filter from "./components/Filter/Filter";

const productInfo = data;

function App() {
  console.log(productInfo);
  const [searchTerm, setSearchTerm] = useState("");
  const filterProducts = (productInfo, searchTerm)=>{
    if(!searchTerm){
      return productInfo;
    }

    return productInfo.filter((product)=>{
      const productName = product.productName.toLowerCase();
      return productName.includes(searchTerm);
    });
  };
  const filteredProducts = filterProducts(productInfo,searchTerm);
  console.log(filteredProducts);

  return (
    <div className="App">
      <div className="headerContainer">
        <Header/>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Filter/>
      </div>
      
      <div>
      {filteredProducts.map((product)=>{
          return (
          <Card key={product.index} type={product.type} >
            <div className="cardBody">
            <img src={product.productImage} alt={`${product.productName} product`}/>
            <div>
              {product.productName}
            <div>
            {product.price}
            </div>
            <div>

            </div>
            </div>
            
            </div>
          </Card>
            )
          
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
