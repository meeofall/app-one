import React from 'react';
import BetaLogo from '../images/realbeta.gif';


function Navbar() {
    return (
        <nav class="navbar navbar-light navbar-fluid fixed-top navbar-expand-xl navbar-inverse bg-white p-0">
        <div class="container container-fluid">
          
          <a class="navbar-brand" href="/">
          <img src={BetaLogo} alt="iSchoolManager Logo" width="70" height="64"></img> <span class="imgname text-primary">iNovate School Manager</span></a>
          
          
          <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
          </button>
         
      
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

          <a class="nav-link" href="/WhyiSchoolManager">Why iSM</a>
          <a class="nav-link" href="/Features">Features</a>
          <a class="nav-link" href="/Pricing">Pricing</a>
          <a class="nav-link" href="/Getting-Started">Getting Started</a>
          <a class="nav-link" href="/Contact-Us">Contact</a>
          <a class="nav-link" href="/Documentation">Docs</a>
          <a class="nav-link" href="/Faqs">FAQs</a>
          <a class="button btn btn-danger nav-liink" href="https://clients.inovateos.com/signup" target="_blank" type="submit">Get Started for free</a>
    
            </div>
  </div>
</nav>
    )
}

export default Navbar
