import React from 'react';
import Picstory101 from '../images/accounts.png';
import Picstory102 from '../images/communication.png';
import Picstory103 from '../images/academic.png';
import Picstory104 from '../images/portal.png';
import Picstory105 from '../images/admin-icon.png';
import Picstory106 from '../images/analytics.png';



function Features() {
    return (
            
        <section class="pt-5 pb-5 section-parent">
  <div class="container container-fluid mb-5 pb-5 mt-3">
    <div class="row m-auto wrapper">
        <div class="col-6 features-head-div m-auto main-div main-div1">
            <h2 class="m-5 mx-0 mt-2 features-head-text">Amazing Features </h2>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i class="fa fa-arrow-left"></i>
            </a>
            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i class="fa fa-arrow-right"></i>
            </a>
        </div>
        <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">

                            <div class="col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title"><img class="img-fluid feature-short" alt="..." src={Picstory105} /> ADMINISTRATION</h4>
                                    <div class="card-body">
                                      <p class="card-text">-Online Admission</p>
                                        <p class="card-text">-Library Management</p>
                                        <p class="card-text">-Transport Management</p>
                                       <p class="card-text">-Student and Teacher Management</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title"><img class="img-fluid feature-short" alt="..." src={Picstory102} /> COMMUNICATION</h4>
                                    <div class="card-body">
                                      <p class="card-text">-Mass emailing</p>
                                        <p class="card-text">-Bulk SMS</p>
                                        <p class="card-text">-Internal Notifications</p>
                                       <p class="card-text">-Event Scheduling</p>
                                       <p class="card-text">-Timetable</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title"><img class="img-fluid feature-short" alt="..." src={Picstory104} /> PORTALS</h4>
                                    <div class="card-body">
                                      <p class="card-text">-Admin</p>
                                        <p class="card-text">-Teachers</p>
                                        <p class="card-text">-Students</p>
                                       <p class="card-text">-Parents</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <img class="img-fluid feature-short" alt="---" src={Picstory103} />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <img class="img-fluid feature-short" alt="---" src={Picstory101} />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            
                    
                            <div class="col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <img class="img-fluid feature-short" alt="---" src={Picstory106} />
                                    <div class="card-body">
                                        <h4 class="card-title">Special title treatment</h4>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
          
    );
}

export default Features;
