import './App.css';
import About from './components/layout/About/About';
import Contact from './components/layout/Contact/Contact';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header/Header';
import Hero from './components/layout/Hero/Hero';
import Projects from './components/layout/Projects/Projects';
import Testimonial from './components/layout/Testimonial/Testimonial';

document.documentElement.className = 'light';

function App() {
  return (
    <div id="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
      <div className="overlay"></div>
    </div>
  );
}


export default App;
