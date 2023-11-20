import React, { useState, useEffect } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seo from "../seo/Seo";
import AddToCart from "../../../features/frontend/addtocart/AddToCart";
import { loadProducts } from "../../../features/frontend/addtocart/thunk-product";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const Email = () => {
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
        title=" Email Service Provider in Bangalore | Hyderabad"
        description="Email service provider in bangalore and hyderabad. Streamline your communication with our Email services. Explore how we provide reliable, efficient, and secure email solutions to meet your personal and business needs."
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
            src="assest/photos/email/email-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/email/email-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="email-banner-div">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Reach
              <br />
              potential audience
              <br />
              with quality email !
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Stop chasing old email method, get
              <br /> found, get leads and get customers by integrating quality
              <br /> emails with us!
            </motion.h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Find Out More</a>
            </motion.h3>
          </div>
        </div>
        {/* banner end */}

        {/* second section start */}
        <section className="email-second-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5">
                <h1 className="email-second-heading">Google Workspace</h1>
                <div className="row email-second-main-div">
                  <div className="col-12 col-md-6 col-lg-6 email-second-div">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon3.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>Google Mail</h1>
                      <p>
                        Create and send
                        <br /> mail within 
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 email-second-div">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon1.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>Google Drive</h1>
                      <p>
                        Stores your data at <br />
                        one place.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 email-second-div">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon2.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>Google Calendar</h1>
                      <p>
                        Organize your <br />
                        upcoming events. 
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 email-second-div">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon8.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>Google Meet</h1>
                      <p>
                        Allow interaction <br />
                        with team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <h1 className="email-second-heading">Microsoft Office 365</h1>
                <div className="row email-second-main-div">
                  <div className="col-6 col-md-6 col-lg-6 email-second-div2">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon7.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>Teams</h1>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 email-second-div2">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon6.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>Office</h1>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 email-second-div2">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon5.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>Outlook</h1>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 email-second-div2">
                    <div>
                      <img
                        className="img-fluid"
                        src="assest/photos/email/email-icon4.png"
                        alt="G-Rank"
                      />
                    </div>
                    <div>
                      <h1>One Drive</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <h1 className="email-second-heading">Rediff Mail Pro</h1>
                <div className="email-second-main-div">
                  <p>
                    Rediff Mail Pro is a powerful and feature-rich email client
                    that lets us manage your inbox, read and respond to emails,
                    and schedule emails for later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* second section end */}
        {/* table section start */}
        <section className="email-table-section">
          <div>
            <div className="bestprice-sec">
              <div className="container-fluid">
                <div className="titleh2w">
                  <h2>Our Best Pricing Plan</h2>
                </div>

                <div className="row mt60 email-table-row">
                  <div className="col-md-4">
                    <div className="price-box">
                      <div className="row bos">
                        <div className="col-md-6 pr0">
                          <div className="pt-pricebox-info">
                            <span className="pt-price-title"> Basic Plan </span>
                            <div className="dollar-price">
                              <h2 className="price">
                                <span className="dollar">&#x24;</span>
                                29.95
                              </h2>
                              <p className="pt-price-duration">/Per Year</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 pl0">
                          <ul className="pt-list-info">
                            <li>Domain</li>
                            <li>Hosting</li>
                            <li>Website Maintenance</li>
                            <li>SSL Certificate</li>
                            <li>Google Workspace</li>
                            <li>Google Marketing</li>
                            <li>24/7 Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="price-box">
                      <div className="row bos">
                        <div className="col-md-6 pr0">
                          <div className="pt-pricebox-info">
                            <span className="pt-price-title">
                              {" "}
                              Standard Plan{" "}
                            </span>
                            <div className="dollar-price">
                              <h2 className="price">
                                <span className="dollar">&#x24;</span>
                                35.95
                              </h2>
                              <p className="pt-price-duration">/Per Year</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 pl0">
                          <ul className="pt-list-info">
                            <li>Domain</li>
                            <li>Hosting</li>
                            <li>Website Maintenance</li>
                            <li>SSL Certificate</li>
                            <li>Google Workspace</li>
                            <li>Google Marketing</li>
                            <li>24/7 Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="price-box">
                      <div className="row bos">
                        <div className="col-md-6 pr0">
                          <div className="pt-pricebox-info">
                            <span className="pt-price-title">
                              {" "}
                              Premium Plan{" "}
                            </span>
                            <div className="dollar-price">
                              <h2 className="price">
                                <span className="dollar">&#x24;</span>
                                40.44
                              </h2>
                              <p className="pt-price-duration">/Per Year</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 pl0">
                          <ul className="pt-list-info">
                            <li>Domain</li>
                            <li>Hosting</li>
                            <li>Website Maintenance</li>
                            <li>SSL Certificate</li>
                            <li>Google Workspace</li>
                            <li>Google Marketing</li>
                            <li>24/7 Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-3 p-0 table-static-div">
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p style={{ color: " #436fe8" }}>
                              Our Full Features Comparison
                            </p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Domain</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Hosting</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Website Maintenance</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>SSL Certificate</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Google Workspace Mails</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Google Marketing</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Social Media Marketing</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Branding</p>
                          </div>
                        </h4>
                        <h4 className="table-cell-tag2">
                          <div className="cell-inner">
                            <p>Technical Support</p>
                          </div>
                        </h4>
                      </div>
                      <AddToCart />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* table section end */}
        {/* lock banner start */}

        <section className="email-section">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-12 col-md-6 col-lg-6 align-self-center"
                id="order2"
              >
                <motion.h1
                  className="email-ani-email-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Why choose Emails for
                  <br /> your businesses?
                </motion.h1>

                <Slider {...settings2}>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="email-ani-email-h1">
                          Attracts more website visitors
                        </p>
                        <motion.p
                          className="email-ani-email-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Including links and calls-to-action in professional
                          emails can drive traffic to a business's website,
                          increasing the chances of converting leads into
                          customers.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="email-ani-email-h1">Builds trust</p>
                        <motion.p
                          className="email-ani-email-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          A well-crafted professional email demonstrates
                          professionalism, reliability, and competence, helping
                          to build trust between businesses and their customers.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="email-ani-email-h1">
                          Develops stronger relationships
                        </p>
                        <motion.p
                          className="email-ani-email-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Consistent and effective email communication allows
                          businesses to foster stronger relationships with their
                          customers, leading to increased loyalty and repeat
                          business.
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="email-ani-email-h1">Generates leads</p>
                        <motion.p
                          className="email-ani-email-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Well-crafted professional emails with compelling
                          content and calls-to-action can generate leads and
                          drive potential customers to take desired actions,
                          such as signing up for a newsletter or making a
                          purchase.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slider-div">
                    <div className="row">
                      <div className="col-12">
                        <p className="email-ani-email-h1">
                          Provides a consistent form of communication
                        </p>
                        <motion.p
                          className="email-ani-email-text"
                          initial={{ opacity: 0, scale: 0, y: 100 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          Professional emails offer a standardized and
                          consistent way of conveying messages, ensuring clarity
                          and reducing miscommunication.
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-12 col-md-6 col-lg-6" id="order1">
                <div className="ani-girl-div">
                  <motion.img
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="img-fluid w-100"
                    src="assest/photos/email/ani-girl.png"
                    alt="G-Rank"
                  />
                  <img
                    className=" ani-girl-img1"
                    src="assest/photos/email/ani-img1.png"
                    alt="G-Rank"
                  />
                  <img
                    className=" ani-girl-img2"
                    src="assest/photos/email/ani-img2.png"
                    alt="G-Rank"
                  />
                  <img
                    className=" ani-girl-img3"
                    src="assest/photos/email/ani-img3.png"
                    alt="G-Rank"
                  />
                </div>
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
                          What is G-Rank Professional Email?
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
                          G-Rank Professional Email is an email service that
                          allows you to use an email address matching your
                          domain name for your business. It comes with features
                          like calendar, contacts, and tasks, and can be
                          accessed through a webmail portal or your favorite
                          email client.
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
                          What are the benefits of having a domain-based
                          business email address?
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
                      className="collapse "
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          - It serves as word-of-mouth advertising for your
                          website and company.
                          <br />
                          - It portrays professionalism and seriousness about
                          your business.
                          <br />
                          - You can create a unique and memorable address.
                          <br />- It is ad-free, avoiding distractions and
                          invasive ads.
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
                          data-toggle="collapse "
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          onClick={() => setOpen3(!open3)}
                        >
                          How can I ensure the security of my business email?
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
                          G-Rank ensures the security of your business email
                          through industry-leading spam and virus filters,
                          256-bit encryption, and best-in-class security
                          measures. They employ advanced data analytics,
                          automated threat monitoring, and a team of experts to
                          provide real-time security.
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
                          data-toggle="collapse "
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          onClick={() => setOpen3(!open3)}
                        >
                          Does G-Rank's Professional Email include a spam
                          filter?
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
                          Yes, G-Rank's Professional Email includes a spam
                          filter. They have industry-leading spam and anti-virus
                          filters that block millions of unwanted and
                          potentially dangerous emails on a daily basis.
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

export default Email;
