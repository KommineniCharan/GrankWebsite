import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const Webdevelop = () => {
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

  const settings10 = {
    className: "center-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
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

  const settings11 = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.5,
    autoplay: true,
    speed: 500,

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

  return (
    <>
      <Seo
        title="
        Website Development Company in Bangalore | Hyderabad
        "
        description="Website development company in bangalore and hyderabad.  Explore our Web Development services to see how we craft innovative, user-friendly websites that represent your brand seamlessly online."
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
            src="assest/photos/web-development/web-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/web-development/web-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="web-develop-banner-div">
            {/* <h1>
              Web
              <br />
              Development
            </h1> */}
            <h1 class="waviy2">
              <span>W</span>
              <span>e</span>
              <span>b</span>
              <br />
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>m</span>
              <span>e</span>
              <span>n</span>
              <span>t</span>
            </h1>
            <h2>
              Drive excellence through
              <br />
              creativity​
            </h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">GET STARTED</a>
            </motion.h3>
          </div>
        </div>
        {/* banner end */}
        {/* section2 Start */}
        <section className="web-section2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <img
                  className="img-fluid w-100"
                  src="assest/photos/web-development/web-section2-img2.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <motion.h1
                      className="section2-web-develop-header"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      Websites that Speaks Your <br />
                      Brand's Language
                    </motion.h1>
                    <p className="section2-web-develop-passage">
                      Our brand language is creating visually appealing,
                      user-friendly websites that make a strong impression,
                      drive business growth, and effectively convey your brand
                      identity to the target audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section2 end */}
        {/* blue text start */}
        <section className="web-dev-blue-section">
          <div className="container">
            <div className="row ">
              <div className="col-12 web-dev-blue-div">
                <div className="row">
                  <div className="col-12">
                    <motion.h1
                      className="web-dev-blue-heading"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      why choose us ?
                    </motion.h1>
                  </div>
                  <motion.div
                    className="col-12 col-md-4 col-lg-4 web-blue-div1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>Attention to Detail</h1>
                    <p>
                      Our team pays close attention to the finer details of
                      website development. This ensures that the final product
                      is polished and meets the clients' specific requirements.
                    </p>
                  </motion.div>
                  <motion.div
                    className="col-12 col-md-4 col-lg-4 web-blue-div-white"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>
                      Knowledge of Latest
                      <br /> Industry Trends
                    </h1>
                    <p>
                      We stay up-to-date with the latest industry trends to
                      ensure their clients' websites are modern and relevant.
                    </p>
                  </motion.div>
                  <motion.div
                    className="col-12 col-md-4 col-lg-4 web-blue-div2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    <h1>Personalized Approach</h1>
                    <p>
                      We take a personalized approach to each client's project.
                      Our goal is to tailor their services to meet the unique
                      needs and goals of individual businesses.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blue text end  */}
        {/* web-sliider section start */}

        <div className="container-fluid slider-icon-div">
          <div className="row ">
            <div className="col-12">
              <motion.h1
                className="web-develop-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                our process
              </motion.h1>
            </div>
            <div className="col-12 web-slider-div">
              <Slider {...settings11}>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon1.png"
                      alt="G-Rank"
                    />
                    <h1>SEO Integration</h1>
                    <p>
                      Collaborate with SEO experts to ensure on-page
                      optimization.
                      <br />
                      <br />
                      Plan URL structures, meta tags, and site architecture for
                      SEO.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon2.png"
                      alt="G-Rank"
                    />
                    <h1>Responsive Design</h1>
                    <p>
                      Develop a responsive design to ensure optimal user
                      experience on all devices.
                      <br />
                      <br />
                      Prioritize mobile responsiveness for mobile-first
                      indexing.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon3.png"
                      alt="G-Rank"
                    />
                    <h1>
                      User Experience
                      <br /> (UX) Design
                    </h1>
                    <p>
                      Design intuitive navigation and user interfaces to enhance
                      engagement.
                      <br />
                      <br />
                      Create clear pathways to conversion points.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon4.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Conversion Rate <br />
                      Optimization
                      <br /> (CRO)
                    </h1>
                    <p>
                      Collaborate with SEO experts to ensure on-page
                      optimization.
                      <br />
                      <br />
                      Plan URL structures, meta tags, and site architecture for
                      SEO.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon5.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Social Media <br />
                      Integration
                    </h1>
                    <p>
                      Integrate social media sharing buttons and feeds.
                      <br />
                      <br />
                      Optimize content for easy sharing on social platforms.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon6.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Content <br />
                      Integration
                    </h1>
                    <p>
                      Collaborate with content creators to ensure high-quality,
                      SEO-friendly content.
                      <br />
                      <br />
                      Incorporate content that aligns with digital marketing
                      messaging.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon7.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Security and <br />
                      Compliance
                    </h1>
                    <p>
                      Implement security measures (SSL certificates, data
                      encryption) for user trust.
                      <br />
                      <br />
                      Ensure compliance with data privacy regulations (e.g.,
                      GDPR).
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/web-dev-icon7.png"
                      alt="G-Rank"
                    />
                    <h1>SEO Integration</h1>
                    <p>
                      Collaborate with SEO experts to ensure on-page
                      optimization.
                      <br />
                      <br />
                      Plan URL structures, meta tags, and site architecture for
                      SEO.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* web-sliider section end  */}
        {/* icon slider start*/}
        <div className="container-fluid slider-icon-div">
          <div className="row ">
            <div className="col-12">
              <motion.h1
                className="web-develop-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Explore our tool box
              </motion.h1>
            </div>

            <div className="col-12">
              <Slider {...settings10}>
                <div className="icon-slider">
                  <img
                    className="img-fluid w-50  "
                    src="assest/photos/web-development/web-dev-logo1.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid w-50 "
                    src="assest/photos/web-development/web-dev-logo2.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid w-50 "
                    src="assest/photos/web-development/web-dev-logo3.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid w-50 "
                    src="assest/photos/web-development/web-dev-logo4.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid w-50 "
                    src="assest/photos/web-development/web-dev-logo5.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid w-50 "
                    src="assest/photos/web-development/web-dev-logo6.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid w-50 "
                    src="assest/photos/web-development/web-dev-logo7.png"
                    alt="G-Rank"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* icon slider end*/}
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
        {/* action yellow start*/}
        <div className="web-dev-action-yellow-div-text">
          <motion.p
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s Work Together
            <span className="d-block">
              Let’s find out how to work together and create something
              meaningful or valuable.
            </span>
          </motion.p>
          <a href="#">
            <motion.p
              className="web-dev-action-yellow-div-buttom"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Get Started
            </motion.p>
          </a>
        </div>
        {/* action yellow end*/}
        {/* <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        /> */}
      </section>
    </>
  );
};

export default Webdevelop;
