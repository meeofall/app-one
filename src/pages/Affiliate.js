import React from 'react';
import Affiliatepic from '../images/affiliate.png';

function Affiliate() {
    return (
        <div class="affiliate-head mt-5">
            <div class="d-flex affiliate-div">
                <div class="bg-light p-3 affiliate-div1">
                    <h5>iSM Affiliate Program</h5>
                    <h6 class="text-danger font-weight-bold">Earn 10% for life</h6><br />
                    <a class="btn btn-secondary affiliate-button1" id="formButton" href="#" role="button" data-toggle="modal" data-target="#myModal">Join us now</a>
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="bg-white border-1 rounded shadow p-4 text-center">Please complete the form</h5>
                        <form onsubmit="event.preventDefault()" id="form1"><br />
                        <input id="firstName" type="text" placeholder="Enter Your First Name" name="firstname"
                            class="form-control input-box rm-border bg-info border-0 rounded shadow"
                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'First Name'" />
                        <br />
                        
                        <input id="lastName" type="text" placeholder="Enter Your Last Name" name="lastname"
                            class="form-control input-box rm-border bg-info border-0 rounded shadow"
                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" />
                        <br />
                    
                        <input id="companyName" type="text" placeholder="Your Company Name" name="company"
                            class="form-control input-box rm-border bg-info border-0 rounded shadow"
                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'Company'" />
                        <br />
                        
                        <input id="tel" type="text" placeholder="Telephone Number" name="phone"
                            class="form-control input-box rm-border bg-info border-0 rounded shadow"
                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'Tel'" />
                         <br />
                    
                        <input id="e-mail" type="text" placeholder="Enter Your Email" name="email"
                            class="form-control input-box rm-border bg-info border-0 rounded shadow"
                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'first.last@gmail.com'" />
                        <br />
                    
                        <textarea class="form-control bg-info" rows="4" placeholder="Message"></textarea>
                        
                        <button class="border-0 bg-warning rounded form-button pull-right mt-1" type="button" id="submit">Submit</button>
                        
                            </form>
                        </div>
                        </div>

                </div>
                <img class="affilpic" src={Affiliatepic} alt="school management software" />
            </div>

            <div class="affiliate-div2">
                <p class="text-dark"> As a company or an individual would you like to contribute to the enhancement of education management
                and quality in your region? Join our affiliate network and start promoting iSchoolManager around you.

                Leverage our amazing and fast growing All-in-one, easy-to-use School Management Software, while capitalizing
                on your marketing skills, customer portfolio, web presence and social networks.
                </p>
            </div>

            <br />
            <div class="bg-light p-5 mt-5">
                <h2 class="text-success font-weight-bold crome1">What We Offer</h2>
            </div>

            <div class="affiliate-div2 crome">
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> Training, zoom and YouTube presentations plus access to demo </p>
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> A proven solution that you can be proud of promoting </p>
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> Transparent and competitive pricing </p>
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> Discounts and free vouchers that you can offer to customers </p>
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> 10% commission per monthly subscription from each of your customers for life! </p>
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> As long as your customers subscribe, you earn! </p>
            </div>

            <br />
            <div class="bg-light p-5 mt-5">
                <h2 class="text-success font-weight-bold crome1">What You Contribute</h2>
            </div>

            <div class="affiliate-div2 crome">
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> Awareness and targeted campaigns in your region through aggressive marketing,
                 calls, emails, as well as your website and social networks </p>
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> Excellent communication, social and marketing skills </p>
                <p class="text-dark"> <i class="fas fa-check-circle text-warning"></i> Sales leads and closing </p>
            </div>

            <br />
            <div class="bg-dark p-5 mt-5 text-center">
                <h2 class="mb-3 text-danger text-center font-weight-bold">Start Earning 10% On Each Sale For Life!</h2>
                <a class="btn btn-info align-center affiliate-button2" href="https://clients.inovateos.com/partners/signup" target="_blank" role="button">Join Now</a>
            </div>

    
            
        </div>
    )
}

export default Affiliate