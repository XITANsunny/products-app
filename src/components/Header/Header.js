import logo from '../../assets/logo.svg';
import './Header.css';


const Header =()=>{
    return (
    <div className="shopLogo sticky"> 
        <img src={logo} alt="bottle shop logo" />
    </div>)
};

export default Header;