import { useEffect, useState, useMemo } from 'react';
import './scss/main.scss';
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Cart from './components/Cart';
import LoggedIn from './components/LoggedIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Login functions and state
  const adminUser = {
    email: "admin@admin.com", 
    password: "admin123"
   }

   const [users, setUsers] = useState([]);
   const [user, setUser] = useState({email: ''});
   const [error, setError] = useState('');

  const LoginFunc = details => {

    if(details.email === adminUser.email
    && details.password === adminUser.password) {
     console.log("Logged in!");
     setUser({email: details.email})
    } else {
      setError("Details do not match!")
    }
  }

  const Logout = () => {
    setUser({email: ''});
  }

  // Product page and cart functions and state
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("CART")) || []);
  const [products, setProducts] = useState([]);
  // Get products from api and set them in products array.
 useEffect(() => {
  const getProducts = async () => {
    const productsFromServer = await fetch('https://fakestoreapi.com/products?limit=8');
    const data = await productsFromServer.json();
      setProducts(data);
  }
  getProducts();
 }, []);

 // Save cart to local storage
 useEffect(() => {
  localStorage.setItem("CART" , JSON.stringify(cart));
 }, [cart])

 // Set total price and total items in header
  const { totalQuantity, totalPrice } = useMemo(() => {
    return cart.reduce(({ totalQuantity, totalPrice }, { price, numberOfUnits }) => ({
        totalQuantity: totalQuantity + numberOfUnits,
        totalPrice: totalPrice + (numberOfUnits * price),
      }), {
        totalQuantity: 0,
        totalPrice: 0,
      });
  }, [cart]);

  // OnAdd 
  const onAdd = (products) => {
     const product = cart.find((item) => item.id === products.id);
     if(product) {
      setCart(cart.map((item) => 
        item.id === products.id ? {...product, numberOfUnits: product.numberOfUnits + 1} : item
      ));
    } else {
      setCart([...cart, {...products, numberOfUnits: 1}]);
    }
  };
  //onRemove
  const onRemove = (products) => {
    const product = cart.find((item) => item.id === products.id);
    if(product.numberOfUnits === 1) {
      setCart(cart.filter((item) => 
      item.id !== products.id))
    } else {
      setCart(cart.map((item) => 
      item.id === products.id ? {...product, numberOfUnits: product.numberOfUnits - 1} : item
      ));
    }
  }
  // Remove items from cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }
   return (
    <>
      <Routes>
        <Route path="/" element=
        {<Home 
        products={products} 
        onAdd={onAdd}
        totalQuantity={totalQuantity}
        />} />
        <Route path="login" element=
        {(user.email !== "") ? (
        <LoggedIn user={user} Logout={Logout} />          
        ) : (
        <Login 
        totalQuantity={totalQuantity} 
        LoginFunc={LoginFunc}
        error={error} 
        /> )} />
        <Route path="register" element={
        <Register 
        totalQuantity={totalQuantity} 
        users={users}
        setUsers={setUsers}
        // saveValues={saveValues}
        />} />
        <Route path="about" element={<AboutUs totalQuantity={totalQuantity} />} />
        <Route path="cart" element={<Cart 
        totalQuantity={totalQuantity}
        cart={cart}
        totalPrice={totalPrice}
        removeItem={removeItem}
        setCart={setCart}
        onAdd={onAdd}
        onRemove={onRemove}
        />} />
      </Routes>
    </>
  )
}

export default App;
