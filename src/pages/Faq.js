import React from 'react';
import Faqbg from '../images/question-mark.png';

function Faq() {
    return (
        <div class="faq-main1">
        <div class="faq-main d-inline"><img class="faqbgimg" src={Faqbg} alt="school management software frequently asked questions" />
            <div class="accordion accordion-flush mt-5 pt-5" id="accordionFlushExample"><h2 class="text-center pb-5">Frequently Asked Questions</h2>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                iSchoolManager! What is it?
              </button>
            </h2>
            
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">iSchoolManager is a school management software that is available online to help K12, primary and secondary schools
            centralize and streamline their operations. It speeds up tasks and gives staff, students and parents access to lots of data and functionality, with total security.<br /> With excellent support, iSchoolManager is loved by its customers.</div>
          </div>
          </div>
          <br />
          
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed text-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Who is iSM designed for?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">The iSchoolManager platform is designed for K12, primary and secondary schools.</div>
          </div>
        </div>
          <br />

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              How do I access Training and support?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Support forms the basis of our service. Our support team is available to answer any questions and guide you through your implementation. Our customers have 24/7 access to our ticketing system and phone support between 9am and 5pm WAT.<br />
              We also provide 24 hour emergency phone support.</div>
          </div>
        </div><br />
                
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed text-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Are my Data secured?
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Protecting your data is our top priority. We use modern advanced security measures in both our technology and development environments.<br />
              We also store your data in ever reliable cloud servers like google cloud and AWS</div>
          </div>
        </div><br />
          
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFive">
            <button class="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              How competitive is the iSM price?
            </button>
          </h2>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">We charge a fixed monthly subscription rate per active school, the most competitive in the industry. This includes training, support and standard data import. There is a charge per SMS if you decide to use our communication platform.</div>
          </div>
        </div><br />
          

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingSix">
            <button class="accordion-button collapsed text-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              Installation. How do I get started?
            </button>
          </h2>
          <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">iSchoolManager is a web application accessible through your browser. This means you can access it from any web enabled computer device.</div>
          </div>
        </div><br />
                
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingSeven">
            <button class="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
              Information history. Can I loose my data?
            </button>
          </h2>
          <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">All historical data is kept and none of it is deleted. All the relevant users have access to their data.</div>
          </div>
        </div><br />
          

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingEight">
            <button class="accordion-button collapsed text-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
              What about graduating students' information?
            </button>
          </h2>
          <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Students who are graduating or have graduated in the past still have their information easily accessible. You can see the history of a student from the moment they join till they leave.</div>
          </div>
        </div><br />
  
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingNine">
            <button class="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
              Can Teachers view confidential information?
            </button>
          </h2>
          <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Teachers view as much as the Administration desire. Security can be configured to your specific requirements. It is up to the administration to decide who can view or edit what information.</div>
          </div>
          </div><br />
          
          <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTen">
            <button class="accordion-button collapsed text-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
              Which browsers support iSchoolManager?
            </button>
          </h2>
          <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Safari, Firefox, Chrome and Microsoft Edge.</div>
          </div>
          </div><br />
          
          <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingEleven">
            <button class="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
              As a Parent how do I gain access?
            </button>
          </h2>
          <div id="flush-collapseEleven" class="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">You can use iSchoolManager if your child's school has it set up.</div>
          </div>
          </div><br />
          
          <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwelve">
            <button class="accordion-button collapsed text-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
              Can my school sign up for fixed term?
            </button>
          </h2>
          <div id="flush-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">There is no fixed term contract. You can pay per month and cancel at any moment. If you require any customizations, depending on the specifics,
              we sometimes will do it at no charge with a 1 year fixed term contract.<br />
             Contact us to discuss your specific needs.</div>
          </div>
          </div><br />
          
          <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThirteen">
            <button class="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
              How do I pay for my monthly subscription?
            </button>
          </h2>
          <div id="flush-collapseThirteen" class="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">We accept payment via bank transfer and online payments through MasterCard and Visa.</div>
          </div>
          </div><br />
          
          <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFourteen">
            <button class="accordion-button collapsed text-dark bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen" aria-expanded="false" aria-controls="flush-collapseFourteen">
              How do I get started?
            </button>
          </h2>
          <div id="flush-collapseFourteen" class="accordion-collapse collapse" aria-labelledby="flush-headingFourteen" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Access the free demo and talk to us about your specific requirements. We can also set up a free, no commitment trial for 30 days.</div>
          </div>
        </div>
           
        </div>
            
      

        </div>

<div class="bg-dark text-lg-start div-container justify-content-center p-5">
        
        

                <div class="row faq-foot">
                    <div class="col-md-2">
                        <div class="row justify-content-center justify-content-md-start w-50"> </div>
                    </div>
                    <div class="col-md-7 d-flex justify-content-center mb-3">
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="About">About</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="Terms">Terms</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="Privacy">Privacy</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="#">Blog</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="#">Careers</a> </div>
            </div>
            
            <div class="col-md-3 justify-content-center d-flex">
              <a class="footerlinks" href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-facebook"></div>
                   </div>
              </a>
              
              <a class="footerlinks" href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-twitter"></div>
                  </div>
              </a>
              
              <a class="footerlinks" href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                     <div class="fa fa-instagram"></div>
                  </div>
              </a>
              
              <a class="footerlinks" href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-linkedin"></div>
                  </div>
              </a>
              
              <a class="footerlinks" href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-google-plus"></div>
                  </div>
              </a>
            
            </div>

</div>
        </div>
     </div>
    )
}

export default Faq
