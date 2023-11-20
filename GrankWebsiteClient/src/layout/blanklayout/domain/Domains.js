import React, { useState, useEffect } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Seo from "../seo/Seo";
import AddToCart from "../../../features/frontend/addtocart/AddToCart";
import { Route, Routes } from "react-router-dom";
import Cart from "../../../features/frontend/addtocart/Cart";
import { loadProducts } from "../../../features/frontend/addtocart/thunk-product";
import { useDispatch } from "react-redux";
import AddtocartService from "../../../services/AddtocartService";
import { NavLink } from "react-router-dom";
const Domain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const [data, setData] = React.useState();

  // React.useEffect(() => {
  //   AddtocartService.fetchAllAddtocart()
  //     .then((response) => {
  //       // dispatch(addProducts(json.products))
  //       setData(response?.data?.data);
  //       //   setAddtocart(response?.data?.data);
  //       console.log(response?.data?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
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
    speed: 2000,
    // cssEase: "linear",
    autoplaySpeed: 2000,
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
        title="Buy Domain Name | Bangalore | Hyderabad "
        description="Buy domain name and claim your online identity today. Explore our Domain section to find the perfect web address for your business or personal project."
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
            src="assest/photos/domain/domain-banner2.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/domain/domain-banner2-mobile.png"
            alt="G-Rank"
          />

          <div className="domain-banner-div">
            <motion.h4
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Level up your
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Domain Security
            </motion.h1>
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              With our Two-step Authentication process.
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
            <motion.h5
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Secure your Perfect Domain
            </motion.h5>
          </div>
        </div>
        {/* banner end */}
        {/* second-section start */}
        <section className="domain-second-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 domain-second-heading">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Why buy a Domain with G- Rank?
                </motion.h1>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="domain-second-div">
                  <div>
                    <img
                      className="img-fluid"
                      src="assest/photos/domain/domain-icon6.png"
                      alt="G-Rank"
                    />
                  </div>
                  <div>
                    <h1>Easy Navigation </h1>
                    <h4>
                      Customers can effortlessly purchase website domains and
                      establish their unique online identity without
                      overspending.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="domain-second-div">
                  <div>
                    <img
                      className="img-fluid"
                      src="assest/photos/domain/domain-icon5.png"
                      alt="G-Rank"
                    />
                  </div>
                  <div>
                    <h1>User-Friendly interface </h1>
                    <h4>
                      Our user-friendly interface allows for convenient online
                      domain purchases, simplifying the process for users.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="domain-second-div">
                  <div>
                    <img
                      className="img-fluid"
                      src="assest/photos/domain/domain-icon4.png"
                      alt="G-Rank"
                    />
                  </div>
                  <div>
                    <h1>Cost effective</h1>
                    <h4>
                      Our mission is to redefine affordability, offering premium
                      domains at unbelievably low prices, empowering everyone to
                      establish their online presence and thrive.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  second-section end */}
        {/* slider section start*/}
        <section>
          <div className="container-fluid">
            <div className="col-12">
              <motion.h1
                className="domain-slider-heading"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Features
              </motion.h1>
            </div>
            <div>
              <Slider {...settings12}>
                <div className="domain-slider-div2">
                  <div className="domain-slider-div">
                    <h1>Brand Integrity</h1>
                    <p>
                      Preventing misuse or imitation
                      <br /> of your brand's domain.
                    </p>
                  </div>
                </div>
                <div className="domain-slider-div2">
                  <div className="domain-slider-div">
                    <h1>Cybersquatting Prevention</h1>
                    <p>
                      Avoiding unauthorized Domain <br />
                      registrations for profit.
                    </p>
                  </div>
                </div>
                <div className="domain-slider-div2">
                  <div className="domain-slider-div">
                    <h1>Phishing Defense</h1>
                    <p>
                      Protecting against fake sites
                      <br /> stealing user data.
                    </p>
                  </div>
                </div>
                <div className="domain-slider-div2">
                  <div className="domain-slider-div">
                    <h1>Legal Compliance</h1>
                    <p>
                      Adhering to trademark <br />
                      laws and regulations.
                    </p>
                  </div>
                </div>
                <div className="domain-slider-div2">
                  <div className="domain-slider-div">
                    <h1>Trust Building</h1>
                    <p>
                      Ensuring a secure and <br />
                      consistent online presence.
                    </p>
                  </div>
                </div>
                <div className="domain-slider-div2">
                  <div className="domain-slider-div">
                    <h1>Search Ranking</h1>
                    <p>
                      Maintaining SEO and avoiding
                      <br /> confusion from unauthorized
                      <br />
                      domains with similar content.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* slider section end */}
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
                  Choose Your Domain Plan
                </motion.h1>
              </div>
              {/* <div className="col-12 col-md-4 col-lg-4 domain-cart">                
                <AddToCart />
              </div> */}
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
                    <span>Add To Cart</span>
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
                    Choose from top SSL <br />
                    certificates to secure your
                    <br /> site data.
                  </p>
                  <h5>Starting at</h5>
                  <h4>
                    Rs. 798.45<span>/mo</span>
                  </h4>
                  <h3>
                    <span>Add To Cart</span>
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
                    <span>Add To Cart</span>
                  </h3>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* domain plan end*/}
        {/* domain extention start */}
        <section className="domain-extention-plan-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="domain-extention-slider-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Choose Your Domain Plan
                </motion.h1>
                <motion.p
                  className="domain-extention-slider-passage"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Find your perfect Domain to showcase
                  <br /> your online presence.
                </motion.p>
              </div>
              <div className="col-12 col-md-3 col-lg-3 p-0">
                <motion.div
                  className="domain-extention-plan-div extension-div1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1>.com</h1>
                  <p>Recommended extension for technology related projects.</p>
                  <h4>
                    Rs. 49<span>/mo</span>
                  </h4>
                  <h5>*1st year with a 2 or more years registration</h5>
                  <h3>
                    <span>Add To Card</span>
                  </h3>
                </motion.div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 p-0">
                <motion.div
                  className="domain-extention-plan-div "
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1>.com</h1>
                  <p>Recommended extension for technology related projects.</p>
                  <h4>
                    Rs. 49<span>/mo</span>
                  </h4>
                  <h5>*1st year with a 2 or more years registration</h5>
                  <h3>
                    <span>Add To Card</span>
                  </h3>
                </motion.div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 p-0">
                <motion.div
                  className="domain-extention-plan-div "
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1>.com</h1>
                  <p>Recommended extension for technology related projects.</p>
                  <h4>
                    Rs. 49<span>/mo</span>
                  </h4>
                  <h5>*1st year with a 2 or more years registration</h5>
                  <h3>
                    <span>Add To Card</span>
                  </h3>
                </motion.div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 p-0">
                <motion.div
                  className="domain-extention-plan-div extension-div2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1>.com</h1>
                  <p>Recommended extension for technology related projects.</p>
                  <h4>
                    Rs. 49<span>/mo</span>
                  </h4>
                  <h5>*1st year with a 2 or more years registration</h5>
                  <h3>
                    <span>Add To Card</span>
                  </h3>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* domain extention end*/}
        {/* FAQ section start*/}
        <section className="domain-extention-faq-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="domain-slider-heading"
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
                          Why do I need a website for my business?
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
                          A website helps promote and sell products/services,
                          connect with new and existing customers, build
                          credibility, compete with larger businesses, and
                          maintain control over branding and marketing.
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
                          Why should I get a domain name from G-Rank?
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
                          G-Rank is a trusted domain registrar, offering easy
                          domain search and domain name generator tools to find
                          the perfect website address for your business.
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
                          Why use G-Rank Website Builder?
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
                          G-Rank Website Builder is a fast and simple way to
                          create a website with professionally designed
                          templates. Just add your content, and you're ready to
                          launch.
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
                          How does G-Rank help small business owners succeed?
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
                          G-Rank offers an all-in-one solution for creating an
                          effective online presence. It provides
                          website-building tools, hosting plans, professional
                          email, and online marketing tools. G-Rank also offers
                          personalized support from G-Rank Guides.
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
                          Why do I need a professional email?
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
                          Switching to a domain-based email, like
                          tommy@vicecity.com, increases customer trust, provides
                          better security with spam and virus filters, and
                          promotes your business more effectively by including
                          your web address in every email you send.
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
      </section>
    </>
  );
};

export default Domain;
