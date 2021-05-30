import style from "./Card.module.css";
export default function Card({children, className="",...props}){
    return(
        <div data-componentType="productCard" className={`${className} ${style.Card}`}
        {...props} >
            {children}
        </div>
    );
}