import React from 'react';
import { Link } from "react-router-dom";

function Content() {
    return (
        <div class="container container-fluid justify-content-center pb-5 first-cont">
            <div class="container container-fluid bg-dark col rounded shadow justify-content-center second-cont">
                <div class="container container-fluid col content-items1">
                    <h4 class="text-white">Getting started</h4>
                    <h6 class="text-white">Don't wait longer! <br />Take the next step <i class="far fa-hand-point-right"></i></h6>
                </div>

                <div class="container container-fluid col content-items">
                    <p class="text-white">Start your online growth, explore interactive modules, and manage your account.</p>
                    <button class="btn btn-danger" type="submit">Try iSM for free</button>
                </div>
                
                <div class="container container-fluid col content-items">
                    <p class="text-white">What tasks do you want to solve with iSM? An expert will help you find the best solution.</p>
                    <button class="btn btn-light text-primary" type="submit">Contact Sales</button>
                </div>
           
            </div>

            <div class="container container-fluid d-flex bg-dark p-3 rounded shadow justify-content-center">
             
                
                <p class="text-white started-paragraph">The iSchoolManager software provide a realistic, tech savvy solution for the Nigerian/African school<br />
                seeking to integrate technology in hopes of simplifying administration, organization and learning. To also increase <br />
                productivity, improve communication & accessibility. <br /> <br />
                iSchoolManager is specifically designed and developed with simplicity in mind. It is easy to understand and solves both <br />
                simple and complex problems for schools. It solves both technological and administrative requirements.
                </p>
            </div>
        </div>
        
             
    )
}

export default Content
