import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Loginpage from './pages/Loginpage';
import Contactpage from './pages/Contactpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Cart from './pages/shoppingcart';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import Deliveryorder from './pages/Deliveryorder';
import ProductList from './pages/DatabaseView';
import ProductForm from './components/ProductForm';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dbviewpage" element={<ProductList />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/deliveryorder" element={<Deliveryorder />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
