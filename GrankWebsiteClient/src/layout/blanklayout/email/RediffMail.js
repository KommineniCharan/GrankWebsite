import React, { useState } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const RediffMail = () => {
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
        title="Rediffmail Service Provider in Bangalore | Hyderabad"
        description="Rediffmail service provider in bangalore and hyderbad.  Discover how Rediffmail can simplify your email experience and keep you connected with ease."
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
            src="assest/photos/email/email-banner3.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/email/email-banner3-mobile.png"
            alt="G-Rank"
          />

          <div className="email-banner-div1">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Rediff Mail Pro
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Efficiency Meets Communication  
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
        <div>
          <div className="whychoose-sec">
            <div className="container-fluid">
              <h4 className="email-sub-head">Benefits of Rediffmail Pro </h4>
              <Slider {...settings4}>
                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">Enhanced Storage</h2>
                    <p>
                      Rediffmail Pro offers a larger storage capacity, allowing
                      users to store more emails and attachments without
                      worrying about running out of space.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">Custom Domain</h2>
                    <p>
                      Users can use their custom domain with Rediffmail Pro,
                      giving them a professional and personalized email address.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">Ad-Free Experience</h2>
                    <p>
                      Rediffmail Pro provides an ad-free email experience,
                      reducing distractions and creating a more focused
                      environment.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">Advanced Security</h2>
                    <p>
                      The service offers advanced security features such as spam
                      filtering, virus scanning, and encryption, helping to
                      protect users from malicious emails and threats.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Priority Customer
                      <br /> Support
                    </h2>
                    <p>
                      Subscribers to Rediffmail Pro often receive priority
                      customer support, ensuring quicker assistance and issue
                      resolution.
                    </p>
                  </div>
                </div>
                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">Synchronization</h2>
                    <p>
                      The service may provide seamless synchronization across
                      devices, ensuring that emails and changes are consistent
                      and up-to-date across multiple platforms.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* second section end */}
        {/* logo section start */}
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h4 className="email-sub-head">
                  Rediffmail Pro Services & Plans
                </h4>
              </div>
              <div className="col-12 col-md-4 col-lg-4 email-redeff-div">
                <div className="email-sub-logo-div">
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    270<span>/yr</span>
                  </h4>

                  <div className="email-small-button">small Business</div>
                  <h2>Basic</h2>
                  <h2>1 GB Storage Space</h2>
                  <h2>Spam & Virus Protection</h2>
                  <h2>Data Localization</h2>
                  <h2>Common Login Page</h2>
                  <h2>-</h2>
                  <h2>-</h2>
                  <h2>-</h2>

                  <h6>Buy Now !</h6>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 email-redeff-div">
                <div className="email-sub-logo-div">
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    510<span>/yr</span>
                  </h4>

                  <div className="email-small-button">special</div>
                  <h2>Most Popular</h2>
                  <h2>10 GB Storage Space</h2>
                  <h2>Spam & Virus Protection</h2>
                  <h2>Data Localization</h2>
                  <h2>Common Login Page</h2>
                  <h2>-</h2>
                  <h2>-</h2>
                  <h2>-</h2>

                  <h6>Buy Now !</h6>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 ">
                <div className="email-sub-logo-div">
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    850<span>/yr</span>
                  </h4>

                  <div className="email-small-button">Large Enterprise</div>
                  <h2>Advanced</h2>
                  <h2>10 GB Storage Space</h2>
                  <h2>Spam & Virus Protection</h2>
                  <h2>Data Localization</h2>
                  <h2>Common Login Page</h2>
                  <h2>Custom Branding</h2>
                  <h2>Rcloud</h2>
                  <h2>DMARC</h2>

                  <h6>Buy Now !</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* logo section end */}

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

export default RediffMail;
