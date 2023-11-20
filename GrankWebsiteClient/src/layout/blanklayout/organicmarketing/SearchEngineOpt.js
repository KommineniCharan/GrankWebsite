import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
const SearchEngineOpt = () => {
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
        title="SEO Company in Bangalore | Hyderabad"
        description="SEO company in bangalore and hyderabad. Explore our proven techniques for boosting visibility, increasing organic traffic, and outperforming your competition. "
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
        <div className="organic-marketing-banner">
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/organicmarketing/organic-marketing-seo-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/organicmarketing/organic-marketing-seo-banner-mobile2.png"
            alt="G-Rank"
          />
          <div className="organic-marketing-banner-new-div">
            <motion.img
              className="img-fluid w-100"
              src="assest/photos/organicmarketing/organic-yellow-patch2.png"
              alt="G-Rank"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <h1 data-text="SearchEngine Optimization">
              <span class="words3"></span>
              SearchEngine
              <br />
              Optimization
            </h1>
            <h2>Effective business solution</h2>

            <h3 href="#">
              <a href="#">Explore</a>
            </h3>
            <div className="div2-p2">
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <span className="voilet">300% </span>
                <br />
                Organic growth <br />
                Quarterly
              </motion.p>
            </div>
            <div>
              <motion.p
                className="p2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Retain more than <span className="pink">150+</span>
                <br /> customers through Organic <br />
                Marketing
              </motion.p>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* slider section start */}
        <div className="container-fluid">
          <div className="org-mark-sem-text">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Empower Your Brand
              <br /> with SEO
            </motion.h1>
          </div>
          <Slider {...settings7}>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Crucial for Ranking <br />
                  and Traffic
                </h1>
                <p>
                  SEO enhances your website's rankings, leading to increased
                  traffic and access to new customers.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Improved Brand <br /> Recognition
                </h1>
                <p>
                  Higher rankings in search results contribute to greater brand
                  recognition and visibility.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Competitor
                  <br /> Dominance
                </h1>
                <p>
                  Neglecting SEO allows competitors to dominate the search space
                  and gain an edge over your business.
                </p>
              </motion.div>
            </div>

            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  In-Depth Knowledge
                  <br /> and Expertise
                </h1>
                <p>
                  We possess in-depth knowledge and expertise in SEO to ensure
                  your website ranks on the first page of Google search results.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Specialization in
                  <br /> Website Optimization
                </h1>
                <p>
                  Our focus is on website optimization, utilizing the best SEO
                  practices to boost your online presence.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Premium SEO <br />
                  Services
                </h1>
                <p>
                  We offer premium SEO services designed to help you achieve a
                  higher ranking and stay ahead in the digital landscape.
                </p>
              </motion.div>
            </div>
          </Slider>
        </div>
        {/* slider section end */}

        {/* seo service start */}
        <section className="organic-market-sem-service-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="org-mark-sem-text">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Our SEO Services
                  </motion.h1>
                  <p>
                    We provide a wide range of services related to SEO.
                    <br /> Our services include:{" "}
                  </p>
                </div>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/org-seo1.png"
                    alt="G-Rank"
                  />
                  <h1>On-Page SEO</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  A team of expert SEOs conducts keyword research according to
                  the niche industry and geographical location.
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/org-seo2.png"
                    alt="G-Rank"
                  />
                  <h1>Organic Traffic</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our team aim to generate a lot of organic traffic, so we
                  recommend spending the least on paid advertising.
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/org-seo3.png"
                    alt="G-Rank"
                  />
                  <h1>Local SEO</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our experts enhance your Google business profile so your local
                  audience can find you organically.
                </h1>
              </motion.div>
              <div className="col-12 col-md-2 col-ld-2">
                <h1 style={{ display: "none" }}>1</h1>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/org-seo4.png"
                    alt="G-Rank"
                  />

                  <h1>Technical SEO</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our expert technical team works diligently to improve website
                  loading speed, alt text, usability, and other technical
                  aspects of SEO.
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/org-seo5.png"
                    alt="G-Rank"
                  />

                  <h1>Competition Analysis</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  We understand the importance of being on top of search engine
                  rankings. Our SEO experts thoroughly understand your
                  competitors and their ranking keywords.
                </h1>
              </motion.div>
            </div>
          </div>
        </section>
        {/* seo service end */}
        {/* what we do section start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 align-self-center">
              <motion.img
                className="img-fluid org-mart-what-img"
                src="assest/photos/organicmarketing/org-mart-logo.png"
                alt="G-Rank"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <div className="org-mart-what-we-do">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  What We Do?
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  At G-Rank, we are the best SEO company in
                  <br /> Hyderabad and Bangalore, offering top-notch services:
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Drive organic traffic, improve search engine rankings,
                  <br /> and maximize online visibility.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Comprehensive services: keyword research,
                  <br /> competitor analysis, on-page optimization, content{" "}
                  <br />
                  creation, and link-building.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Commitment to transparency: regular reports and updates <br />
                  on campaign progress.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Stay up-to-date with latest trends and algorithm <br />
                  changes to ensure competitiveness in search results.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* what we do section end */}

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
        <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        />
      </section>
    </>
  );
};

export default SearchEngineOpt;
