import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
const WebDesign = () => {
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
        title="Web Design Services in Bangalore | Hyderabad"
        description="Web design services in bangalore and hyderabad. Explore our Web Design services and see how we transform visions into captivating online experiences. ."
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
            src="assest/photos/creative-content/creative-content-banner3.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/creative-content/creative-content-banner3-mobile.png"
            alt="G-Rank"
          />
          <div className="creative-banner-div">
            <motion.h1
              class="animate-charcter"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Web Design
            </motion.h1>

            <h2>Designing one pixel at a time!</h2>

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
                  The Power of
                  <span className="d-block">Web Designing</span>
                </motion.h1>
                <motion.h2
                  className="creative-header2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  A well-crafted website has the potential to transform
                  businesses, captivate audiences, and create lasting
                  impressions. Your website is often the first interaction users
                  have with your brand. A thoughtfully designed website
                  instantly communicates professionalism, trustworthiness, and
                  the essence of your brand.
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
                          src="assest/photos/creative-content/web-design/creative-web1.png"
                          alt="G-Rank"
                        />
                        <h1>Research</h1>
                      </div>
                      <p className="hid-box">
                        Understand marketing objectives and target audience.
                        <br />
                        <br />
                        Research competitors and industry trends.
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
                          src="assest/photos/creative-content/web-design/creative-web2.png"
                          alt="G-Rank"
                        />
                        <h1>
                          User Persona <br />
                          Development
                        </h1>
                      </div>
                      <p className="hid-box">
                        Create detailed user personas.
                        <br />
                        <br />
                        Understand preferences and behaviors.
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
                          src="assest/photos/creative-content/web-design/creative-web3.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Wireframing and
                          <br /> Prototyping
                        </h1>
                      </div>
                      <p className="hid-box">
                        Create wireframes for layout. Develop interactive
                        prototypes.
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
                          src="assest/photos/creative-content/web-design/creative-web4.png"
                          alt="G-Rank"
                        />
                        <h1>Visual Design</h1>
                      </div>
                      <p className="hid-box">
                        Design visually appealing interface.
                        <br />
                        <br />
                        Choose colors, typography, imagery.
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
                          src="assest/photos/creative-content/web-design/creative-web5.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Mobile <br />
                          Responsiveness
                        </h1>
                      </div>
                      <p className="hid-box">
                        Ensure design works on various devices.
                        <br />
                        <br />
                        Test across platforms.
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
                          src="assest/photos/creative-content/web-design/creative-web6.png"
                          alt="G-Rank"
                        />
                        <h1>SEO Integration</h1>
                      </div>
                      <p className="hid-box">
                        Implement on-page SEO practices.
                        <br />
                        <br />
                        Optimize site structure for SEO.
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
                          src="assest/photos/creative-content/web-design/creative-web7.png"
                          alt="G-Rank"
                        />
                        <h1>Conversion Optimization</h1>
                      </div>
                      <p className="hid-box">
                        Include strategic CTAs
                        <br />
                        <br />
                        Design effective landing pages and forms.
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
                          src="assest/photos/creative-content/web-design/creative-web8.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Security and
                          <br /> Privacy
                        </h1>
                      </div>
                      <p className="hid-box">
                        Implement SSL certificates and encryption.
                        <br />
                        <br />
                        Ensure compliance with privacy regulations.
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
                <p>Create visually appealing and functional websites</p>
                <p>Enhance user experience and interface design (UI/UX)</p>
                <p>
                  Ensure websites work well on all devices (responsive design)
                </p>
                <p>Incorporate brand elements into the website design</p>
                <p>Plan the layout and structure of web pages (wireframing)</p>
                <p>Design graphics and imagery for the website</p>
                <p>Arrange content for readability and engagement</p>
                <p>Choose fonts aligned with the brand's identity</p>
                <p>Design a consistent and appealing color palette</p>
                <p>Add dynamic elements like animation for interaction</p>
                <p>Optimize website speed for fast loading times</p>
                <p>Create SEO-friendly designs to support search efforts</p>
                <p>Ensure compatibility across various web browsers</p>
                <p>Implement content management systems (CMS)</p>
                <p>Conduct thorough testing before website launch</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 " id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-yellow2.png"
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

export default WebDesign;
