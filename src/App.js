import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Homefeatures from './components/Homefeatures.js';
import Homecontent from './components/Homecontent.js';
import Contact from './pages/Contact.js';
import Homepricing from './components/Homepricing.js';
import Footer from './components/Footer.js';
import Faq from './pages/Faq.js';
import Pricing from './pages/Pricing.js';
import GettingStarted from './pages/GettingStarted.js';
import Home from './pages/Home.js';
import WhyiSchoolManager from './pages/WhyiSchoolManager.js';
import Features from './pages/Features.js';
import About from './pages/About.js';
import Terms from './pages/Terms.js';
import Privacy from './pages/Privacy.js';
import Docs from './pages/Docs.js';
import Affiliate from './pages/Affiliate.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
          <Hero />
          <Homefeatures />
          <Homepricing />
          <Homecontent />
          <Footer />
        </Route>
        
        <Route exact path="/Home">
          <Home />
        </Route>

      <Route path="/Contact-Us">
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

        <Route path="/Getting-Started">
          <GettingStarted />
          <Footer />
        </Route>

        <Route path="/Documentation">
          <Docs />
          <Footer />
        </Route>
             
        <Route path="/About">
          <About />
          <Footer />
        </Route>

        <Route path="/Terms">
          <Terms />
          <Footer />
        </Route>
        <Route path="/Privacy">
          <Privacy />
          <Footer />
        </Route>

        <Route path="/Faqs">
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
