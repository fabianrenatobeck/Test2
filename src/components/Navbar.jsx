import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Drink Shop</h1>
            <ul className="nav-links justify-content-end ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>


            </ul>
        </nav>
    );
};

export default Navbar;
