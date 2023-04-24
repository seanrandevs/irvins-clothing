import { FaBars } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = ({ displayCart, totalQuantity }) => {
  return (
    <nav className="navbar">
        <span className="nav-icon">
            <FaBars />
        </span>            
            <Link to="/"className="irvins">Irvins</Link>
          <div className="cart-btn">
               <div className="sign-in">
                <Link to="/login" className="login">Login</Link>
                or
                <Link to="/register" className="register">Register</Link>
                </div>
                <Link to="/cart" className="cart-container">
                <h4>Cart</h4>
                  <div className="cart-icon">
                    <BsCart2 />
                    <div className="cart-items">{totalQuantity}</div>
                </div>
              </Link>
          </div>
    </nav>
  )
}

export default Header