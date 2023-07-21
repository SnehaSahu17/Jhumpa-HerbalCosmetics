import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full h-full webColor relative">
      <Navbar />
      <Home/> 
      {/* <Products/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
