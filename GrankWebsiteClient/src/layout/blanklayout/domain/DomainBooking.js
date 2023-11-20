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

const DomainBooking = () => {
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
        title="
        Book a Domain | Bangalore | Hyderabad
        "
        description="Unlock your online potential with our Domain Booking services. Explore a world of web addresses and secure your digital identity. Choose from a variety of domain options and start your online journey today."
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
            src="assest/photos/domain/domain-booking-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/domain/domain-booking-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="domain-banner-div">
            <motion.h1
              style={{ color: "#ffff" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Domain Booking
            </motion.h1>
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Seamless Domain Booking!
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
                <div className="yellow-section-div">
                  <h1>.com</h1>
                  <p>
                    Recommended extension for technology <br />
                    related projects.
                  </p>
                  <h2>₹ 999.00</h2>
                  <h3>
                    ₹ 199.00<span>/yr + gst</span>
                  </h3>
                  <h4>
                    *1st year with a 2 or more
                    <br /> years registration
                  </h4>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 ">
                <div className="yellow-section-div">
                  <h1>.com</h1>
                  <p>
                    Recommended extension for technology <br />
                    related projects.
                  </p>
                  <h2>₹ 999.00</h2>
                  <h3>
                    ₹ 199.00<span>/yr + gst</span>
                  </h3>
                  <h4>
                    *1st year with a 2 or more
                    <br /> years registration
                  </h4>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 ">
                <div className="yellow-section-div">
                  <h1>.com</h1>
                  <p>
                    Recommended extension for technology <br />
                    related projects.
                  </p>
                  <h2>₹ 999.00</h2>
                  <h3>
                    ₹ 199.00<span>/yr + gst</span>
                  </h3>
                  <h4>
                    *1st year with a 2 or more
                    <br /> years registration
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* yellow section end */}
        {/* domain plan start */}
        <section className="domain-plan-section">
          <div className="container">
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
              <div className="col-12 col-md-4 col-lg-4">
                <motion.div
                  className="domain-plan-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1>Hosting</h1>
                  <p>
                    Add secure and reliable hosting to your domain through our
                    affordable plans
                  </p>
                  <h5>Starting at</h5>
                  <h4>
                    Rs. 357.71<span>/mo</span>
                  </h4>
                  <h3>
                    <span>Add To Card</span>
                  </h3>
                </motion.div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <motion.div
                  className="domain-plan-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <h1>SSL Protection</h1>
                  <p>
                    Choose from top SSL certificates to secure your site data.
                  </p>
                  <h5>Starting at</h5>
                  <h4>
                    Rs. 798.45<span>/mo</span>
                  </h4>
                  <h3>
                    <span>Add To Card</span>
                  </h3>
                </motion.div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <motion.div
                  className="domain-plan-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <h1>Business Emails</h1>
                  <p>
                    Get fast, inituitive business or personal email that's
                    linked to your domain.
                  </p>
                  <h5>Starting at</h5>
                  <h4>
                    Rs. 210.00<span>/mo</span>
                  </h4>
                  <h3>
                    <span>Add To Card</span>
                  </h3>
                </motion.div>
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
                          How long can I register a Domain?
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
                          Typically, you can register a Domain Name for 1 to 10
                          years. Some registrars offer longer registration
                          options as well.
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
                          How do I buy a Domain Name?
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
                          A Domain Name is simply a human-readable form of an IP
                          address. In other words, it's the destination you type
                          into a web browser -- such as www.google.com. Like how
                          you would scroll to a contact in your phone rather
                          than manually dialing a phone number, Domain Names
                          make it easier for us to navigate the online world and
                          avoid memorizing long IP addresses.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="readmore-button" onClick={toggleReadMoreLess}>
                  {isShowMore ? (
                    <ArrowDropUpIcon className="readmore-up" />
                  ) : (
                    <ArrowDropDownIcon className="readmore-up" />
                  )}
                </div> */}
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

export default DomainBooking;
