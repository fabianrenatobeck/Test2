import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Drinks from './components/Drinks';
import Cart from './components/Cart';
import Home from './components/Home';
import Gallery from './components/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const drinksList = [
        { id: 1, name: 'Coca-Cola', price: 1.99, description: 'Refreshing soda drink.' },
        { id: 2, name: 'Pepsi', price: 1.89, description: 'Classic cola flavor.' },
        { id: 3, name: 'Orange Juice', price: 2.5, description: 'Freshly squeezed orange juice.' },
        { id: 4, name: 'Red Bull', price: 2.99, description: 'Energy drink to boost your day.' },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (drink, quantity) => {
        setCart((prevCart) => {
            const existingDrink = prevCart.find((item) => item.id === drink.id);
            if (existingDrink) {
                // If the drink is already in the cart, increase its quantity
                return prevCart.map((item) =>
                    item.id === drink.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                // If the drink is not in the cart, add it with the specified quantity
                return [...prevCart, { ...drink, quantity }];
            }
        });
    };

    const removeFromCart = (drinkId, quantity) => {
        setCart((prevCart) => {
            const existingDrink = prevCart.find((item) => item.id === drinkId);
            if (existingDrink) {
                if (existingDrink.quantity <= quantity) {
                    // If the quantity to remove is greater or equal, remove the drink from the cart
                    return prevCart.filter((item) => item.id !== drinkId);
                } else {
                    // If not, just decrease the quantity
                    return prevCart.map((item) =>
                        item.id === drinkId ? { ...item, quantity: item.quantity - quantity } : item
                    );
                }
            }
            return prevCart;
        });
    };

    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Drinks drinks={drinksList} addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                    <Route path="/gallery" element={<Gallery />} /> {/* Galerie-Seite */}

                </Routes>
            </div>
        </Router>
    );
};

export default App;