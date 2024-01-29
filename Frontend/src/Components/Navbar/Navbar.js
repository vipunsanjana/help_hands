import React from "react";
import { useRef } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo-removebg-preview.png";

function Navbar() {
  const services = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbarClass">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img className="Logo" src={logo} alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav middleNavBar">
            <a class="nav-item nav-link" href="/">
              Home
            </a>
            <a class="nav-item nav-link" href="#service_section">
              Services
            </a>
            <a class="nav-item nav-link" href="#about_sec">
              About Us
            </a>
            <a class="nav-item nav-link" href="/aboutus">
              Our Team
            </a>

            <a class="nav-item nav-link mkAppointment" href="/main">
              Make Appointement
            </a>
            {/* <button type="button" class="btn btn-primary my-2 my-sm-0">Contact Us</button> */}
          </div>
        </div>
        <button class="btn btn-primary my-2 my-sm-0 contactUsBtn">
          <a href="/main"> Make Appointment</a>
        </button>
      </nav>
    </div>

    // <nav class="navbar">
    //   <div class="navbar-logo">
    //     <a href="#">
    //       <img className="Logo" src={logo} alt="Logo" />
    //     </a>
    //   </div>
    //   <div class="navbar-links">
    //     <ul>
    //       <li>
    //         <a href="#">Home</a>
    //       </li>
    //       <li>
    //         <a href="#">About Us</a>
    //       </li>
    //       <li>
    //         <a href="#">Services</a>
    //       </li>
    //       <li>
    //         <a href="#">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div class="navbar-button">
    //     <a href="#">Make An Appointement</a>
    //   </div>
    // </nav>
  );
}

export default Navbar;
