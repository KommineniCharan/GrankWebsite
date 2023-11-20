import React, { useState, useEffect } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seo from "../seo/Seo";
import CircularProgressBars from "../B2B/circular-progress-bar/CircularProgressBars";

const Education = () => {
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

  var settings2 = {
    // dots: true,
    infinite: true,
    // speed: 300,
    autoplay: true,

    // autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        className="slider-custome-button-next"
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
        className="slider-custome-button-prev"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <KeyboardArrowLeftIcon className="backword-arrow" />
      </div>
    );
  }

  // -----------------------------------------------------------------

  return (
    <>
      <Seo
        title="Digital Marketing Agency for Education Companies | Bangalore | Hyderabad"
        description="Digital marketing agency for education companies in bangalore and hyderabad.   Explore how we enhance your online presence, engage with students and parents, and drive growth in the dynamic world of education marketing. "
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
            src="assest/photos/b2b/b2b-banner14.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/b2b/b2b-banner14-mobile.png"
            alt="G-Rank"
          />

          <div className="b2b-banner-div">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>
            <h4>
              Best Digital Marketing Agency for <br />
              Education Industry
            </h4>
            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Get a Quote</a>
            </motion.h3>
          </div>
        </div>
        {/* banner end */}
        {/* tech-second start */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5 align-self-center">
                <h2 className="b2b-message-h2  b2b-pt">A Journey of</h2>
                <h1 className="b2b-message-div">
                  <span></span>
                  <div class="b2b-message">
                    <div class="word1"> Knowledge</div>
                    <div class="word2">Expertise</div>
                    <div class="word3">Learning</div>
                  </div>
                </h1>
              </div>
              <div className="col-12 col-md-7 col-lg-7">
                <p className="b2b-message-p  b2b-pt">
                  With over 13 years of expertise and a trail of over 300
                  satisfied clients, G-Rank has become your go-to partner for
                  digital marketing in the Education domain.
                  <br />
                  <br />
                  Our performance-driven tactics have helped our clients to
                  establish themselves as one of the top agencies in education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* tech-second end */}
        <motion.h2
          className="slider-heading"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Statistics
        </motion.h2>
        <section className="circular-percentage-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 col-lg-3">
                <CircularProgressBars />
                <h1 className="circular-percentage-h1">Clients</h1>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <CircularProgressBars />
                <h1 className="circular-percentage-h1">Projects</h1>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <CircularProgressBars />
                <h1 className="circular-percentage-h1">Leads</h1>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <CircularProgressBars />
                <h1 className="circular-percentage-h1">Converstions</h1>
              </div>
            </div>
          </div>
        </section>

        {/* tech-second end */}

        {/* Quick Link section start */}
        <section className="margin-top-bott">
          <div className="container-fluid">
            <div>
              <motion.h2
                className="slider-heading"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Education Digital Marketing Services
              </motion.h2>
              <Slider {...settings3}>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">Branding</h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">
                    Creative & <p className="d-block"> Content</p>
                  </h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">
                    Organic <p className="d-block"> marketing</p>
                  </h1>
                </div>

                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">
                    Performance <p className="d-block"> marketing</p>
                  </h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">Social Media</h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">
                    Web <p className="d-block"> Development</p>
                  </h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">Domain</h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">
                    Web <p className="d-block"> Hosting</p>{" "}
                  </h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">Security</h1>
                </div>
                <div className="b2b-slider-div2">
                  <h1 className="b2b-slider-img2">Email</h1>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* Quick Link section end */}

        {/* Testinomial section start */}
        <section className="faq-heading-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1>Testimonials</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="b2b-testimonial-section-margin">
          <div className="container">
            <h1 className="b2b-testinomial-heading">Google Reviews</h1>
            <Slider {...settings2}>
              <div className="b2b-testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      G-Rank is very professional and prompt in resolution of
                      all issues. They have been handling our account for many
                      years now and we are very happy with their service.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img "
                        src="assest/photos/female-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>Nishita Reddy</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      We are happy with there website design service. Their Mr.
                      Creative Division helped us to get a good and trendy
                      website. They have a very cooperative team.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6 " id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img "
                        src="assest/photos/male-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>V R Industries</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      We are working with G-Rank for the last 18months and
                      getting relevant enquirers. Especially their re-marketing
                      banner in webpage is very effective. Very nice staff. Good
                      to be partner with G-rank for digital marketing.
                      Padmanabha - DIRAK India
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/male-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>Padmanabha HM</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Well our products are getting promoted through the
                      courtesy of G-rank, Though we couldn't find enough
                      specific enquiry generated related to our products from
                      the concerned OEM but we are satisfied with the way few
                      inquiries received so far. A little more penetration is
                      needed to find the actual user and we will be working
                      towards it in future.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/male-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>Chhaperia Electro Components</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      We have been associated with G Rank for last 1 year and we
                      are happy with the services and the enquiries generated.
                      We look forward to the smae support in the coming year.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/male-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>Primex Plastics Pvt Ltd</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6" id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      We have had a good experience after marketing with G-Rank.
                      Our customer base has increased ever since we signed up
                      with them.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/male-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>Karthik Gopalakrishnan</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      They do provide best digital marketing services and it has
                      become mandatory to have digital presence in this era I
                      took services from Grank and I am very much satisfied.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/male-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>Chandra Shekhar Reddy</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6" id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="b2b-testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      They have been very cooperative and support all through
                      our discussions . The service is very good and prompt.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img animate__bounceIn"
                        src="assest/photos/male-avatar.png"
                        alt="G-Rank"
                      />
                      <div className="b2b-testinomial-section-name">
                        <h1>senthil kumar</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* testinomial section end */}
        {/* our client start */}
        <section>
          <div className="col-12">
            <motion.h2
              className="slider-heading"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our Clientele
            </motion.h2>
          </div>
          <div className="container-fluid">
            <div>
              <Slider {...settings3}>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/eco-life.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/cms.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/jaya.png"
                    alt="G-Rank"
                  />
                </div>

                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />{" "}
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/performax.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/dirak.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/signature.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/shodhana.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/ramky.png"
                    alt="G-Rank"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* our client end */}

        {/* Black-section-div start*/}
        <section>
          <div className="footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/banner-footer32.png"
              alt="G-Rank"
            />
            <div className="footer-div-text">
              <motion.p
                initial={{ opacity: 0, scale: 0, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Want to Grow your
                <br /> Education Business?
              </motion.p>
              <a href="#">
                <motion.p
                  className="footer-div-buttom"
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Contact Us <ArrowRightAltIcon />
                </motion.p>
              </a>
            </div>
          </div>
        </section>
        {/* Black-section-div end*/}
      </section>
    </>
  );
};

export default Education;
