import React from 'react'
import SchCapture from '../images/teach-together.png';
import Bullet from '../images/smart.png';
import Bullet2 from '../images/security.png';
import Bullet3 from '../images/speedy.png';
import Bullet4 from '../images/cloudy.png';

function WhyiSchoolManager() {
    return (
        <div class="mt-5 pt-5 pb-3 mb-3">
            <div class="container container-fluid mt-4 pt-4 d-inline w-100 text-center">
                <h2 class="whyischool text-center">Why iSchoolManager?</h2>
                <h5 class="pb-0 mb-0 text-center p-3 pt-1"> <span class="highlighter">Leading institutions across the education sector are choosing 
                iSchoolManager to solve their toughest challenges</span></h5>
            </div>
            
            <div class="jumbotron jumbotron-fluid d-lg-inline-flex w-100 pb-0 bg-white whyischool4">
                <div class="whyischool5">
                    <h3 class="whyischool-4 pb-0 mb-1">Remodel your school with iNovative, easy-to-use, all-in-one software</h3>
                <p class="pt-0 mt-0 leady">Whether your school is new or has been for a while but on its way to quality digital transformation,
                  iNovate School Manager’s software help you solve tough challenges and guess what? We make it seem EASY!</p>
                </div>

                <div class="container container-fluid m-5 mt-0 pt-0 p-5 pb-0">
                    <img class="d-lg-block w-100 whyischoolpics" src={SchCapture} alt="School Administrators"></img>
                </div>
            
            </div>

            
            <div class="jumbotron jumbotron-fluid d-lg-inline-flex w-100 m-2 pb-0 pt-0 mt-0 bg-white whyischool4">
                <div class="container container-fluid m-2 mt-0 pt-0 p-2">
                    <h3 class="whyischool-4 pb-1 mb-1">Make <img class="bullet" src={Bullet} alt="Smart"></img> decisions with the leading school management software</h3>
                    <p class="pt-0 mt-0 leady">Managing your school smartly, with the right management modules is not luxury.
                    It is an essential and leading schools are getting even better with it.</p>
                </div>
                
                <div class="container container-fluid m-2 mt-0 pt-0 p-2">
                     <h3 class="whyischool-4 pb-1 mb-1">Ensured confidence on data security <img class="bullet1" src={Bullet2} alt="Smart"></img></h3>
                    <p class="pt-0 mt-0 leady">If you opt for on-cloud deployment, your data is guaranteed and because we
                    use the best of the best cloud services to host your data.</p>
                
                </div>

            </div>
                
            
            <div class="jumbotron jumbotron-fluid d-lg-inline-flex w-100 m-2 pb-0 pt-0 mt-0 bg-white whyischool4">
                <div class="container container-fluid m-2 mt-0 pt-0 p-2">
                     <h3 class="whyischool-4 pb-1 mb-1"><img class="bullet1" src={Bullet3} alt="Smart"></img> Fast operation time & Seamless navigation</h3>
                    <p class="pt-0 mt-0 leady">Managing your school smartly, with the right management modules is not luxury.
                    It is an essential and leading schools are getting even better with it.</p>
                </div>
                
                <div class="container container-fluid m-2 mt-0 pt-0 p-2">
                     <h3 class="whyischool-4 pb-1 mb-1">On Cloud and on premises installation <img class="bullet3" src={Bullet4} alt="Smart"></img></h3>
                    <p class="pt-0 mt-0 leady">If you opt for on-cloud deployment, your data is guaranteed and because we
                    use the best of the best cloud services to host your data.</p>
                
                </div>

            </div>
            
            
        </div>
        
    )
}

export default WhyiSchoolManager
