import Sale from "../Sale/Sale";
import style from "./Card.module.css";
export default function Card({product}){
    return(
        <div data-component-type="productCard" className={style.Card}
        >
            <div className={style.ProductDetail}>
                {product.isSale ? <Sale/> : null}
                <img
                  className={style.img}
                  src={product.productImage}
                  alt={`${product.productName} product`}
                />
                <div>
                  {product.productName}
                  <div>{product.price}</div>
                </div>
              </div>
        </div>
    );
}