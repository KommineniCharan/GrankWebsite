import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Seo from "../seo/Seo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";
const BrandPositioning = () => {
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
        title="Brand Positioning Agency in Bangalore| Hyderabad"
        description="Brand positioning agency in Bangalore and  Hyderabad. Explore how we help your brand stand out, connect with your audience, and dominate your niche with precision and purpose."
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
        <div className="branding-consulting-banner">
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/branding/brand-position-banner-small.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/branding/brand-position-banner-small-mobile.png"
            alt="G-Rank"
          />
          <div className="branding-cunsulting-banner-new-div">
            <h1 data-text="Brand positioning">
              {/* <span class="words3"></span> */}
              Brand
              <br />
              positioning
            </h1>
            <h2>Turning Visions into Brand Reality</h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Get Started</a>
            </motion.h3>
          </div>
          {/* <motion.h5
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p>What is</p>
            Branding Consulting
          </motion.h5>
          <h4>
            Brand consulting involves assisting clients in aligning their entire
            organizations to effectively
            <br /> deliver and promote their offerings compellingly and
            appealingly while establishing a distinctive
            <br /> edge over competitors.
          </h4> */}
        </div>
        <div className="branding-process-div">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 ">
                {/* <div className="branding-consulting-process-img">
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="img-fluid branding-consulting-process-img"
                    src="assest/photos/branding/branding-consulting-process-img.png"
                    alt="G-Rank"
                  />
                </div> */}
                <img
                  className="img-fluid branding-pro-img desktop-none"
                  src="assest/photos/branding/automation.png"
                  alt="G-Rank"
                />
                <div id="level">
                  <div id="content">
                    <div id="gears">
                      <div id="gears-static"></div>
                      <div id="gear-system-1">
                        <div class="shadow" id="shadow15"></div>
                        <div id="gear15"></div>
                        <div class="shadow" id="shadow14"></div>
                        <div id="gear14"></div>
                        <div class="shadow" id="shadow13"></div>
                        <div id="gear13"></div>
                      </div>
                      <div id="gear-system-2">
                        <div class="shadow" id="shadow10"></div>
                        <div id="gear10"></div>
                        <div class="shadow" id="shadow3"></div>
                        <div id="gear3"></div>
                      </div>
                      <div id="gear-system-3">
                        <div class="shadow" id="shadow9"></div>
                        <div id="gear9"></div>
                        <div class="shadow" id="shadow7"></div>
                        <div id="gear7"></div>
                      </div>
                      <div id="gear-system-4">
                        <div class="shadow" id="shadow6"></div>
                        <div id="gear6"></div>
                        <div id="gear4"></div>
                      </div>
                      <div id="gear-system-5">
                        <div class="shadow" id="shadow12"></div>
                        <div id="gear12"></div>
                        <div class="shadow" id="shadow11"></div>
                        <div id="gear11"></div>
                        <div class="shadow" id="shadow8"></div>
                        <div id="gear8"></div>
                      </div>
                      <div class="shadow" id="shadow1"></div>
                      <div id="gear1"></div>
                      <div id="gear-system-6">
                        <div class="shadow" id="shadow5"></div>
                        <div id="gear5"></div>
                        <div id="gear2"></div>
                      </div>
                      <div class="shadow" id="shadowweight"></div>
                      <div id="chain-circle"></div>
                      <div id="chain"></div>
                      <div id="weight"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 branding-consulting-process-text">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
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
                  At G-Rank, we follow a strategic process for brand
                  positioning. Our approach is designed to help businesses
                  establish a strong online presence and effectively communicate
                  their brand message to target audiences. We conduct
                  comprehensive research to identify the unique selling
                  propositions and key messages that will differentiate the
                  brand in the digital space.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* action black start*/}
        <div className="action-black-div-text">
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
              className="action-black-div-buttom"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div>
        {/* action black end*/}
        {/* what we do start */}
        <div className="container-fluid branding-consulting-what">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 " id="order2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" branding-consulting-what-heading"
              >
                <h1>What</h1>
                <h2>we Do</h2>
              </motion.div>
              <div className="branding-consulting-what-text">
                <p>
                  G-Rank is a trusted partner for brand positioning. They are
                  the best brand positioning agency in Hyderabad and Bangalore
                </p>
                <p>
                  Their strategies aim to elevate a brand's presence and drive
                  lasting success
                </p>
                <p>
                  G-Rank recognizes the significance of effective brand
                  positioning in today's competitive market
                </p>
                <p>
                  Their experienced professionals work closely with clients to
                  identify unique brand attributes and create powerful
                  positioning strategies
                </p>
                <p>
                  The agency's approach involves a deep understanding of
                  consumer behavior and market trends
                </p>
                <p>
                  They conduct in-depth market research and analysis to gain
                  valuable insights into the industry and target market
                </p>
                <p>
                  Based on the insights, G-Rank develops comprehensive brand
                  positioning strategies aligned with clients' business
                  objectives
                </p>
                <p>
                  The focus is on differentiating the brand from competitors,
                  identifying key brand attributes, and crafting a compelling
                  brand story
                </p>
                <p>
                  G-Rank's expert guidance helps brands gain a distinct
                  personality that resonates with customers, leaving a lasting
                  impression
                </p>
                <p>
                  They cover all aspects of brand positioning, including logo
                  design, visual identity, messaging, and communication
                  strategies
                </p>
                <p>The goal is to ensure consistency across all touchpoints</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5" id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-blue3.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        {/* what we do end */}
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

export default BrandPositioning;
