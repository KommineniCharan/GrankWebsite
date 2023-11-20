import React, { useEffect, useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";

const PerformanceMarketing = () => {
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

  const settings7 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
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
  // Slider section start-----------------------------------------
  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-next2"
        // style={{ ...style, display: "block", background: "ccc" }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon className="forword-arrow2" />
      </div>
    );
  }

  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-prev2"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <ArrowBackIosIcon className="backword-arrow2" />
      </div>
    );
  }
  return (
    <>
      <Seo
        title="Performance Marketing Agency in Bangalore | Hyderabad"
        description="Performance marketing agency in Bangalore and Hyderbad. Explore how we optimize campaigns, maximize ROI, and propel your brand to new heights organically."
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
        <div className="performance-banner">
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/performance-marketing/performance-main-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/performance-marketing/performance-main-banner-mobile.png"
            alt="G-Rank"
          />
          <div className="performance-banner-div">
            <h1 data-text="Performance Marketing">
              Performance
              <br />
              Marketing
            </h1>
            <h2>
              Inspire <span className="ideas-red">Ideas</span> that{" "}
              <strong> Sell.</strong>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 performance-subdiv">
              <div>
                <h4>
                  Real-time <br />
                  Growth
                </h4>
                <p>
                  Our experts use data to track the effectiveness of campaign
                  and optimize in real-time
                </p>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-subdiv">
              <div>
                <h4>High return on Investment</h4>
                <p>
                  Our Strategy aims at getting higher return on minimal
                  investment
                </p>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-subdiv">
              <div>
                <h4>Boost your sales</h4>
                <p>
                  Our strategy aims to build a way to customer consciousness to
                  increase sales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-md-6 col-lg-6 performance-div2"
              id="order2"
            >
              <h1>Supercharge Your Marketing Campaigns</h1>
              <p>
                Effective marketing plays a crucial role in driving growth and
                maximizing ROI. One effective approach to achieving outstanding
                results is through performance marketing.
              </p>
              <p>
                At, G-Rank, we transform marketing into a results-driven
                powerhouse. Our performance marketing strategies are designed to
                skyrocket your business to new heights. Our multi-channel
                approach ensures maximum visibility, targeting the right
                audience at the right time.
              </p>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 performance-div2-img"
              id="order1"
            >
              <img
                className="img-fluid w-100"
                src="assest/photos/performance-marketing/marketingboostsales.png"
                alt="G-Rank"
              />
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
        <div className="container-fluid performance-div3">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-5 performance-div3-sec1">
              <h2>Why Choose</h2>
              <img
                className="img-fluid performance-div3-sec1-img"
                src="assest/photos/performance-marketing/performance-grank-logo.png"
                alt="G-Rank"
              />
              <img
                className="img-fluid"
                src="assest/photos/performance-marketing/manwithcloud.png"
                alt="G-Rank"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-7 performance-div3-sec2">
              {/* <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                  <div id="rhombus">
                    <div>
                      <h3>Exceptional Result</h3>
                      <p>
                        Our strategies are tried and tested, providing
                        visibility and improved conversions for your business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4"></div>
                <div className="col-2"></div>
                <div className="col-4">
                  <div id="rhombus2">
                    <div>
                      <h3> Tailored Solution</h3>
                      <p>
                        We understand that every business is unique so we tailor
                        our performance marketing solutions to your specific
                        goals and requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div id="rhombus3">
                    <div>
                      <h3> Transparency</h3>
                      <p>
                        We prioritize complete transparency and accountability,
                        providing regular reports and updates on campaign
                        progress and performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-4"></div>
                <div className="col-4">
                  <div id="rhombus4">
                    <div>
                      <h3> Collaborative Nature</h3>
                      <p>
                        Our team of experts collaborates closely with you to
                        develop a personalized strategy that maximizes your ROI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4"></div>
              </div> */}

              <div className="row">
                <div class="col-md-12">
                  <div class=" h-max position-relative">
                    <div className="rhombus69 rho1">
                      <div class="rotate">
                        <h3>Exceptional Result</h3>
                        <p>
                          Our strategies are tried and tested, providing
                          visibility and improved conversions for your business.
                        </p>
                      </div>
                    </div>

                    <div className="rhombus69 rho2">
                      <div class="rotate">
                        <h3>Tailored Solution</h3>
                        <p>
                          We understand that every business is unique so we
                          tailor our performance marketing solutions to your
                          specific goals and requirements.
                        </p>
                      </div>
                    </div>

                    <div className="rhombus69 rho3">
                      <div class="rotate">
                        <h3> Transparency</h3>
                        <p>
                          We prioritize complete transparency and
                          accountability, providing regular reports and updates
                          on campaign progress and performance.
                        </p>
                      </div>
                    </div>

                    <div className="rhombus69 rho4">
                      <div class="rotate">
                        <h3> Collaborative Nature</h3>
                        <p>
                          Our team of experts collaborates closely with you to
                          develop a personalized strategy that maximizes your
                          ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="h-max desktop-none">
                    <div className="performance-why-cho-div">
                      <div class="">
                        <h3>Exceptional Result</h3>
                        <p>
                          Our strategies are tried and tested, providing
                          visibility and improved conversions for your business.
                        </p>
                      </div>
                    </div>

                    <div className="performance-why-cho-div">
                      <div class="">
                        <h3>Tailored Solution</h3>
                        <p>
                          We understand that every business is unique so we
                          tailor our performance marketing solutions to your
                          specific goals and requirements.
                        </p>
                      </div>
                    </div>

                    <div className="performance-why-cho-div">
                      <div class="">
                        <h3> Transparency</h3>
                        <p>
                          We prioritize complete transparency and
                          accountability, providing regular reports and updates
                          on campaign progress and performance.
                        </p>
                      </div>
                    </div>

                    <div className="performance-why-cho-div">
                      <div class="">
                        <h3> Collaborative Nature</h3>
                        <p>
                          Our team of experts collaborates closely with you to
                          develop a personalized strategy that maximizes your
                          ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="slider-div77-text">
            <h1>Our Performance Marketing Services</h1>
            <p>
              We provide a wide range of services related to performance
              marketing. Our <br />
              services include:
            </p>
          </div>
          <Slider {...settings7}>
            <div className="slider-div77">
              <div className="slider-div7">
                <div>
                  <img
                    className="img-fluid"
                    src="assest/photos/performance-marketing/ad4.png"
                    alt="G-Rank"
                  />
                </div>
                <h1>Display Ads</h1>
              </div>
            </div>
            <div className="slider-div77">
              <div className="slider-div7">
                <div>
                  <img
                    className="img-fluid"
                    src="assest/photos/performance-marketing/ad2.png"
                    alt="G-Rank"
                  />
                </div>
                <h1>Search Ads</h1>
              </div>
            </div>
            <div className="slider-div77">
              <div className="slider-div7">
                <div>
                  <img
                    className="img-fluid"
                    src="assest/photos/performance-marketing/ad3.png"
                    alt="G-Rank"
                  />
                </div>
                <h1>Social Media Marketing</h1>
              </div>
            </div>
            {/* <div className="slider-div77">
              <div className="slider-div7">
                <div>
                  <img
                    className="img-fluid"
                    src="assest/photos/performance-marketing/ad4.png"
                    alt="G-Rank"
                  />
                </div>
                <h1>Video Ads</h1>
              </div>
            </div> */}
            <div className="slider-div77">
              <div className="slider-div7">
                <div>
                  <img
                    className="img-fluid"
                    src="assest/photos/performance-marketing/ad5.png"
                    alt="G-Rank"
                  />
                </div>
                <h1>Search Engine Marketing</h1>
              </div>
            </div>
            <div className="slider-div77">
              <div className="slider-div7">
                <div>
                  <img
                    className="img-fluid"
                    src="assest/photos/performance-marketing/ad6.png"
                    alt="G-Rank"
                  />
                </div>
                <h1>Discovery Ads</h1>
              </div>
            </div>
          </Slider>
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

        <section>
          <div className="performance-footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/branding/branding-footer-img.png"
              alt="G-Rank"
            />
            <div className="performance-footer-div-text">
              <h1>Learn more about our sevices</h1>
              <div className="searchArea">
                <button type="submit" tabindex="2">
                  Explore
                </button>
                <div className="inputDiv">
                  <input type="text" id="inputField" tabindex="1" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        /> */}
      </section>
    </>
  );
};

export default PerformanceMarketing;
