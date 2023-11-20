import React, { useState } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";

const DomainTransfer = () => {
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

  const settings12 = {
    className: "center-slider2",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    // cssEase: "linear",
    autoplaySpeed: 1000,
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
  // faq section start
  // useState section start--------------------------------------
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  // acoordian button
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  //  useState section end----------------------------------------
  // faq section end

  return (
    <>
      <Seo
        title="Domain Transfer Services in Bangalore | Hyderabad"
        description="Domain Transfer services in bangalore and hyderbad. Explore how we effortlessly move your web domains to a more reliable, efficient platform."
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
        {/* banner start */}
        <div
          className="creative-banner-display-ads"
          style={{ backgroundColor: "#fff", position: "relative" }}
        >
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/domain/domain-transfer-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/domain/domain-transfer-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="domain-banner-div">
            <motion.h1
              style={{ color: "#ffff" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Domain Transfer
            </motion.h1>
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Domain Transfer Made Effortless!
            </motion.h5>
            {/* <div className="searchArea2">
        
              <IconButton color="primary">
                <SearchIcon />
              </IconButton>

              <div className="inputDiv">
                <input
                  type="text"
                  id="inputField"
                  tabindex="1"
                  placeholder="Find Domain Name"
                />
              </div>
            </div> */}
          </div>
        </div>
        {/* banner end */}
        {/* yellow section start */}

        <section className="yellow-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1 className="yellow-section-heading">
                  Choose From The Most Popular
                  <br /> Domain Extensions
                </h1>
              </div>
              <div className="col-12 col-md-4 col-lg-4 ">
                <div className="yellow-transfer-section-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/domain/domain-icon3.png"
                    alt="G-Rank"
                  />
                  <h1>
                    Advanced <br />
                    Domain Management
                  </h1>
                  <p>
                    Effortlessly manage numerous domains and websites using a
                    single control panel.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 ">
                <div className="yellow-transfer-section-div">
                  <img
                    className="img-fluid "
                    src="assest/photos/domain/domain-icon2.png"
                    alt="G-Rank"
                  />
                  <h1>
                    24/7 Expert Chat
                    <br />
                    Support
                  </h1>
                  <p>
                    Count on us to swiftly address issues and have your websites
                    operational immediately.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 ">
                <div className="yellow-transfer-section-div">
                  <img
                    className="img-fluid"
                    src="assest/photos/domain/domain-icon1.png"
                    alt="G-Rank"
                  />
                  <h1>
                    Optimized Website
                    <br />
                    Speed
                  </h1>
                  <p>
                    Treat your visitors to an exceptional experience with
                    quick-loading, high-performing websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* yellow section end */}
        {/* domain plan start */}
        <section className="domain-plan-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="domain-slider-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Give Your Domain A Boost
                </motion.h1>
              </div>
              <div className="col-12 col-md-3 col-lg-3 ">
                <div className="domain-name-div">
                  <h1>
                    Use the G-Rank Domain transfer tool and enter a domain
                  </h1>
                  <p>
                    Enter your website name to initiate the Domain transfer
                    process.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 ">
                <div className="domain-name-div">
                  <h1>Complete the payment to transfer a domain</h1>
                  <p>
                    Pay the Domain transfer charges, and you will be redirected
                    to our member's area.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="domain-name-div">
                  <h1>Enter the EPP code or authorization code.</h1>
                  <p>
                    As a Domain owner, you can obtain the auth code from your
                    current registrar.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 ">
                <div className="domain-name-div">
                  <h1>Confirm your G-Rank Domain transfer.</h1>
                  <p>
                    You will receive a confirmation email from your previous
                    registrar to authorize the Domain transfer to G-Rank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* domain plan end*/}

        {/* FAQ section start*/}
        <section className="faq-heading-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1>Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="domain-extention-faq-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => setOpen1(!open1)}
                        >
                          How long does a domain transfer take?
                          <span>
                            {open1 ? (
                              <AddIcon className="accordion-arrow" />
                            ) : (
                              <RemoveIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          The duration of a domain transfer can vary. It
                          generally takes 5 to 7 days for most domain transfers
                          to complete. However, it might take longer due to
                          factors like the responsiveness of the current
                          registrar and any potential issues that arise during
                          the process.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          onClick={() => setOpen2(!open2)}
                        >
                          Can I transfer a domain immediately after I've
                          registered it?
                          <span>
                            {open2 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Most domain registries have a domain transfer lock
                          period, often lasting 60 days, during which you cannot
                          transfer a newly registered domain. This is to prevent
                          unauthorized transfers shortly after registration.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading3">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                          onClick={() => setOpen2(!open2)}
                        >
                          What information do I need for a domain transfer?
                          <span>
                            {open2 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse3"
                      className="collapse show"
                      aria-labelledby="heading3"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          You'll typically need the domain name, the EPP code
                          (authorization code) from your current registrar, and
                          contact information associated with the domain's
                          administrative contact.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ section end*/}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div className="col-12">
              <motion.h1
                className="web-develop-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Quick Links For You
              </motion.h1>
            </div>
            <div>
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
        {/* Black-section-div start*/}
        <section>
          <div className="footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/domain/white-and-blue-back.png"
              alt="G-Rank"
            />
            <div className="footer-div-text">
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
                  className="footer-div-buttom"
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Contact Us <ArrowRightAltIcon />
                </motion.p>
              </a>
            </div>
          </div>
        </section>
        {/* Black-section-div end*/}
      </section>
    </>
  );
};

export default DomainTransfer;
