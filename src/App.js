import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Investor from './components/Investor';

function App() {
  return (
    <div className="w-full h-full webColor relative">
      <Navbar />
      {/* <Home /> */}
      <Investor/>
      {/* <Aboutus/> */}
      {/* <Products/> */}
      {/* <div className="bg-[#173D28]">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
