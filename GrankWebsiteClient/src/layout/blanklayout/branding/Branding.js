import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const Branding = () => {
  const settings3 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    // arrows: false,
    // className: "notes-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Seo
        title="
        Branding Agency in Bangalore | Hyderabad
        "
        description="Branding agency in Bangalore and Hyderabad. Explore our Branding Page to delve into the story, values, and commitment that make us stand out in the industry. "
        name="Company name."
        type="article"
        YahooSeeker="INDEX, FOLLOW"
        msnbot="INDEX, FOLLOW"
        googlebot="INDEX, FOLLOW"
        keywords="react, meta tags, seo"
        searchengines="ALL"
        canonical="https://www.grank.co.in"
      ></Seo>
      <section className="section-top">
        <Header />
        <div className="branding-banner mobile-none">
          <img
            className="img-fluid w-100"
            src="assest/photos/branding/brand-banner.png"
            alt="G-Rank"
          />
          <div className="branding-banner-new-div">
            <h1>
              <span class="words2"></span>
            </h1>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Get Started</a>
            </motion.h3>
          </div>
          {/* <div className="standing-out-div">
            <h4>
              Creating innovative branding that breaks free of <br />
              convention leaves a lasting impression on customers.
            </h4>
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Stand out with us.
            </motion.h5>
          </div> */}
          <div className="background-color8">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="branding-icon8"
            >
              <img
                src="assest/photos/branding/branding-icon8.png "
                alt="grank"
              />
            </motion.div>
          </div>
          <div className="background-color4">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="branding-icon4"
            >
              <img
                src="assest/photos/branding/branding-icon4.png "
                alt="grank"
              />
            </motion.div>
          </div>
          <div className="background-color">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="branding-icon2"
            >
              <img
                src="assest/photos/branding/branding-icon2.png "
                alt="grank"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -400 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="branding-icon3"
          >
            <img src="assest/photos/branding/branding-icon3.png " alt="grank" />
          </motion.div>
          <div className="branding-icon1">
            <img src="assest/photos/branding/branding-icon1.png " alt="grank" />
          </div>
          <div className="branding-icon7">
            <img src="assest/photos/branding/branding-icon7.png " alt="grank" />
          </div>
        </div>
        <div className="branding-banner desktop-none">
          <img
            className="img-fluid w-100"
            src="assest/photos/branding/branding-banner-mobile.png"
            alt="G-Rank"
          />
          <div className="branding-banner-new-div">
            <h1>
              <span class="words2"></span>
            </h1>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Get Started</a>
            </motion.h3>
          </div>
          {/* <div className="standing-out-div">
            <h4>
              Creating innovative branding that breaks free of <br />
              convention leaves a lasting impression on customers.
            </h4>
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Stand out with us.
            </motion.h5>
          </div> */}
          <div className="background-color8">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="branding-icon8"
            >
              <img
                src="assest/photos/branding/branding-icon8.png "
                alt="grank"
              />
            </motion.div>
          </div>
          <div className="background-color4">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="branding-icon4"
            >
              <img
                src="assest/photos/branding/branding-icon4.png "
                alt="grank"
              />
            </motion.div>
          </div>
          <div className="background-color">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="branding-icon2"
            >
              <img
                src="assest/photos/branding/branding-icon2.png "
                alt="grank"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -400 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="branding-icon3"
          >
            <img src="assest/photos/branding/branding-icon3.png " alt="grank" />
          </motion.div>
          <div className="branding-icon1">
            <img src="assest/photos/branding/branding-icon1.png " alt="grank" />
          </div>
          <div className="branding-icon7">
            <img src="assest/photos/branding/branding-icon7.png " alt="grank" />
          </div>
        </div>

        {/* <img
            className="img-fluid w-100"
            src="assest/photos/branding/branding-why-banner.png"
            alt="G-Rank"
          /> */}
        <div className="branding-why-div">
          <div className="container ">
            <div className="row">
              <motion.div
                className="col-12 col-md-6 col-lg-6 branding-why-text1"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="branding-why-img">
                  <img
                    className="img-fluid "
                    src="assest/photos/branding/branding-why-img.png"
                    alt="G-Rank"
                  />
                </div>
              </motion.div>
              <motion.div
                className="col-12 col-md-6 col-lg-6 branding-why-text"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1>Why choose us?</h1>
                <p>
                  When it comes to branding, your business deserves an agency
                  that understands the intricate art of creating a distinct
                  identity. At G- Rank, we are committed to being the catalyst
                  that propels your brand towards success.
                </p>
                <p>
                  We understand that every brand is different and tailor our
                  approach to meet your specific needs. Our branding solutions
                  are designed to resonate with your target audience and leave a
                  lasting impression. Our creative team thrive on innovation and
                  fresh ideas.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="branding-process-div">
          <div className="container ">
            <div className="row">
              <div
                className="col-12 col-md-6 col-lg-6 branding-process-text"
                id="order2"
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Our
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Process
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  At G-Rank, we collaborate closely with you to create and
                  present an exceptional brand identity, tailored to your
                  objectives and intended audience. Our comprehensive approach
                  encompasses logo design, color palettes, imagery, and
                  typography, resulting in a unified and impactful brand
                  identity.
                </motion.p>
              </div>
              <div
                className="col-12 col-md-6 col-lg-6 branding-process-text1"
                id="order1"
              >
                <div className="branding-process-img">
                  <motion.img
                    className="img-fluid "
                    src="assest/photos/branding/Process-img.png"
                    alt="G-Rank"
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* action yellow start*/}
        <div className="action-yellow-div-text">
          <motion.p
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Want to Elevate Your Brand?
            <br /> Get in Touch.
          </motion.p>
          <a href="#">
            <motion.p
              className="action-yellow-div-buttom"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div>
        {/* action yellow end*/}

        <div className="branding-service-div">
          <div className="container-fluid">
            <div className="row">
              <motion.div
                className="col-12 branding-service-text2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h1>Our</h1>
                <h2>Branding Services</h2>
              </motion.div>
              <div className="col-12  branding-service-text1">
                <motion.div
                  className="branding-service1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div class="flip-card" tabIndex="0">
                    <div class="flip-card-inner">
                      <div class="flip-card-front3">
                        <img src="assest/photos/branding/service-img1.png" />
                        <h4>
                          Logo <br />
                          Design
                        </h4>
                        {/* <h3>More</h3> */}
                      </div>
                      <div class="flip-card-back">
                        <h3>
                          Our team specializes in crafting fully customized logo
                          sets that are inspiring and unforgettable. We ensure
                          that every logo we create captures the essence of your
                          brand's values and vision.
                          <a href="#">More</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="branding-service1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div class="flip-card" tabIndex="0">
                    <div class="flip-card-inner">
                      <div class="flip-card-front2">
                        <img src="assest/photos/branding/service-img2.png" />
                        <h4>
                          Comprehensive <br />
                          Brand Guide
                        </h4>
                        {/* <h3>More</h3> */}
                      </div>
                      <div class="flip-card-back">
                        <h3>
                          We provide a comprehensive brand guide to maintain
                          consistency and clarity across all your brand
                          materials. This detailed guide covers everything from
                          using your brand fonts, logos, and wordmarks to
                          guidelines for various platforms
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="branding-service1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div class="flip-card" tabIndex="0">
                    <div class="flip-card-inner">
                      <div class="flip-card-front3">
                        <img src="assest/photos/branding/service-img3.png" />
                        <h4>Typography</h4>
                        {/* <h3>More</h3> */}
                      </div>
                      <div class="flip-card-back">
                        <h3>
                          Selecting the perfect font is crucial in conveying the
                          desired feel of your brand while ensuring readability
                          and accessibility. Our experts assist you in choosing
                          a carefully curated collection of fonts that best
                          represent your brand.
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div>
              <motion.h2
                className="branding-quick-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Quick Links
                <p className="d-block"> For You</p>
              </motion.h2>
              <Slider {...settings3}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/branding"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Branding</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/creative-content"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Creative & <p className="d-block"> Content</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/organic-marketing"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Organic <p className="d-block"> marketing</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/performance-marketing"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Performance <p className="d-block"> marketing</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/social-media"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Social Media</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/web-development"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Web <p className="d-block"> Development</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/domain"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Domain</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/hosting"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Web <p className="d-block"> Hosting</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/security"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Security</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/email"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Email</h1>
                  </div>
                </NavLink>
              </Slider>
            </div>
          </div>
        </section>
        {/* Quick Link section end */}

        <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        />
      </section>
    </>
  );
};

export default Branding;
