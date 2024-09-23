import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Intro from './Components/Intro';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import LoginPage from './Components/Login';
import { AuthProvider } from './Components/AuthContext';

const App = () => {

  const location = useLocation();
  return (
    <div>
      <AuthProvider>
        {location.pathname !== '/' && <Header />}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>

    </div>
  );
};

export default App;
