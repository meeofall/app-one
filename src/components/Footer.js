import React from 'react';
import BetaLog from '../images/betallgg.png';


function Footer() {
    return (
       
      <footer class="bg-white text-lg-start footer-container justify-content-center">
        
        <div class="container-fluid px-0 py-2 mx-auto bg-primary footerlink">
    <div class="row justify-content-center mx-auto">
        <div class="col-12 px-xs-0 col-md-11">
            <div class="card footer-card bg-primary border-0">
                <div class="row justify-content-center">
                     
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box">
                                    <h5>Want to create <br />something together?</h5> <a class="footerlinks" href="#">
                                        <p>Get in touch</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="box">
                                    <p class="mb-0">Abuja office</p>
                                    <h6><b>18 Manzini Street<br />Wuse Zone 4</b></h6>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box">
                                    <h5>Help us make cool things!</h5> <a class="footerlinks" href="#">
                                        <p>Check our open positions</p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 pb-5">
                                <div class="box">
                                    <p class="mb-0">Enugu office</p>
                                    <h6><b>?? ?????? Street<br />???? ???? ???</b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                             
                            <h5 class="form-head">Keep up with news from us</h5>
                            <form onsubmit="event.preventDefault()" class="form-control bg-primary border-0">
                                <div class="form-group">
                          <div class="col-10 get-input get-input1"> <input id="e-mail" type="text" placeholder="first.last@email.com" name="email"
                            class="form-control input-box rm-border bg-primary border-0" onfocus="this.placeholder = ''" onblur="this.placeholder = 'first.last@gmail.com'" /> </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-12 get-input">
                            <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input" />
                              <label for="chk1" class="custom-control-label consent">I give my consent that my personal information can be collected and used according to the <a class="footerlinks" href="#"><span>Privacy Policy</span></a></label> </div>
                                    </div>
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
                        <div class="row justify-content-center justify-content-md-start w-50"> <img src={BetaLog} alt="..."></img> </div>
                    </div>
                    <div class="col-md-7 d-flex justify-content-center mb-3">
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="#">About</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="#">Terms</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="#">Privacy</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="#">Blog</a> </div>
                        <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a class="footerlinks" href="#">Careers</a> </div>
                    </div>
                    <div class="col-md-3 justify-content-center d-flex"> <a class="footerlinks" href="#">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-facebook"></div>
                            </div>
                        </a> <a class="footerlinks" href="#">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-twitter"></div>
                            </div>
                        </a> <a class="footerlinks" href="#">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-instagram"></div>
                            </div>
                        </a> <a class="footerlinks" href="#">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-linkedin"></div>
                            </div>
                        </a> <a class="footerlinks" href="#">
                            <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                                <div class="fa fa-google-plus"></div>
                            </div>
                    </a> </div>
                  
                </div>
            </div>
        </div>
          </div>



</div>
 
        
        
        
            
</footer>

    )
}

export default Footer
