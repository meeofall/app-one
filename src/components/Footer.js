import React from 'react';
import BetaLog from '../images/betallgg.png';


function Footer() {
    return (
       
      <footer class="text-lg-start footer container-fluid justify-content-center pt-5 bg-light d-inline-block footaa">
        
        <div class="container-fluid px-0 py-2 mx-auto footerlink">
    <div class="row justify-content-center mx-auto">
        <div class="col-12 px-xs-0 col-md-11">
            <div class="card footer-card border-0 bg-light">
                <div class="row justify-content-center">
                     
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box">
                                    <h6>Want to create something together?</h6> <a class="footerlinks" href="#">
                                        <p><small><b>Get in touch</b></small></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="box">
                                    <h6 class="mb-0">Abuja office</h6>
                                    <p><small>18 Manzini Street<br />Wuse Zone 4</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box">
                                    <h6>Help us make cool things!</h6> <a class="footerlinks" href="#">
                                        <p><small><b>Check our open positions</b></small></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 pb-5">
                                <div class="box">
                                    <h6 class="mb-0">Enugu office</h6>
                                    <p><small>1?? ?????? Street<br />???? ???? ???</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="input-boxx">
                             
                            <h6 class="form-head text-primary">Keep up with news from us</h6>
                                        <form onsubmit="event.preventDefault()">
                                            <input id="e-mail" type="text" placeholder="first.last@email.com" name="email"
                            class="input-box w-50 p-2 m-2 text-center rm-border bg-light border-0 rounded shadow" onfocus="this.placeholder = ''" onblur="this.placeholder = 'first.last@gmail.com'" />
                                        </form><br />
                                        
                                        <form>
                                
                                    <div class="col-12 get-input">
                            <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input" />
                              <label for="chk1" class="custom-control-label consent text-primary">I give my consent that my personal information can be collected and used according to the <a class="footerlinks" href="#"><span>Privacy Policy</span></a></label> </div>
                                    </div>
                               
                                <div class="form-group">
                                    <div class="col-md-12 px-4 py-2 get-input pb-5 mb-5"> <button type="submit" class="btn btn-submit bg-warning rm-border">SUBSCRIBE</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                            </div>
                            
                            <hr class="bg-danger"></hr>
                            <br />
                            

                <div class="row">
                    <div class="col-md-2">
                        <div class="row justify-content-center justify-content-md-start w-50"> <img class="footer-logo" src={BetaLog} alt="iSchoolManager logo"></img> </div>
                    </div>
                    <div class="col-md-7 d-lg-flex justify-content-center mb-3 list-links">
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="/About">About</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="/Terms">Terms</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="/Privacy">Privacy</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks text-muted" href="#">Blog</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks text-muted" href="#">Careers</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks border-1 rounded bg-danger 
                        m-3 mt-0 p-2 pt-0 pb-0 text-white font-weight-bold" href="Affiliate">AFFILIATE</a> </div>
                    </div>
                    <div class="col-md-3 justify-content-center d-flex"> <a class="footerlinks" href="https://www.facebook.com/inovateos">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-facebook"></div>
                                    </div>
                                </a>
                                    
                                    <a class="footerlinks" href="https://www.twitter.com/iSchoolManager">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-twitter"></div>
                            </div>
                                    </a>

                                    <a class="footerlinks" href="https://www.instagram.com/iSchoolManager">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-instagram"></div>
                            </div>
                                    </a>
                                    
                                    <a class="footerlinks" href="linkedin.com/iSchoolManager">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-linkedin"></div>
                            </div>
                                    </a>
                          </div>
                  
                </div>
            </div>
        </div>
          </div>



</div>
 
        
        
        
            
</footer>

    )
}

export default Footer
