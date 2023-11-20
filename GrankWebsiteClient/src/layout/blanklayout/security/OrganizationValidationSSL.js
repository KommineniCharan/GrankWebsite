import React, { useState, useEffect } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seo from "../seo/Seo";
import AddToCartSecu from "../../../features/frontend/addtocartsecu/AddToCartSecur";
import { loadProducts } from "../../../features/frontend/addtocartsecu/thunk-productsecu";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const OrganizationValidationSSL = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
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

  //  useState section end----------------------------------------
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

  // Slider section start-----------------------------------------
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="security-slider-custome-button-next"
        // style={{ ...style, display: "block", background: "ccc" }}
        onClick={onClick}
      >
        <KeyboardArrowRightIcon className="forword-arrow" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="security-slider-custome-button-prev"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <KeyboardArrowLeftIcon className="backword-arrow" />
      </div>
    );
  }
  // Slider section start-----------------------------------------

  return (
    <>
      <Seo
        title="OV SSL Certificate Provider in Bangalore | Hyderabad"
        description="OV SSL Certificate provider in bangalore and hyderbad. Explore how our organization validation ssl  verifies your entity, encrypts data, and assures visitors of your website's authenticity. "
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
            src="assest/photos/security/security-subbanner3.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/security/security-subbanner3-mobile.png"
            alt="G-Rank"
          />

          <div className="security-org-banner-div">
            {/* <h1>
              Organization
              <br />
              Validation SSL
              <br />
              (OV SSL)
            </h1> */}
            <h1 className="waviy-sec ">
              <span>
                Organization
                <br />
                Validation SSL
                <br />
                (OV SSL)
              </span>
            </h1>

            <h2>Authenticity is Legitimacy </h2>

            <h3 href="#">
              <a href="#">Find Out More</a>
            </h3>
          </div>
        </div>
        {/* banner end */}

        {/* blue text start */}
        <section className="">
          <div className="container">
            <div className="row ">
              <div className="col-12 security-standard-blue-div">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  About the OV SSL certificate
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  An OV SSL certificate verifies that a legitimate business
                  operates the website by
                  <br /> confirming its existence, address, and domain
                  ownership.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        {/* blue text end  */}
        {/* table start */}
        <section className="standardssl-section">
          <div className="container security-table-section">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="security-circle-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  style={{ color: "#fff" }}
                >
                  Choose the right SSL Certificate
                </motion.h1>
              </div>
            </div>
          </div>
          {/* <AddToCartSecu /> */}
          <section className="security-padding">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className="row">
                    <div className="col-12 col-lg-12 table-static-div">
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p style={{ color: " #436fe8" }}>
                            SSL Full Features Comparison
                          </p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Protects</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Validation Type</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Encryption Type</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Benefits</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>SSL Issue Period</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>HTTPS & Padlock</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Security Trust Seal</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Green Address Bar</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Supports</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Free Relssues</p>
                        </div>
                      </h4>
                      <h4 className="table-cell-tag2">
                        <div className="cell-inner">
                          <p>Technical Support</p>
                        </div>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-9 p-0">
                  <div className="row">
                    <AddToCartSecu />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <AddToCartSecu /> */}
        </section>
        {/* table end  */}

        {/* FAQ section start*/}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="security-circle-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  FAQ's
                </motion.h1>
              </div>
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
                          What does an OV SSL Certificate look like?
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
                          Any website protected by an OV SSL Certificate
                          displays a small padlock and HTTPS prefix in the
                          visitor's browser bar. It's reassuring to those who
                          know to look for it before sharing private details
                          online. These signs confirm that they're on an
                          encrypted site and their data is safe.
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
                          What are the advantages of an OV SSL for your
                          business?
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
                          An OV Certificate is manually vetted and is unlikely
                          to be awarded to a thief or hacker. Domain Validation
                          (DV) Certificates provide a different level of
                          assurance since the verification process is automated.
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
        {/*Input start */}
        <section>
          <div className="performance-footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/security/white-and-blue-back.png"
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
        {/*Input start */}
      </section>
    </>
  );
};

export default OrganizationValidationSSL;
