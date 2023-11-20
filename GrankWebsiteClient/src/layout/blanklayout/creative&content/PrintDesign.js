import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Seo from "../seo/Seo";
const PrintDesign = () => {
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
        title="Print Design Agency in Bangalore | Hyderabad"
        description="Print design agency in bangalore and hyderabad.Elevate your brand's print presence with our Print Design expertise. Explore the art of crafting visually stunning, tactile experiences. "
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
            src="assest/photos/creative-content/creative-content-banner2.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/creative-content/creative-content-banner2-mobile.png"
            alt="G-Rank"
          />
          <div className="creative-banner-div">
            <motion.h1
              class="animate-charcter"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Print Design
            </motion.h1>

            <h2>Crafted for brilliance!</h2>

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
                  The Art of
                  <span className="d-block">Print Design</span>
                </motion.h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <motion.h2
                  className="creative-header23"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Print design has seamlessly transitioned into digital
                  marketing, enabling brands to create captivating visual
                  experiences that resonate with audiences. Fusing aesthetics
                  and functionality is crucial in digital print design, as it
                  drives user engagement and brand recognition.
                </motion.h2>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <motion.h2
                  className="creative-header24"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  The digital print design leverages typography, color schemes,
                  imagery, and layout to craft compelling visuals.
                  Attention-grabbing headlines, balanced compositions, and
                  intuitive navigation create an immersive user experience.
                  Incorporating responsive design also ensures that the visual
                  appeal translates seamlessly across devices, catering to the
                  diverse digital landscape.
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
                          src="assest/photos/creative-content/print-design/creative-print1.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Audience <br />
                          Analysis
                        </h1>
                      </div>
                      <p className="hid-box">
                        Define specific audience segments for the print
                        materials.
                        <br />
                        <br />
                        Understand preferences and demographics.
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
                          src="assest/photos/creative-content/print-design/creative-print2.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Content and Message
                          <br /> Alignment
                        </h1>
                      </div>
                      <p className="hid-box">
                        Craft concise, impactful content.
                        <br />
                        <br />
                        Maintain consistency with digital messaging.
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
                          src="assest/photos/creative-content/print-design/creative-print3.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Branding
                          <br />
                          Integration
                        </h1>
                      </div>
                      <p className="hid-box">
                        Ensure design aligns with brand identity.
                        <br />
                        <br />
                        Consistency across print and digital assets.
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
                          src="assest/photos/creative-content/print-design/creative-print4.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Call-to-Action (CTA)
                          <br /> Integration
                        </h1>
                      </div>
                      <p className="hid-box">
                        Include clear, compelling CTAs. Reflect digital
                        marketing goals.
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
                          src="assest/photos/creative-content/print-design/creative-print5.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Print Medium
                          <br /> Selection
                        </h1>
                      </div>
                      <p className="hid-box">
                        Choose appropriate medium based on message.
                        <br />
                        <br />
                        Consider format, size, distribution.
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
                          src="assest/photos/creative-content/print-design/creative-print6.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Quality <br />
                          Control
                        </h1>
                      </div>
                      <p className="hid-box">
                        Review for accuracy and errors. Check for potential
                        printing issues.
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
                          src="assest/photos/creative-content/print-design/creative-print7.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Integration with <br />
                          Digital Channels
                        </h1>
                      </div>
                      <p className="hid-box">
                        Add QR codes or URLs for online content
                        <br />
                        <br />
                        Blend print with digital experience.
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
                          src="assest/photos/creative-content/print-design/creative-print8.png"
                          alt="G-Rank"
                        />
                        <h1>
                          Distribution
                          <br />
                          Strategy
                        </h1>
                      </div>
                      <p className="hid-box">
                        Plan strategic distribution.
                        <br />
                        <br />
                        Combine offline and online channels.
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
                <p>Create visually appealing print materials</p>
                <p>Incorporate brand elements into designs</p>
                <p>Arrange elements for readability and impact</p>
                <p>Select fonts aligned with the brand identity</p>
                <p>Design with a consistent and suitable color scheme</p>
                <p>Develop custom graphics and illustrations</p>
                <p>Enhance and optimize images for print quality</p>
                <p>Adhere to industry print guidelines and standards</p>
                <p>Design brochures, flyers, posters, etc., for advertising</p>
                <p>
                  Create business cards, letterheads, and related collateral
                </p>
                <p>Stay updated on print design trends</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5" id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-yellow3.png"
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

export default PrintDesign;
