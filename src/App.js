import Aos from 'aos';
import { useState, useEffect } from 'react';
import './App.css';
import About from './components/layout/About/About';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero/Hero';
import Projects from './components/layout/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
