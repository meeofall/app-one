import React from 'react';
import Pic1 from '../images/Picture1.png';
import Pic2 from '../images/Picture2.png';

function Docs() {
    return (
        <div class="bg-light pt-5 mt-5">
            <h3 class="text-center pt-2 mt-3">Welcome to iSM easy set up for new school setting</h3>
            <h6 class="text-center pb-5 mb-5"><i>We hope you’ll enjoy our software</i></h6>
            <div class="row p-3 m-3 pb-0 mb-0">
                <div class="col">
                    <p class="font-weight-bold">Go to: www.ischoomanager.com <br />
                        *Click get started for free <br />
                        *Enter your email to generate a token <br />
                        *Copy your token code (save it somewhere for now) <br />
                        *…and Click ‘sign up’ <br />
                        *Complete the sign up form <br />
                        *Go to your mailbox and verify your email (email you used for sign up) <br />
                        *Verification will lead you directly into your client area/CRM portal, if not, complete the sign in form <br /> <br />

                        Once you are in your client’s area/CRM, click the ‘Fund Account’ link on the side bar and click on the ‘Voucher’
                        button at the top right of the page. Paste or type in the voucher code you have generated from the beginning
                        and click on ‘Use Voucher’ button. <br /> <br />
                        
                        Congrats! You just earned a free one month subscription!

                    </p>
                </div>
                <div class="col">
                    <img class="doc-image zoom" src={Pic1} alt="---" />
                </div>
            <div class="w-100"></div>
                <br /> <br /> <br /> <br />
                
                <div class="col">
                    <p class="font-weight-bold">
                        *Now move over to the ‘iSM Schools’ link on your dashboard’s sidebar.
                    </p>
                </div>
                <div class="col">
                    <img class="doc-image zoom" src={Pic2} alt="---" />
            </div>
            </div>
        </div>
    )
}

export default Docs
