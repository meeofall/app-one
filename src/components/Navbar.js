import React from 'react';
import BetaLogo from '../images/realbeta.gif';


function Navbar() {
    return (
        <nav class="navbar navbar-light navbar-fluid fixed-top navbar-expand-lg bg-white p-0">
        <div class="container container-fluid">
          
          <a class="navbar-brand" href="ischoolmanager.com">
          <img src={BetaLogo} alt="iSchoolManager Logo" width="70" height="64"></img> iNovate School Manager</a>
          
          <button class="navbar-toggler border-0 p-0 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
          </button>
      
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

          <a class="nav-link" href="#WhyiSchoolManager">Why iSchoolManager</a>
          <a class="nav-link" href="#getting started">Getting Started</a>
          <a class="nav-link" href="#pricing">Pricing</a>
          <a class="nav-link" href="#contact">Contact US</a>
          <a class="nav-link" href="#doc">Docs</a>
          <a class="nav-link" href="#support">Support</a>
          <a class="nav-link" href="Faq">Faq</a>
      
          <button class="btn btn-danger" type="submit">Get Started for free</button>
    
    </div>
  </div>
</nav>
    )
}

export default Navbar
