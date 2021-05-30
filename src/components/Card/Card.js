import "./Card.css";
export default function Card({children, className="",...props}){
    return(
        <div className={`${className} Card`}
        {...props} >
            {children}
        </div>
    );
}