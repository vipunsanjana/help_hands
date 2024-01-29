import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  // const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    AOS.init();
    // Use a setTimeout to delay the appearance of the banner for the fade-in effect
    // setTimeout(() => {
    //   setShowBanner(true);
    // }, 100);
  }, []);
  return (
    <div className="home-page">
      <header className="banner">
        <img src="/banner.jpg" alt="Banner" />
        <div className="banner-content">
          <div data-aos="fade-down" data-aos-duration="1000">
            <h1>
              WELCOME TO
              <br />
              HELPING HAND
            </h1>
            <br />
            <h2>PSYCHOLOGICAL HOSPITAL</h2>
            <br />

            <a href="#footer_sec" className="contact-button">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <main>
        <div id="service_section">
          <section
            class="we-offer-area text-center bg-gray"
            id="service_section"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="site-heading text-center">
                    <div data-aos="fade-up" data-aos-duration="1500">
                      <h2 id="medicalServicesTopic">
                        Choose Our <span>Medical Services</span>
                      </h2>
                      <h4>
                        provide a wide range of mental health services to people
                        of all ages and backgrounds
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row our-offer-items less-carousel">
                <div class="col-md-4 col-sm-6 equal-height">
                  <div data-aos="fade-right" data-aos-duration="1500">
                    <div class="item">
                      <div class="service-icon">
                        <img src="residentialTreatement.png" alt="Therapy" />
                      </div>
                      <br />
                      <h5 id="serivceHeadings">Residential Treatment</h5>
                      {/* <p>
                      Psychologists can provide a variety of therapies to help
                      people with mental health problems. Some common types of
                      therapy include cognitive-behavioral therapy
                    </p> */}
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <div data-aos="fade-up" data-aos-duration="1500">
                    <div class="item">
                      <div class="service-icon">
                        <img src="PsychiatricTreatment.jpeg" alt="Counseling" />
                      </div>
                      <br />
                      <h5 id="serivceHeadings">Psychiatric Treatment</h5>
                      {/* <p>
                      Psychologists can also provide counseling to help people
                      with a variety of personal and interpersonal challenges,
                      such as grief and loss, relationship problems, and stress
                      management.
                    </p> */}
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <div data-aos="fade-left" data-aos-duration="1500">
                    <div class="item">
                      <div class="service-icon">
                        <img
                          src="counselling.avif"
                          alt="Medication Management"
                        />
                      </div>
                      <br />
                      <h5 id="serivceHeadings">Counseling</h5>
                      {/* <p>
                      Psychologists can work with psychiatrists to manage
                      medication for mental health conditions. This may involve
                      prescribing new medications, adjusting dosages, or
                      monitoring side effects.
                    </p> */}
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <div data-aos="fade-right" data-aos-duration="1500">
                    <div class="item">
                      <div class="service-icon">
                        <img
                          src="BehavioralTherapy.jpeg"
                          alt="Medication Management"
                        />
                      </div>
                      <br />
                      <br />
                      <h5 id="serivceHeadings">Behavioral Therapy</h5>
                      {/* <p>
                      Psychologists can work with psychiatrists to manage
                      medication for mental health conditions. This may involve
                      prescribing new medications, adjusting dosages, or
                      monitoring side effects.
                    </p> */}
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <div data-aos="fade-up" data-aos-duration="1500">
                    <div class="item">
                      <div class="service-icon">
                        <img src="training.jpeg" alt="Medication Management" />
                      </div>
                      <br />
                      <h5 id="serivceHeadings">
                        Training for Psychology Professionals
                      </h5>
                      {/* <p>
                      Psychologists can work with psychiatrists to manage
                      medication for mental health conditions. This may involve
                      prescribing new medications, adjusting dosages, or
                      monitoring side effects.
                    </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="about_sec">
          <section class="about-section">
            <div class="container">
              <div class="row">
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                  <div class="inner-column">
                    <div class="sec-title">
                      {/* <span class="title">About Css3transition</span> */}
                      <h3 id="secTitle1">
                        Empowering Minds, Embracing Change: Your Journey to
                        Inner Peace
                      </h3>
                    </div>
                    <div class="text">
                      Our hospital is a distinguished private healthcare
                      institution committed to advancing mental health and
                      psychological well-being. With a focus on providing
                      premium care and support, this hospital offers a wide
                      spectrum of services, including inpatient and outpatient
                      rehabilitation, counseling, and psychotherapy. The
                      dedicated team of professionals at The Helping Hand
                      Psychological Hospital delivers personalized treatment and
                      therapies, ensuring that each patient's unique needs are
                      met. With a strong emphasis on confidentiality and
                      comfort, the hospital strives to create a nurturing
                      environment for individuals seeking expert mental health
                      care in a private and compassionate setting.
                    </div>

                    {/* <div class="btn-box">
                      <a href="#" class="theme-btn btn-style-one">
                        Learn More
                      </a>
                    </div> */}
                    <div>
                      <Link to="/aboutus">
                        <button class="theme-btn btn-style-one">
                          LEARN MORE
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div data-aos="fade-right" data-aos-duration="1500">
                    <div class="inner-column wow">
                      <div class="author-desc">
                        <h2>Thaaru Paranavithana</h2>
                        <span>Director & Chief Psychologist</span>
                      </div>
                      <figure class="image-1">
                        <a
                          href="#"
                          class="lightbox-image"
                          data-fancybox="images"
                        >
                          <img
                            title="Rahul Kumar Yadav"
                            src="director.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
