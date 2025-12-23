import React from 'react';
import MyNavbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <MyNavbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;