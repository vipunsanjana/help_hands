import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer_sec">
      <footer class="footer">
        <div class="footer_container">
          <div class="footer-col">
            <h4>Our Info</h4>
            <ul>
              <li>
                <a href="#">Company Reg. No. : PV00243655</a>
              </li>
              <li>
                <a href="#">Health Ministry Reg. No. AA 14835</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="tel:+940719001212">
                  <i class="fas fa-phone"></i>
                  071 900 1212
                </a>
                <a href="tel:+940117561122">
                  <i class="fas fa-phone"></i>
                  011 756 1122
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="far fa-envelope"></i>{" "}
                  thehelpinghandhospital18@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-globe"></i> www.helpinghandlk.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=7.20436, 79.84291"
                  target="_blank"
                >
                  <i class="fas fa-map-marker"></i>
                  No. 102/A Taladuwa Rd, Negombo
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=100063661026533&mibextid=aejMdD">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.tiktok.com/@the.helping.hand1?_t=8hINS6cz86r&_r=1">
                <i class="fab fa-tiktok"></i>
              </a>
              {/* <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; 2023 Helping Hands . All rights reserved. Powered by Code
            Morphs
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
