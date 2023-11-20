import React, { useEffect, useRef, useState } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
import AddToCart from "../../../features/frontend/addtocart/AddToCart";

const VpsHosting = () => {
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

  const settings4 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    arrows: false,
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
        title="VPS Hosting Services in Bangalore | Hyderabad"
        description="VPS hosting services in bangalore and hyderabad. Explore how our Virtual Private Servers provide robust performance, scalability, and security for your website."
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
        <div>
          <div className="hosting-banner">
            <div className="row">
              <div className="col-12 col-lg-5" id="order2">
                <div className="exp-hosting">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    VPS Hosting ​
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    If you are looking for an reliable shared hosting provider
                    for optimal web performance, look no further!
                  </motion.p>

                  <motion.h3
                    href="#"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <a href="#">Explore</a>
                  </motion.h3>
                </div>
              </div>
              <div className="col-12 col-lg-7" id="order1">
                <img
                  className="img-fluid w-100"
                  src="assest/photos/hosting/hosting-banner4.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="explore-plans">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Explore Your VPS Hosting Plan​
            </motion.h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Click Here</a>
            </motion.h3>
          </div>
        </div>

        <div>
          <div className="features-sec2">
            <div className="container">
              <div className="titleh2 mt60">
                <h2>Benefits</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="whychoose-sec">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-4 slider-div5">
                  <div className="op">
                    <img src="assest/photos/hosting/chart.png" alt="" />
                    <h2 className="slider-img5">Dedicated Resources</h2>
                    <p>
                      Consistent performance regardless <br />
                      of others.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 slider-div5">
                  <div className="op">
                    <img src="assest/photos/hosting/equalizer.png" alt="" />
                    <h2 className="slider-img5">Customization</h2>
                    <p>
                      Full control over settings and
                      <br /> software.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 slider-div5">
                  <div className="op">
                    <img src="assest/photos/hosting/scalability.png" alt="" />
                    <h2 className="slider-img5">Scalability</h2>
                    <p>Easily adjust resources as needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container shared-title-sec">
          <div className="titleh2 ">
            <h2>About VPS Hosting</h2>
            <p className="shared-title-p">
              A virtual private server (VPS) is a virtual machine offering
              virtualized server resources. It operates on a physical server
              that is shared among multiple users. VPS hosting provides you with
              dedicated server space and a specific allocation of resources,
              granting you more control and customization options than shared
              hosting.
            </p>
          </div>
        </div>

        <div>
          <div className="bestprice-sec">
            <div className="container-fluid">
              <div className="titleh2w2">
                <h2>Choose Your VPS Hosting Plan</h2>
              </div>

              {/* <div className="container">
                <div className="row mt80">
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
                                <img
                                  src="assest/photos/hosting/wrong.png"
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
                                <span>Google Marketing</span>
                                <del></del>
                              </div>
                            </td>

                            <td>
                              <div className="cell-inner">
                                <img
                                  src="assest/photos/hosting/wrong.png"
                                  alt=""
                                />
                              </div>
                            </td>

                            <td>
                              <div className="cell-inner">
                                <img
                                  src="assest/photos/hosting/wrong.png"
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
                                <span>Social Media Marketing</span>
                                <del></del>
                              </div>
                            </td>

                            <td>
                              <div className="cell-inner">
                                <img
                                  src="assest/photos/hosting/wrong.png"
                                  alt=""
                                />
                              </div>
                            </td>

                            <td>
                              <div className="cell-inner">
                                <img
                                  src="assest/photos/hosting/wrong.png"
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
                                <span>Branding</span>
                                <del></del>
                              </div>
                            </td>

                            <td>
                              <div className="cell-inner">
                                <img
                                  src="assest/photos/hosting/wrong.png"
                                  alt=""
                                />
                              </div>
                            </td>

                            <td>
                              <div className="cell-inner">
                                <img
                                  src="assest/photos/hosting/wrong.png"
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
              </div> */}
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
        {/* why choose us for shared hosting start */}
        <div>
          <div className="features-sec2">
            <div className="container">
              <div className="titleh2 mt60">
                <h2>Why Choose Us For VPS Hosting</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="whychoose-sec">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-3 col-lg-3 slider-div6">
                  <div className="op2">
                    <h2 className="slider-img5">
                      G-Rank VPS <br /> Hosting
                    </h2>
                    <p>
                      Offers tailored VPS hosting plans to match your needs.
                    </p>
                    <p>One of the industry's top VPS hosting providers.</p>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 slider-div6">
                  <div className="op2">
                    <h2 className="slider-img5">Why Choose Us</h2>
                    <p>
                      Affordable VPS hosting with cPanel for user-friendly
                      control.
                    </p>
                    <p>
                      Managed VPS hosting for business focus, with technical
                      aspects managed.
                    </p>
                    <p>
                      Dedicated expert team for exceptional customer support.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 slider-div6">
                  <div className="op2">
                    <h2 className="slider-img5">
                      Performance <br />
                      and Reliability
                    </h2>
                    <p>Emphasizes reliability, ensuring excellent uptime.</p>
                    <p>
                      State-of-the-art infrastructure and cutting-edge
                      technology.
                    </p>
                    <p>
                      Robust security measures for data safety and website
                      performance.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 slider-div6">
                  <div className="op2">
                    <h2 className="slider-img5">Scalability</h2>
                    <p>
                      Scalable solutions, allowing resource upgrades as your
                      business grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why choose us for shared hosting end */}

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
      </section>
    </>
  );
};

export default VpsHosting;
