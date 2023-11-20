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
const DomainAvailable = () => {
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
        title="Search Domain Availability | Bangalore | Hyderabad"
        description="Discover your digital possibilities with available domains. Explore our Domain Available section to find the perfect web address for your project. "
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
            src="assest/photos/domain/domain-availablility.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/domain/domain-availablility-mobile.png"
            alt="G-Rank"
          />

          <div className="domain-banner-div">
            <motion.h1
              style={{ color: "#ffff" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Domain Availability
            </motion.h1>
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Check Domain Availability Today!
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
                          How do I check if a Domain is available?
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
                          You can check Domain availability using a Domain
                          registration service or a Domain registrar's website.
                          Enter the desired Domain Name into the search bar, and
                          the tool will indicate whether the Domain is available
                          or already taken.
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
                          Can I reserve a Domain Name without purchasing it?
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
                          Generally, you cannot reserve a Domain Name without
                          purchasing it. Domain Names are typically registered
                          on a first-come, first-served basis. Once someone
                          registers a domain, it's not available for others to
                          reserve or use.
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
                          What are premium Domain Names?
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
                          Premium Domain Names are considered valuable due to
                          their short length, keyword relevance, and branding
                          potential. They often come with a higher price tag
                          than regular Domain Names.
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

export default DomainAvailable;
