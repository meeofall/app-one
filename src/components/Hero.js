import React from 'react';
import AppCapture from '../images/app_capture.png';
import AppCapture1 from '../images/appcapture1.png';
import AppCapture2 from '../images/appcapture2.png';


 
function Hero() {
    return (
        <>
        <div class="jumbotron jumbotron-fluid d-flex bg-white display44">
         
            <div class="container container-fluid m-3 mt-5 pb-3 pt-5 bg-white display4">
              <h1 class="display-4">Powering Schools</h1>
                  <p class="lead">with simple, yet detailed '<span class="easy"><i>easy-to-use</i></span>' management modules.</p>
                  <a class="btn btn-primary btn-lg" href="#getting started" role="button">Get Started for free</a>
                </div>
                

                <div class="container container-fluid m-4 p-5">
                    
                    <div id="carouselFade" class="carousel slide carousel-fade  m-1 p-1" data-ride="carousel" data-interval="9000">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img class="d-block w-100" src={AppCapture} alt="First slide"></img>
            <div class="carousel-cap d-none d-md-block">
                <p class="head-2 text-center p-3"><i>Best online school management software simplified</i></p>
            </div>                            
    </div>
                           

    <div class="carousel-item">
        <img class="d-block w-100" src={AppCapture1} alt="Second slide"></img>
        <div class="carousel-cap d-none d-md-block w-auto">
        <p class="head-2 text-center p-3"><i>Feature-Rich modules for fun-filled learning</i></p>
  </div>
        
    </div>
                            
    <div class="carousel-item">
        <img class="d-block w-100" src={AppCapture2} alt="Third slide"></img>
        <div class="carousel-cap d-none d-md-block w-auto">
        <p class="head-2 text-center p-3"><i>Focus on your growth offline. We take care of you online.</i></p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
                    
                </div>
        
        </div>
      
            <div class="bg-white display444">
                <div class="pl-5">
                    <div class="m-4 mb-0">
                    <h5> Best online school management software</h5>
                    <p>(with on-the-go <b>CBT</b>)</p>
                    </div>

                    <button class="icon-btn btn-lg btn-success btn-text p-3 m-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" fill="currentColor" class="bi bi-house-door-fill text-white" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/></svg> <small>Create School</small></button>
            <button type="button" class="icon-btn btn-lg btn-danger btn-text p-3 m-4 mt-1"><small>Access Demo</small>
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
