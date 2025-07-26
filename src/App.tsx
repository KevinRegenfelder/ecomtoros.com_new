import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PartnerSlider from './components/PartnerSlider';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <PartnerSlider />
        <Stats />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;