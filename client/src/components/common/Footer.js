import React from 'react'
import "../../fontawesome/icon.js";
import logo from '../../images/milan_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import "../../css/Footer.css"
import { SocialMediaIconsReact } from 'social-media-icons-react';

function Footer() {
  return (

<footer className="text-center text-lg-start bg-dark text-muted">
  <section className="">
    <div className="container text-center text-md-start mt-20x">
      <div className="row mt-4">
        <div className="col-md-3 col-lg-4 col-xl-3 mt-4 mb-2">
        <div>
          <img src={logo} height="100px" width="100px" alt="logo" />
          <h4 className="text-uppercase mb-2">Milan</h4>
          <h6>The General Championship of IIT Hyderabad</h6>
        </div>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mt-4 mb-2">
          <h4 className="text-uppercase fw-bold">
            Useful links 
          </h4>
          <a href="https://iith.ac.in/" target="_blank">IIT H</a><br />
          <a href="https://gymkhana.iith.ac.in/" target="_blank">Gymkhana</a><br />
          <Link style= { { textDecoration: 'none'}} to='/' >MILAN</Link><br />
          <a href="https://gymkhana.iith.ac.in/milan/" target="_blank">MILAN 2021</a><br />
          </div>
        <div className="col-md-3 mx-auto mt-4">
          <strong className="text-uppercase">
          Location :
          </strong>
          <p><FontAwesomeIcon icon="location-dot" /> Indian Institute of technology Hyderabad<br />Near NH-65, Sangareddy, Kandi, Telangana 502285</p>
          <strong><FontAwesomeIcon icon="envelope"/>Email us at: </strong>milan.oc@gymkhana.iith.ac.in<br />
          <p><strong> <FontAwesomeIcon icon="phone"/>Phone: (+91) 9633124037</strong></p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4 mb-2">
          <h5>Follow Us</h5>
          <SocialMediaIconsReact 
            borderColor="rgba(0,0,0,1)" 
            borderWidth="2" 
            borderStyle="solid" 
            icon="instagram" 
            iconColor="rgba(0,0,0,1)" 
            backgroundColor="rgba(255,255,255,1)" 
            iconSize="5" 
            roundness="50%" 
            url="https://www.instagram.com/milan_thegc_iith/" 
            size="40" 
          />
        </div>
      </div>
    </div>
  </section>
</footer>
 )
}
export default Footer

