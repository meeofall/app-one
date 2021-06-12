import React from 'react';
import Picstory101 from '../images/accounts.png';
import Picstory102 from '../images/communication.png';
import Picstory103 from '../images/academic.png';
import Picstory104 from '../images/portal.png';
import Picstory105 from '../images/admin-icon.png';
import Picstory106 from '../images/analytics.png';



function Features() {
    return (
            
        <section class="pt-5 pb-5 section-parent section-fluid justify-content-center">
            <h2 class="features-head-text text-center">Amazing Features </h2>
  <div class="justify-content-center mb-4 pb-4 mt-3">
    <div class="row m-auto wrapper">
        <div class="col-6 features-head-div m-auto justify-content-center main-div main-div1"></div>
        <div class="col-6 text-right">
            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i class="fa fa-arrow-left pulley"></i>
            </a>
            <a class="btn btn-primary mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i class="fa fa-arrow-right pulley"></i>
            </a>
        </div>
        <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">

                            <div class="col-4 col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title glassy2"><img class="img-fluid feature-short" alt="school management software" src={Picstory105} /> ADMINISTRATION</h4>
                                    <div class="card-body">
                                      <p class="card-text glassy3"><i class="fas fa-check"></i> Online Admission</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Library Management</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Transport Management</p>
                                       <p class="card-text glassy3"><i class="fas fa-check"></i> Student & Teacher Management</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-4 col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title glassy2"><img class="img-fluid feature-short" alt="school management software" src={Picstory102} /> COMMUNICATION</h4>
                                    <div class="card-body">
                                      <p class="card-text glassy3"><i class="fas fa-check"></i> Mass emailing</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Bulk SMS</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Internal Notifications</p>
                                       <p class="card-text glassy3"><i class="fas fa-check"></i> Event Scheduling</p>
                                       <p class="card-text glassy3"><i class="fas fa-check"></i> Timetable</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title glassy2"><img class="img-fluid feature-short" alt="school management software" src={Picstory104} /> PORTALS</h4>
                                    <div class="card-body">
                                      <p class="card-text glassy3"><i class="fas fa-check"></i> Admin</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Teachers</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Students</p>
                                       <p class="card-text glassy3"><i class="fas fa-check"></i> Parents</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-4 col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title glassy2"><img class="img-fluid feature-short" alt="school management software" src={Picstory103} /> ACADEMICS</h4>
                                    <div class="card-body">
                                      <p class="card-text glassy3"><i class="fas fa-check"></i> Computer Base Testing (CBT)</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Continuous Assessment</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Auto Graduation</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-4 col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title glassy2"><img class="img-fluid feature-short" alt="school management software" src={Picstory101} /> ACCOUNT/FINANCE</h4>
                                    <div class="card-body">
                                      <p class="card-text glassy3"><i class="fas fa-check"></i> Fee Management</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Income & Expenditure Management</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> General Accounting</p>
                                       <p class="card-text glassy3"><i class="fas fa-check"></i> Payroll</p>
                                    </div>
                                </div>
                            </div>
                            
                    
                            <div class="col-4 col-md-4 mb-3 glassy1">
                                <div class="card glassy">
                                    <h4 class="card-title glassy2"><img class="img-fluid feature-short" alt="school management software" src={Picstory106} /> ANALYTICS</h4>
                                    <div class="card-body">
                                      <p class="card-text glassy3"><i class="fas fa-check"></i> Real-Time Visuals</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Ratings</p>
                                        <p class="card-text glassy3"><i class="fas fa-check"></i> Auto Calculate</p>
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
