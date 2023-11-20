import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
const DisplayAds = () => {
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

  const settings7 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
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
  const settings8 = {
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
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
  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-next2"
        // style={{ ...style, display: "block", background: "ccc" }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon className="forword-arrow2" />
      </div>
    );
  }

  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-prev2"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <ArrowBackIosIcon className="backword-arrow2" />
      </div>
    );
  }
  return (
    <>
      <Seo
        title="Display Advertising Services in Bangalore | Hyderabad"
        description="Display advertising service in bangalore and hyderbad. Amplify your brand's visibility and impact with our Display Ads strategies."
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
            src="assest/photos/creative-content/creative-content-banner1.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/creative-content/creative-content-banner1-mobile.png"
            alt="G-Rank"
          />
          <div className="creative-banner-div">
            <motion.h1
              class="animate-charcter"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Display Advertising
            </motion.h1>
            <h2>
              Amplify Your <br />
              Online Presence!
            </h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Get Started!</a>
            </motion.h3>
            {/* <div>o</div> */}
          </div>
        </div>
        {/* banner end */}

        {/* text section start */}
        <section className="back-grey">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="creative-header"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Drive Results{" "}
                  <span className="d-block">
                    with Display Advertising Process
                  </span>
                </motion.h1>
                <motion.h2
                  className="creative-header2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  In today's digital world, where people spend a significant
                  portion of their time browsing the internet, display
                  advertising is seen as powerful tool for businesses to connect
                  with their target audience. It allows businesses to create
                  visually appealing and engaging ads that can be targeted to
                  specific demographics, interests, and behaviors which will not
                  only increase brand awareness but also generate leads, and
                  drive sales. It is a cost-effective and measurable way to
                  reach your target audience and achieve your business goals.
                </motion.h2>
              </div>
            </div>
          </div>
        </section>
        {/* text section start */}
        {/* slider up section start */}
        <section className="back-yellow">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="creative-header"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Our <span> Process</span>
                </motion.h1>
              </div>
              <div className="col-12">
                <Slider {...settings8}>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads1.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Campaign Goal
                          <br /> and KPIs
                        </h1>
                      </div>
                      <p className="hid-box">
                        Define campaign objectives and key performance
                        indicators (KPIs).
                      </p>
                    </motion.div>
                  </div>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads2.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Audience <br />
                          Segmentation
                        </h1>
                      </div>
                      <p className="hid-box">
                        Identify target audience segments based on demographics
                        and behaviors.
                      </p>
                    </motion.div>
                  </div>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads3.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Creative
                          <br /> Development
                        </h1>
                      </div>
                      <p className="hid-box">
                        Design captivating ad creatives aligned with the brand.
                      </p>
                    </motion.div>
                  </div>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads4.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Ad Format <br />
                          Selection
                        </h1>
                      </div>
                      <p className="hid-box">
                        Choose suitable ad formats for the campaign's goals
                      </p>
                    </motion.div>
                  </div>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads5.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Landing Page <br />
                          Preparation
                        </h1>
                      </div>
                      <p className="hid-box">
                        Create dedicated landing pages with clear CTAs.
                      </p>
                    </motion.div>
                  </div>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads6.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Targeting and
                          <br /> Placement
                        </h1>
                      </div>
                      <p className="hid-box">
                        Use precise targeting options and select relevant ad
                        placements.
                      </p>
                    </motion.div>
                  </div>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads7.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Tracking and <br /> Analysis
                        </h1>
                      </div>
                      <p className="hid-box">
                        Implement tracking mechanisms and analyze campaign
                        metrics.
                      </p>
                    </motion.div>
                  </div>
                  <div className="slider-div77">
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="hid-box2">
                        <img
                          className=""
                          src="assest/photos/creative-content/display-ads/creative-ads8.png"
                          alt="G-Rank"
                        />
                        <h1>Optimization</h1>
                      </div>
                      <p className="hid-box">
                        Continuously refine strategies based on performance
                        insights.
                      </p>
                    </motion.div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* slider up section end */}
        {/* what we do start */}
        <div className="container-fluid branding-sem-consulting-what creative-what-we">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 " id="order2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" branding-sem-consulting-what-heading"
              >
                <h1>What</h1>
                <h2>we Do</h2>
              </motion.div>
              <div className="branding-sem-consulting-what-text">
                <p>Develop strategies for display ad campaigns</p>
                <p>Create visually engaging and appealing display ads</p>
                <p>Craft compelling and concise ad copy</p>
                <p>Choose relevant display ad networks for campaigns</p>
                <p>Allocate budgets across different campaigns</p>
                <p>Select websites and platforms for ad placement</p>
                <p>Implement strategies for retargeting past visitors</p>
                <p>Track metrics to assess campaign performance</p>
                <p>Set up and monitor conversion goals</p>
                <p>Adjust campaigns based on performance insights</p>
                <p>Design various ad formats, including banners and videos</p>
                <p>Stay updated on industry trends and changes</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 " id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-blue.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        {/* what we do end */}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div className="col-12">
              <motion.h1
                className="creative-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Quick Links <span>For You</span>
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
        <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        />
      </section>
    </>
  );
};

export default DisplayAds;
