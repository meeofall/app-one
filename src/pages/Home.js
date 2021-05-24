import React from 'react';

import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import Features1 from '../components/features.js';
import Content1 from '../components/content.js';
import Pricing1 from '../components/pricing.js';
import Footer from '../components/Footer.js';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features1 />
            <Pricing1 />
            <Content1 />
            <Footer />
        </div>
    )
}

export default Home
