import * as React from "react";
import "../sass/main.css";
import logo from "../assets/logo/milan_footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer">
      <picture className="footer__logo-box">
        <img src={logo} alt="full logo" className="footer__logo" />
      </picture>
      <div className="footer__navigation">
        <div className="footer__contact">
          <p className="paragraph">
            <span
              style={{
                display: "block",
              }}
              className="heading-teritiary"
            >
              located at
            </span>
            Location : <br></br>Indian Institute of technology Hyderabad
            <br></br> Near NH-65, Sangareddy, kandi,<br></br>Telangana 502285
          </p>
        </div>

        <div>
          <p className="paragraph footer__email">
            <span
              style={{
                display: "block",
              }}
              className="heading-teritiary"
            >
              contact us
            </span>
            Phone: <br></br>(+91) 9946525172 <br></br>Email us at:<br></br>
            milan.oc@gymkhana.iith.ac.in
          </p>
        </div>

        <div className="footer__socials">
          <span
            style={{
              display: "block",
            }}
            className="heading-teritiary"
          >
            follow us
          </span>
          <a href="https://www.instagram.com/milan_thegc_iith/?igshid=YmMyMTA2M2Y%3D">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/milanthegc/"
            style={{
              marginLeft: "1.5rem",
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
