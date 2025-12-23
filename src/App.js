import React from 'react';
import MyNavbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import MentionsLegales from './pages/Mentions-légales';

function App() {
  return (
    <div>
      <MyNavbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <MentionsLegales />
      <Footer />
    </div>
  );
}

export default App;