import React, { useEffect, useRef, useState } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
import AddToCart from "../../../features/frontend/addtocart/AddToCart";

const DedicatedHosting = () => {
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
        title="Dedicated Hosting Services in Bangalore | Hyderabad"
        description="Dedicated Hosting services in bangalore and hyderabad. Explore our services to experience the pinnacle of hosting solutions, with dedicated resources, enhanced performance, and top-tier security for your website."
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
                    Dedicated Hosting 
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
                  src="assest/photos/hosting/hosting-banner3.png"
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
              Explore Your Dedicated Hosting Plan​
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
                    <img src="assest/photos/hosting/key.png" alt="" />
                    <h2 className="slider-img5">Full Control</h2>
                    <p>
                      Exclusive access to resources and
                      <br /> configurations.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 slider-div5">
                  <div className="op">
                    <img src="assest/photos/hosting/equalizer.png" alt="" />
                    <h2 className="slider-img5">Customization</h2>
                    <p>
                      Tailor server settings to your
                      <br /> needs.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 slider-div5">
                  <div className="op">
                    <img src="assest/photos/hosting/high-speed.png" alt="" />
                    <h2 className="slider-img5">High Performance</h2>
                    <p>
                      Faster loading and handling of
                      <br /> traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container shared-title-sec">
          <div className="titleh2 ">
            <h2>About Dedicated Hosting</h2>
            <p className="shared-title-p">
              It is an internet hosting solution where a specific business
              customer exclusively uses one or more physical servers. This
              arrangement grants the customer full control over the server(s),
              allowing them to customize and optimize it according to their
              specific needs in terms of performance and security.
            </p>
          </div>
        </div>

        <div>
          <div className="bestprice-sec">
            <div className="container-fluid">
              <div className="titleh2w2">
                <h2>Why Choose Us For Dedicated Hosting</h2>
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
                <h2>Why Choose Us For Dedicated Hosting</h2>
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
                      G-Rank <br />
                      Dedicated Server
                      <br /> Hosting
                    </h2>
                    <p>
                      Among the top 10 dedicated server hosting providers in
                      India.
                    </p>
                    <p>Reputation built on years of excellence and trust.</p>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 slider-div6">
                  <div className="op2">
                    <h2 className="slider-img5">Features and Offerings</h2>
                    <p>
                      Cutting-Edge Infrastructure:
                      <br /> Delivering the best dedicated server hosting
                      experience.
                    </p>
                    <p>
                      Tailored Solutions:
                      <br />
                      Dedicated server hosting solutions customized to your
                      needs.
                    </p>
                    <p>
                      Robust Performance:
                      <br />
                      High-performance servers for demanding applications.
                    </p>
                    <p>
                      Enhanced Security:
                      <br />
                      Ensuring data safety and protection.
                    </p>
                    <p>
                      Unlimited Bandwidth:
                      <br />
                      Providing ample data transfer capacity.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 slider-div6">
                  <div className="op2">
                    <h2 className="slider-img5">Customer Satisfaction</h2>
                    <p>
                      Unmatched Commitment:
                      <br />
                      Dedicated to ensuring customer satisfaction.
                    </p>
                    <p>
                      Expert Technical Support:
                      <br />
                      Promptly addressing issues and concerns.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 slider-div6">
                  <div className="op2">
                    <h2 className="slider-img5">Affordability and Quality</h2>
                    <p>
                      Competitive Prices:
                      <br />
                      Affordable rates for dedicated server hosting.
                    </p>
                    <p>
                      No Compromises:
                      <br />
                      Maintaining high-quality service despite lower costs.
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

export default DedicatedHosting;
