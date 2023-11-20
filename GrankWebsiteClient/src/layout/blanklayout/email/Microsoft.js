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
const Microsoft = () => {
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
        title="Microsoft 365 Service Provider in Bangalore | Hyderabad"
        description="Microsoft 365 service provider in Bangalore and hyderabad. Explore our suite of versatile apps and cloud-based services designed to empower your work, enhance collaboration, and secure your business. "
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
            src="assest/photos/email/email-banner2.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/email/email-banner2-mobile.png"
            alt="G-Rank"
          />

          <div className="email-banner-div1">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Microsoft 365{" "}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Upgrade Your Workspace with Microsoft 365 
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
              <h4 className="email-sub-head">Benefits of Microsoft 365 </h4>
              <Slider {...settings4}>
                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">Security</h2>
                    <p>
                      Microsoft employs robust security measures, including data
                      encryption, multi-factor authentication, and advanced
                      threat protection, enhancing the security of your
                      documents and communication.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      OneDrive <br />
                      Integration
                    </h2>
                    <p>
                      OneDrive, Microsoft's cloud storage solution, is
                      integrated into Office 365, enabling seamless file
                      storage, sharing, and synchronization across devices.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Access to All <br />
                      Devices
                    </h2>
                    <p>
                      Office 365 applications are available on various
                      platforms, including Windows, macOS, iOS, and Android,
                      ensuring consistent user experiences across devices. 
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Integrated <br />
                      Communication
                    </h2>
                    <p>
                      Microsoft Teams, integrated into Office 365, offers chat,
                      video conferencing, and collaboration features in one
                      platform, streamlining communication. 
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Advanced
                      <br /> Analytics
                    </h2>
                    <p>
                      Office 365 applications offer built-in analytics and
                      reporting features, helping users gain insights from their
                      data. 
                    </p>
                  </div>
                </div>
                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">Compatibility</h2>
                    <p>
                      Office 365 maintains compatibility with previous versions
                      of Microsoft Office applications, enabling smoother
                      transitions and collaboration across different software
                      versions.
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
                  Microsoft 365 Services & Plans
                </h4>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>
                    Microsoft 365
                    <br /> Business Basic
                  </h5>
                  <h4>See price in cart</h4>

                  <h2>(annual subscription-auto renews)</h2>
                  <h6>Buy now</h6>
                  <h2>Try fee for one month</h2>
                  <h2>Start with web and mobile apps</h2>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Web and mobile versions of Word, Excel, PowerPoint, and
                    Outlook
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Chat, call, meet up to 300 attendees
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    1 TB of cloud storage per user
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Business-class email
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Manage customer appointments
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Standard security
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Anytime phone & web support
                  </p>
                  <h2>Secure cloud services:</h2>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo4.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Microsoft <br />
                        Teams
                      </h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo5.png"
                        alt="G-Rank"
                      />
                      <h2>Onedrive</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo6.png"
                        alt="G-Rank"
                      />
                      <h2>Sharepoint</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo7.png"
                        alt="G-Rank"
                      />
                      <h2>Exchange</h2>
                    </div>
                  </div>
                  <h2>Web & mobile apps only:</h2>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo1.png"
                        alt="G-Rank"
                      />
                      <h2>Word</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo2.png"
                        alt="G-Rank"
                      />
                      <h2>Excel</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo3.png"
                        alt="G-Rank"
                      />
                      <h2>Powerpoint</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-icon5.png"
                        alt="G-Rank"
                      />
                      <h2>Outlook</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>
                    Microsoft 365
                    <br />
                    Business Standard
                  </h5>
                  <h4>See price in cart</h4>

                  <h2>(annual subscription-auto renews)</h2>
                  <h6>Buy now</h6>
                  <h2>Try fee for one month</h2>
                  <h2>Everything in Business Basic, plus:</h2>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Desktop versions of Word, Excel, PowerPoint, and Outlook
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Easily host webinars
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Attendee registration and reporting tools
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Tools to create personalized documents and professional
                    layouts
                  </p>
                  <h2>
                    Desktop, web and mobile apps and secure cloud services:
                  </h2>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo1.png"
                        alt="G-Rank"
                      />
                      <h2>Word</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo2.png"
                        alt="G-Rank"
                      />
                      <h2>Excel</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo3.png"
                        alt="G-Rank"
                      />
                      <h2>Powerpoint</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-icon5.png"
                        alt="G-Rank"
                      />
                      <h2>Outlook</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo4.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Microsoft <br />
                        Teams
                      </h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo5.png"
                        alt="G-Rank"
                      />
                      <h2>Onedrive</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo6.png"
                        alt="G-Rank"
                      />
                      <h2>Sharepoint</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo7.png"
                        alt="G-Rank"
                      />
                      <h2>Exchange</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo8.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Publisher <br />
                        (PC only)
                      </h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo9.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Access <br />
                        (Pc only)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>
                    Microsoft 365
                    <br />
                    Business Premium
                  </h5>
                  <h4>See price in cart</h4>

                  <h2>(annual subscription-auto renews)</h2>
                  <h6>Buy now</h6>
                  <h2>Try fee for one month</h2>
                  <h2>Everything in Business Standard, plus:</h2>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Advanced security
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Access & data control
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Cyberthreat protection
                  </p>

                  <h2>
                    Desktop, web and mobile apps and secure cloud services:
                  </h2>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo1.png"
                        alt="G-Rank"
                      />
                      <h2>Word</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo2.png"
                        alt="G-Rank"
                      />
                      <h2>Excel</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo3.png"
                        alt="G-Rank"
                      />
                      <h2>Powerpoint</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-icon5.png"
                        alt="G-Rank"
                      />
                      <h2>Outlook</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo4.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Microsoft <br />
                        Teams
                      </h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo5.png"
                        alt="G-Rank"
                      />
                      <h2>Onedrive</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo6.png"
                        alt="G-Rank"
                      />
                      <h2>Sharepoint</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo7.png"
                        alt="G-Rank"
                      />
                      <h2>Exchange</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo8.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Publisher <br />
                        (PC only)
                      </h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo9.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Access <br />
                        (Pc only)
                      </h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo10.png"
                        alt="G-Rank"
                      />
                      <h2>Intune</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo11.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Azure <br />
                        Informantion
                        <br /> Protection
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>
                    Microsoft 365
                    <br />
                    Apps for business
                  </h5>
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    650.00<span>user/month</span>
                  </h4>

                  <h2>(annual subscription-auto renews)</h2>
                  <h6>Buy now</h6>
                  <h2>Try fee for one month</h2>
                  <h2>Exludes chat, meeting, calling</h2>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Desktop versions of Word, Excel, PowerPoint, and Outlook
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    1 TB of cloud storage per user
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Standard security
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Anytime phone and web support
                  </p>

                  <h2>
                    Desktop, web and mobile apps and secure cloud services:
                  </h2>

                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo1.png"
                        alt="G-Rank"
                      />
                      <h2>Word</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo2.png"
                        alt="G-Rank"
                      />
                      <h2>Excel</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo3.png"
                        alt="G-Rank"
                      />
                      <h2>Powerpoint</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-icon5.png"
                        alt="G-Rank"
                      />
                      <h2>Outlook</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo8.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Publisher <br />
                        (PC only)
                      </h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo5.png"
                        alt="G-Rank"
                      />
                      <h2>Onedrive</h2>
                    </div>
                  </div>
                  <div className="email-logo-icon">
                    <div>
                      <img
                        className="img-fluid "
                        src="assest/photos/email/email-logo9.png"
                        alt="G-Rank"
                      />
                      <h2>
                        Access <br />
                        (Pc only)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* logo section end */}

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
                          What is included with Microsoft 365?
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
                          Microsoft 365 comprises top-tier Office apps (Word,
                          Excel, Teams, etc.), intelligent cloud services, and
                          industry-leading secure email through Outlook.
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
                          What happened to Office 365 plans?
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
                          Office 365 plans have transitioned into Microsoft 365
                          business plans. This change involves a new name but
                          retains all the features, including Office apps, cloud
                          services, and security. If you have an existing Office
                          365 business subscription, it will be automatically
                          renamed to Microsoft 365, with no required action from
                          you. The new name will appear in your Admin Portal and
                          billing statements.
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
                          Why should I buy Microsoft 365 from G-Rank if I
                          already have Office apps on my desktop?
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
                          By choosing Microsoft 365 from G-Rank, you receive the
                          latest Office apps with automatic updates. This plan
                          enables seamless document sharing through OneDrive,
                          collaboration via Online Office apps, domain-based
                          email creation, calendar sharing, and contact sharing.
                          Additionally, you gain real-time online meetings and
                          screen-sharing capabilities through Skype for Business
                          (PC) and Lync (Mac). This enhances productivity and
                          collaboration beyond just Office apps on your desktop.
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

export default Microsoft;
