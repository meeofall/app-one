import React from 'react';
import { Link } from "react-router-dom";

function Content() {
    return (
        <div class="container container-fluid d-block pt-4 justify-content-center">
            <div class="container container-fluid d-inline-flex bg-dark p-4 mb-1 rounded shadow justify-content-center">
                <div class="container container-fluid d-block p-3 col-3">
                    <h4 class="text-white">Getting started</h4>
                    <h6 class="text-white">Don't wait longer! <br /> Take the next step <i class="fa fa-hand-o-right"></i> </h6>
                </div>

                <div class="container container-fluid d-grid p-2 m-2 col-4">
                    <p class="text-white">Start your online growth, explore interactive modules, and manage your account.</p>
                    <button class="btn btn-danger" type="submit">Try iSM for free</button>
                </div>
                
                <div class="container container-fluid d-grid m-3 col-4">
                    <p class="text-white">Tell us what you're looking for in school management software. An iSM expert will help you find the best solution.</p>
                    <button class="btn btn-light text-primary" type="submit">Contact Sales</button>
                </div>
           
            </div>

            <div class="container container-fluid d-flex bg-dark p-3 rounded shadow justify-content-center">
             
                
                <p class="text-white p-4 m-3">The iSchoolManager software provide a realistic, tech savvy solution for the Nigerian/African school<br />
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
