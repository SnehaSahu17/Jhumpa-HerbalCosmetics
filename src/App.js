import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full h-full webColor relative">
      <Navbar />
      <Home />
      {/* <Products/> */}
      <div className="bg-[#173D28]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
