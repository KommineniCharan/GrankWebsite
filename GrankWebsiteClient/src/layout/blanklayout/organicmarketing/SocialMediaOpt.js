import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const SocialMediaOpt = () => {
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
        title="Social Media Marketing Agency in Bangalore | Hyderabad"
        description="Social media agency in bangalore and hyderabad. Explore our strategies to boost engagement, maximize reach, and connect authentically with your audience organically."
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
            src="assest/photos/organicmarketing/organic-marketing-smo-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/organicmarketing/organic-marketing-smo-banner-mobile2.png"
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
            <h1 data-text="SearchMedia Optimization">
              <span class="words3"></span>
              SearchMedia
              <br />
              Optimization
            </h1>
            <h2>SMO That Drives Results</h2>

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
              Fuel Your Brand's Social
              <br /> Influence with SMO
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
                <p>
                  Social media optimization (SMO) is crucial for enhancing
                  website success and building a strong brand presence on social
                  channels.
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
                <p>
                  G-Rank is a top-notch SMO agency known for its effective
                  techniques in promoting products and businesses across various
                  social platforms.
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
                <p>
                  The G-Rank team consists of skilled SMO experts dedicated to
                  helping businesses achieve greater reach, engagement, and
                  brand visibility.
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
                <p>
                  By leveraging G-Rank's proven SMO strategies, businesses can
                  attract organic traffic, expand their reach, and generate
                  leads.
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
                <p>
                  G-Rank's services also help boost brand awareness and enhance
                  a company's online presence.
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
                <p>
                  With G-Rank's assistance, brands can expect to thrive and
                  flourish in the competitive digital landscape.
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
                    Our SMO Services
                  </motion.h1>
                  <p>
                    We provide a wide range of services related to  SMO.
                    <br /> Our services include:
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
                    src="assest/photos/organicmarketing/org-smo1.png"
                    alt="G-Rank"
                  />
                  <h1>​Profile Optimization</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our SMO experts optimize social media profile information such
                  as bio, cover image, profile picture, and contact details to
                  make it more attractive and user-friendly.​
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
                    src="assest/photos/organicmarketing/org-smo2.png"
                    alt="G-Rank"
                  />
                  <h1>Content Optimization</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our experts optimize social media content, such as text,
                  images, and videos, to make it more engaging, shareable, and
                  optimized for search engines.​
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
                    src="assest/photos/organicmarketing/org-smo3.png"
                    alt="G-Rank"
                  />
                  <h1>Social Media Audit</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our SMO experts analyze existing social media profiles,
                  identify improvement areas, and track and analyze social media
                  campaigns' performance to refine strategies and improve ROI.​
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
                    src="assest/photos/organicmarketing/org-smo4.png"
                    alt="G-Rank"
                  />

                  <h1>Strategy Development</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our experts create a social media strategy that aligns with
                  the business objectives and target audience and promotes
                  products, services, or content to their followers.
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
                    src="assest/photos/organicmarketing/org-smo5.png"
                    alt="G-Rank"
                  />

                  <h1>Hashtag Research & Optimization</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our experts research relevant hashtags and use them in social
                  media posts to increase visibility and reach relevant
                  audiences
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
                    src="assest/photos/organicmarketing/org-smo6.png"
                    alt="G-Rank"
                  />

                  <h1>Social Media Posting & Scheduling</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our experts create and schedule social media posts to ensure
                  consistent and timely posting on Social media platforms such
                  as Facebook, Twitter, and LinkedIn.
                </h1>
              </motion.div>
            </div>
          </div>
        </section>
        {/* seo service end */}
        {/* what we do section start */}
        <div className="container-fluid org-mart-what-sect">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 align-self-center">
              <motion.img
                className="img-fluid org-mart-what-img"
                src="assest/photos/organicmarketing/org-mart-logo-white.png"
                alt="G-Rank"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <div className="org-mart-what-we-do2">
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
                  At G-Rank, we are the best SMO company in
                  <br /> Hyderabad and Bangalore, offering top-notch services:
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Their process begins with a thorough analysis of the
                  <br /> brand, target audience, and industry trends, enabling
                  them
                  <br /> to create a customized SMO strategy aligned with
                  specific
                  <br /> goals.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Skilled professionals at G-Rank employ the latest
                  <br /> trends and tools for data-driven campaigns, ensuring
                  <br /> effective execution.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  The agency continuously monitors and analyzes
                  <br /> performance metrics to fine-tune strategies and keep{" "}
                  <br />
                  the brand ahead in the ever-evolving social media
                  <br /> landscape.
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

export default SocialMediaOpt;
