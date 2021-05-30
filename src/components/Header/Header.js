import logo from '../../assets/logo.svg';
import style from './Header.module.css';


const Header =()=>{
    return (
    <div className={style.shopLogo}> 
        <img src={logo} alt="bottle shop logo" />
    </div>)
};

export default Header;