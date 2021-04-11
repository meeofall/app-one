import React from 'react';
import AppCapture from '../images/app_capture.png';

 
function Hero() {
    return (
        <>
        <div class="jumbotron jumbotron-fluid d-flex bg-white pt-5 pb-0 p-4 m-5 mb-1 display44">
         
            <div class="container container-fluid m-3 mt-5 pb-3 pt-5 bg-white display4">
              <h1 class="display-4">Empowering Schools</h1>
                  <p class="lead">with simple, yet detailed management modules.</p>
                  <a class="btn btn-primary btn-lg" href="#getting started" role="button">Get Started for free</a>
            </div>
                <div class="container container-fluid m-5 p-4">
              <img src={AppCapture} class="img-fluid rounded appcapture" alt="App front pages" width="100%" height="90%"></img>
                </div>
        
        </div>
      
            <div class="bg-white m-5">
                <div class="m-4">
                    <div class="m-4">
                    <h5> Best online school management software</h5>
                    <p>(with on-the-go CBT)</p>
                    </div>

                    <button class="icon-btn btn-lg btn-success btn-text animatebutton p-3 m-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" fill="currentColor" class="bi bi-house-door-fill text-white" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/></svg> Create School</button>
            <button type="button" class="icon-btn btn-lg btn-danger btn-text animatebutton p-3 m-4 mt-1">Access Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill text-white" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
                </button>
            </div>
                

                
            
                </div>
            </>
    );
}

export default Hero;
