import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Features from './components/Features.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import Faq from './pages/Faq.js';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
      <>
        <Navbar />
        <Hero />
        <Features />
        <Content />
        <Footer />
        <Faq />

      </>
  );
}

export default App;
