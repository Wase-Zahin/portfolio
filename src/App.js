import Aos from 'aos';
import { useState, useEffect } from 'react';
import './App.css';
import About from './components/layout/About';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Projects from './components/layout/Projects';

function App() {
    useEffect(() => {
      Aos.init({
        duration : 2000
      });
    }, []);
    
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
