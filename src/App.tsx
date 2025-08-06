import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Subsidiaries from './components/Subsidiaries';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Subsidiaries />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;