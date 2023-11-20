import React, { useEffect, useRef, useState } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailLockIcon from "@mui/icons-material/MailLock";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Seo from "../seo/Seo";
import AddToCart from "../../../features/frontend/addtocart/AddToCart";
import { loadProducts } from "../../../features/frontend/addtocart/thunk-product";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Hosting = () => {
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
        title="Web Hosting Services in Bangalore | Hyderabad"
        description="Web hosting services in bangalore and hyderabad. Explore a range of 
                    reliable and secure hosting options that provide the foundation for your digital success."
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
              <div className="col-md-5" id="order2">
                <div className="exp-hosting">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Experience Real Uptime <br /> With Us!
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    If you are looking for an reliable web hosting provider for
                    optimal web performance, look no further!
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
              <div className="col-md-7" id="order1">
                <img
                  className="img-fluid w-100"
                  src="assest/photos/hosting/hosting-banner.png"
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
              Explore the web hosting plans!
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
          <div className="features-sec">
            <div className="container">
              <div className="fea">
                <h2>Features</h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="box-left">
                    <div className="one-box">
                      <div className="icon-box">
                        <OpenInFullIcon />
                      </div>
                      <div className="content-box">
                        <h3>Scalability</h3>
                        <p>
                          As your business expands and attracts more visitors,
                          upgrading your hosting plan allows for increased
                          traffic, storage, and bandwidth, ensuring optimal
                          website performance during surges in traffic.
                        </p>
                      </div>
                    </div>

                    <div className="one-box">
                      <div className="icon-box">
                        <MailLockIcon />
                      </div>
                      <div className="content-box">
                        <h3>Security and Data Protection</h3>
                        <p>
                          As your business expands and attracts more visitors,
                          upgrading your hosting plan allows for increased
                          traffic, storage, and bandwidth, ensuring optimal
                          website performance during surges in traffic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-right">
                    <div className="one-box">
                      <div className="icon-box">
                        <SupportAgentIcon />
                      </div>
                      <div className="content-box">
                        <h3>Technical Support</h3>
                        <p>
                          Experienced technical support for website hosting,
                          including troubleshooting, server maintenance, and
                          feature configuration. Having a knowledgeable
                          assistant saves time and effort.
                        </p>
                      </div>
                    </div>

                    <div className="one-box">
                      <div className="icon-box">
                        <PermDataSettingIcon />
                      </div>
                      <div className="content-box">
                        <h3>Reliability and Performance</h3>
                        <p>
                          A reliable server infrastructure and robust technical
                          support provide your website with minimal downtime and
                          optimal performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="titleh2 mt60">
                <h2>Why Choose Us!</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="whychoose-sec">
            <div className="container-fluid">
              <Slider {...settings4}>
                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/badge.png" alt="" />
                    <h2 className="slider-img4">Reliability and Uptime</h2>
                    <p>
                      High uptime guarantee, ideally 99.9% or higher. With good
                      reliability website can be accessible to visitors at all
                      times
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/high-speed.png" alt="" />
                    <h2 className="slider-img4">Performance and Speed</h2>
                    <p>
                      Fast loading times for a positive user experience and SEO
                      rankings.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/scalability.png" alt="" />
                    <h2 className="slider-img4">Scalability</h2>
                    <p>
                      Offer scalable plans that allow you to easily upgrade as
                      your website's traffic and needs increase
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/secure-shield.png" alt="" />
                    <h2 className="slider-img4">Security Measures</h2>
                    <p>
                      Robust security features, including SSL certificates,
                      regular backups, and malware scanning to keep your website
                      and data safe.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/control-panel.png" alt="" />
                    <h2 className="slider-img4">Control Panel</h2>
                    <p>
                      A user friendly control panel, such as cPanel or Plesk, to
                      manage your website and hosting settings more straight
                      forward and intuitive.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div>
          <div className="bestprice-sec">
            <div className="container-fluid">
              <div className="titleh2w">
                <h2>Our Best Pricing Plan</h2>
                <p>
                  We know that everybody's needs are different. That's why{" "}
                  <br />
                  we've created a plan that'll work for you.
                </p>
              </div>

              <div className="row mt60">
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
                          <span className="pt-price-title"> Premium Plan </span>
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

              <div className="row mt40">
                <div className="col-md-12">
                  <p className="table-p">
                    Comprehensive breakdown of our plans
                  </p>
                </div>
              </div>
              {/* add to cart */}
              {/* <AddToCart /> */}
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
                            <AddToCart />
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

        {/* FAQ section start*/}
        <div>
          <section className="faq-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <motion.h2
                    className="slider-heading"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    FAQ'S
                  </motion.h2>
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
                            What is Web Hosting?
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
                            Web Hosting refers to the service that allows
                            individuals or organizations to make their websites
                            accessible on the internet. It involves storing
                            website files on a server connected to the internet,
                            ensuring visitors can access the website anytime.
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
                            What types of web hosting are available ?
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
                            There are various types of web hosting, including
                            shared hosting, virtual private server (VPS)
                            hosting, dedicated hosting, cloud hosting, and
                            reseller hosting. Each type offers different levels
                            of performance, control, and scalability.
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
                            What factors should I consider when choosing a web
                            hosting provider ?
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
                            Some important factors to consider when choosing a
                            web hosting provider include reliability,
                            performance, customer support, scalability, pricing,
                            security features, control panel options, and backup
                            services. It's also helpful to read reviews and
                            consider the provider's reputation.
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
                            Can I host multiple websites on a single hosting
                            plan ?
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
                            Many hosting providers offer plans allowing you to
                            host multiple websites on a single account. Shared
                            hosting plans often provide this feature, while
                            other types of hosting may have limitations or
                            require additional fees for hosting multiple
                            websites.
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
                            How much disk space and bandwidth do I need for my
                            website ?
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
                            The required disk space and bandwidth depend on your
                            website's content, expected traffic, and
                            functionality. A few gigabytes of disk space and
                            several hundred gigabytes of bandwidth should be
                            sufficient for small to medium-sized websites.
                            However, choosing a hosting plan that allows room
                            for growth is advisable.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isShowMore && (
                    <div className="accordion" id="accordionExample2">
                      <div className="card">
                        <div className="card-header" id="heading6">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse6"
                              aria-expanded="false"
                              aria-controls="collapse6"
                              onClick={() => setOpen6(!open6)}
                            >
                              Can I transfer my website from one hosting
                              provider to another ?
                              <span>
                                {open6 ? (
                                  <RemoveIcon className="accordion-arrow" />
                                ) : (
                                  <AddIcon className="accordion-arrow" />
                                )}
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse6"
                          className="collapse"
                          aria-labelledby="heading6"
                          data-parent="#accordionExample2"
                        >
                          <div className="card-body">
                            <div className="card-body-span">
                              Yes, transferring your website from one hosting
                              provider to another is possible. Most hosting
                              providers offer migration services or guides on
                              transferring your website files, databases, and
                              configurations. It's recommended to consult with
                              the new hosting provider or seek technical
                              assistance to ensure a smooth transfer.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="readmore-button" onClick={toggleReadMoreLess}>
                    {isShowMore ? (
                      <ArrowDropUpIcon className="readmore-up" />
                    ) : (
                      <ArrowDropDownIcon className="readmore-up" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* FAQ section end*/}

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

export default Hosting;
