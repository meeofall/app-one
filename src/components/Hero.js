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
                  <p class="lead">with simple, yet detailed <span class="easy"><i>'easy-to-use</i>'</span> management modules.</p>
                  <a class="btn btn-primary btn-lg" href="https://clients.inovateos.com/signup" role="button">Get Started for free</a>
                </div>
                

                <div class="container container-fluid m-4 p-5 hero-carousel">
                    
                    <div id="carouselFade" class="carousel slide carousel-fade  m-1 p-1" data-ride="carousel" data-interval="7000">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img class="d-block w-100" src={AppCapture} alt="First slide"></img>
            <div class="carousel-cap d-none d-md-block">
                <p class="head-2 text-center p-3 text-wrap"><i>Best online school management software simplified</i></p>
            </div>                            
    </div>
                           

    <div class="carousel-item">
        <img class="d-block w-100" src={AppCapture1} alt="Second slide"></img>
        <div class="carousel-cap d-none d-md-block w-auto">
        <p class="head-2 text-center p-3 text-wrap"><i>Feature-Rich modules for fun-filled learning</i></p>
  </div>
        
    </div>
                            
    <div class="carousel-item">
        <img class="d-block w-100" src={AppCapture2} alt="Third slide"></img>
        <div class="carousel-cap d-none d-md-block w-auto">
        <p class="head-2 text-center p-3 text-wrap"><i>Focus on your growth offline. We take care of you online.</i></p>
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
                <div>
                    <div class="m4">
                    <h5> Best online school management software</h5>
                    <p>(with on-the-go <b>CBT</b>)</p>
                    </div>

            <a class="btn btn-lg btn-success btn-text hero-button text-white" href="https://clients.inovateos.com/signup"><i class="fa fa-home" width="20" height="20"></i> <small>Create School</small>
            </a>
            
            <a class="btn btn-lg btn-danger btn-text hero-button text-white" href="https://beta-class.com/sch/demo"><small>Access Demo</small>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill text-white" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>              
              </a>
            </div>
                

                
            
                </div>
            </>
    );
}

export default Hero;
