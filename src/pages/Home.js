import React from 'react';

import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import Homefeatures from '../components/Homefeatures.js';
import Homecontent from '../components/Homecontent.js';
import Homepricing from '../components/Homepricing.js';
import Footer from '../components/Footer.js';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Homefeatures />
            <Homepricing />
            <Homecontent />
            <Footer />
        </div>
    )
}

export default Home;
