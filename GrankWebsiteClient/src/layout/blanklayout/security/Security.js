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

const Security = () => {
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

  var settings2 = {
    // dots: true,
    infinite: true,
    // speed: 300,
    autoplay: true,

    // autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        title="Web Security Provider in Bangalore | Hyderabad"
        description="Web security provider in bangalore and hyderabad. Explore our Security section to discover a range of robust solutions designed to safeguard your online assets. "
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
            src="assest/photos/security/security-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/security/security-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="security-banner-div">
            {/* <h1>
              Secure
              <br />
              Your Data
            </h1> */}
            <h1 className="waviy-sec ">
              <span>
                Secure
                <br />
                Your Data
              </span>
            </h1>
            <h2>
              We create and build flexible & creative design
              <br /> in your budget
            </h2>

            <h3 href="#">
              <a href="#">Find Out More</a>
            </h3>
          </div>
        </div>
        {/* banner end */}
        {/* section2 Start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="security-circle-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  SSL Features
                </motion.h1>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <motion.div
                  className="security-circle-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div>
                    <img
                      className="img-fluid"
                      src="assest/photos/security/security-icon1.png"
                      alt="G-Rank"
                    />
                  </div>
                  <h1>Confidentiality</h1>
                  <p>
                    Guaranteed via encryption,
                    <br /> which complicates data to
                    <br /> prevent unauthorized <br />
                    decryption.
                  </p>
                </motion.div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <motion.div
                  className="security-circle-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div>
                    <img
                      className="img-fluid"
                      src="assest/photos/security/security-icon2.png"
                      alt="G-Rank"
                    />
                  </div>
                  <h1>Integrity</h1>
                  <p>
                    Establish encryption
                    <br /> methods to prevent
                    <br /> unauthorized
                    <br />
                    alterations.
                  </p>
                </motion.div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <motion.div
                  className="security-circle-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <div>
                    <img
                      className="img-fluid"
                      src="assest/photos/security/security-icon3.png"
                      alt="G-Rank"
                    />
                  </div>
                  <h1>Authentication</h1>
                  <p>
                    Establish through highly
                    <br /> secure digital authenticity
                    <br />
                    certificates, minimizing the <br />
                    risk of falsification.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* section2 end */}
        {/* blue text start */}
        <section className="security-blue-section">
          <div className="container">
            <div className="row ">
              <div className="col-12 security-blue-div">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  About SSL Security 
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  A standard technology used to establish a secure internet
                  connection by encrypting data transmitted between a website
                  and a browser or between two servers. Its primary purpose is
                  to protect sensitive information, such as personal or
                  financial information, from unauthorized access or hacker
                  theft.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        {/* blue text end  */}
        {/* table start */}
        <div className="container security-table-section">
          <div className="row ">
            <div className="col-12">
              <motion.h1
                className="security-circle-heading"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                SSL Features
              </motion.h1>
            </div>
          </div>
        </div>
        {/* <section className="table-section">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="pt-comparison-table table-style-1 table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead className="thead-div">
                      <tr className="header-div">
                        <th className="brl">
                          <div className="cell-inner">
                            <span>Our Full Features Comparison</span>
                          </div>
                        </th>

                        <th>
                          <div className="cell-tag">
                            <span>Basic</span>
                          </div>
                          <div className="cell-inner">
                            <span className="cell-price">
                              $29
                              <span className="subscript">
                                <sup>.95</sup>
                                <sub>/per year</sub>
                              </span>
                            </span>
                          </div>
                        </th>

                        <th>
                          <div className="cell-tag">
                            <span>Standard</span>
                          </div>
                          <div className="cell-inner">
                            <span className="cell-price">
                              $40
                              <span className="subscript">
                                <sup>.44</sup>
                                <sub>/per year</sub>
                              </span>
                            </span>
                          </div>
                        </th>

                        <th className="brr">
                          <div className="cell-tag">
                            <span>Premium</span>
                          </div>
                          <div className="cell-inner">
                            <span className="cell-price">
                              $35
                              <span className="subscript">
                                <sup>.66</sup>
                                <sub>/per year</sub>
                              </span>
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Domain</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Hosting</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Website Maintenance</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>SSL Certificate</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Google Workspace Mails</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img src="assest/photos/hosting/wrong.png" alt="" />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Google Marketing</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img src="assest/photos/hosting/wrong.png" alt="" />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img src="assest/photos/hosting/wrong.png" alt="" />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Social Media Marketing</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img src="assest/photos/hosting/wrong.png" alt="" />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img src="assest/photos/hosting/wrong.png" alt="" />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Branding</span>
                            <del></del>
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img src="assest/photos/hosting/wrong.png" alt="" />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img src="assest/photos/hosting/wrong.png" alt="" />
                          </div>
                        </td>

                        <td>
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="cell-inner">
                            <span>Technical Support</span>
                            <del></del>
                          </div>
                        </td>

                        <td className="cta">
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                          <div className="cell-tag-bottom">
                            <a href="#">Buy Now</a>
                          </div>
                        </td>

                        <td className="cta">
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                          <div className="cell-tag-bottom">
                            <a href="#">Buy Now</a>
                          </div>
                        </td>

                        <td className="cta">
                          <div className="cell-inner">
                            <img
                              src="assest/photos/hosting/wright.png"
                              alt=""
                            />
                          </div>
                          <div className="cell-tag-bottom">
                            <a href="#">Buy Now</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
        {/* table end  */}
        {/* lock banner start */}

        <section className="security-section-margin">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 security-slider-img">
                <motion.img
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="img-fluid "
                  src="assest/photos/security/security-slider-img.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 align-self-center">
                <motion.h1
                  className="security-slider-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Why Choose Us?
                </motion.h1>

                <Slider {...settings2}>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="security-testimonial-slider-h1">
                          Comprehensive Protection
                        </p>
                        <motion.p
                          className="security-testimonial-slider-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Our solution covers a wide range of threats,
                          <br /> including hacking attempts, data breaches, and
                          <br />
                          unauthorized access, ensuring comprehensive
                          <br />
                          safeguarding of valuable data.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="security-testimonial-slider-h1">
                          Strong Encryption
                        </p>
                        <motion.p
                          className="security-testimonial-slider-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Robust encryption techniques to secure <br />
                          sensitive information, making it extremely <br />
                          difficult for unauthorized individuals to
                          <br /> access and exploit data.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="security-testimonial-slider-h1">
                          Seamless Integration
                        </p>
                        <motion.p
                          className="security-testimonial-slider-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Ease of implementation and integration
                          <br /> process allows clients to quickly and <br />
                          smoothly adopt their security solutions without
                          disruptions to <br />
                          their core business activities.
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="security-testimonial-slider-h1">
                          Customer-Focused Approach
                        </p>
                        <motion.p
                          className="security-testimonial-slider-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Our dedication to understanding and <br />
                          meeting the specific needs of each client, providing
                          tailored
                          <br /> security solutions and excellent customer
                          support.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="security-testimonial-slider-h1">
                          Continuous Monitoring and Support
                        </p>
                        <motion.p
                          className="security-testimonial-slider-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          We doesn't just set up security measures and <br />
                          forget about them; instead, we also offer ongoing
                          monitoring and support to ensure sustained protection
                          <br />
                          over time.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* lock banner end  */}
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
                          How do I install my SSL certificate?
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
                          The installation process for your SSL certificate
                          depends on where your site is hosted and your options
                          when purchasing the certificate. If you opt for web
                          hosting with Website Builder or Online Store, the
                          installation will be done for you. If you host your
                          website with another company or use G-Rank's VPS or
                          Dedicated Servers, you must follow specific
                          instructions provided by your hosting provider.
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
                          What is an SSL certificate, and why do I need it?
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
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          An SSL certificate, which stands for Secure Sockets
                          Layer, is a digital certificate that authenticates
                          websites and enables HTTPS encryption. It helps
                          protect the exchange of sensitive information between
                          visitors and a website. Installing an SSL certificate
                          on your site establishes trust with your visitors,
                          ensures secure transmission of user data, verifies
                          ownership of your website, and helps prevent attackers
                          from creating fraudulent versions of your site.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          onClick={() => setOpen3(!open3)}
                        >
                          What is a Multi-Domain UC certificate / SAN
                          certificate?
                          <span>
                            {open3 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          A Multi-Domain UC certificate, also known as a SAN
                          (Subject Alternative Names) certificate, is an SSL
                          certificate that can secure multiple domain names and
                          host names within a domain. With a single UCC SSL
                          certificate, you can protect a primary domain name and
                          up to 99 additional Subject Alternative Names. This
                          type of certificate is ideal for securing multiple
                          websites or domains under a single SSL certificate.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading4">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                          onClick={() => setOpen4(!open4)}
                        >
                          What is the difference between a Standard SSL
                          certificate and a Premium SSL certificate?
                          <span>
                            {open4 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse4"
                      className="collapse"
                      aria-labelledby="heading4"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          The main difference between a Standard SSL certificate
                          and a Premium SSL certificate is the level of
                          validation and the visual indicators in web browsers.
                          A Standard SSL certificate secures your website and
                          displays the https:// prefix in the URL address bar.
                          <br />
                          In contrast, a Premium SSL certificate, specifically
                          an Extended Validation (EV) SSL certificate, triggers
                          a green browser bar in most browsers, providing
                          enhanced visual assurance to visitors. Premium EV SSL
                          certificates require a more extensive vetting process,
                          including verifying the legal and physical existence
                          of the organization, and can take around 30 days to
                          issue.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading5">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                          onClick={() => setOpen5(!open5)}
                        >
                          What are the different types of SSL certificates?
                          <span>
                            {open5 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse5"
                      className="collapse"
                      aria-labelledby="heading5"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          G-Rank offers three types of SSL certificates:
                          <br />
                          Standard SSL certificate: This certificate encrypts
                          your website and displays the https:// prefix. It is
                          suitable for general website security needs.
                          <br />
                          Wildcard SSL certificate: A Wildcard SSL certificate
                          secures a domain and its unlimited number of
                          subdomains. It offers convenience and
                          cost-effectiveness for websites with multiple
                          subdomains.
                          <br />
                          Organizationally Validated (OV) SSL certificate: An OV
                          certificate involves a validation process where the
                          Certificate Authority verifies the organization,
                          physical address, and domain name. It provides
                          moderate trust and is suitable for public-facing
                          websites with lower-level transactions.
                          <br />
                          Extended Validation (EV) SSL certificate: An EV SSL
                          certificate offers the highest level of security. It
                          undergoes a thorough vetting process, including
                          verification of corporate documents, identity
                          confirmation, and third-party database checks. It is
                          recommended for websites dealing with sensitive
                          information.
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

export default Security;
