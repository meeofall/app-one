import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Features1 from './components/features.js';
import Content1 from './components/content.js';
import Contact from './pages/Contact.js';
import Pricing1 from './components/pricing.js';
import Footer from './components/Footer.js';
import Faq from './pages/Faq.js';
import Pricing from './pages/Pricing.js';
import GettingStarted from './pages/GettingStarted.js';
import Home from './pages/Home.js';
import WhyiSchoolManager from './pages/WhyiSchoolManager.js';
import Features from './pages/Features.js';
import Docs from './pages/Docs.js';
import Affiliate from './pages/Affiliate.js';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
          <Hero />
          <Features1 />
          <Pricing1 />
          <Content1 />
          <Footer />
      </Route>

      <Route path="/Contact">
        <Contact />
      </Route>
            
        <Route path="/WhyiSchoolManager">
          <WhyiSchoolManager />
          <Footer />
        </Route>

        <Route path="/Features">
          <Features />
          <Footer />
        </Route>

        <Route path="/Pricing">
          <Pricing />
          <Footer />
        </Route>

        <Route path="/getting-started">
          <GettingStarted />
          <Footer />
        </Route>

        <Route path="/Documentation">
          <Docs />
          <Footer />
        </Route>
             

        <Route path="/Faq">
          <Faq />
        </Route>

        <Route path="/Affiliate">
          <Affiliate />
          <Footer />
        </Route>
            
      </Switch>
     
      </Router>
  );
}

export default App;
