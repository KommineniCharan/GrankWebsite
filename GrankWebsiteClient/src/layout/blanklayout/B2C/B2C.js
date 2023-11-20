import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Seo from "../seo/Seo";
const B2C = () => {
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
  const settings4 = {
    // dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    waitForAnimate: false,
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

  // Slider section start-----------------------------------------
  // function SampleNextArrow2(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className="slider-custome-button-next2"
  //       // style={{ ...style, display: "block", background: "ccc" }}
  //       onClick={onClick}
  //     >
  //       <ArrowForwardIosIcon className="forword-arrow2" />
  //     </div>
  //   );
  // }

  // function SamplePrevArrow2(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className="slider-custome-button-prev2"
  //       // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
  //       onClick={onClick}
  //     >
  //       <ArrowBackIosIcon className="backword-arrow2" />
  //     </div>
  //   );
  // }
  return (
    <>
      <Seo
        title="B2C Digital Marketing Agency in Bangalore | Hyderabad "
        description="B2C digital marketing agency in bangalore and hyderabad. Unleash the power of B2C Digital Marketing to connect, engage, and thrive in the consumer-centric digital landscape."
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
            src="assest/photos/b2b/b2b-banner2.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/b2b/b2b-banner2-mobile.png"
            alt="G-Rank"
          />

          <div className="b2c-banner-div">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Best Digital
              <br /> Marketing Agency <br />
              for B2C
            </motion.h2>

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

        {/* b2b second section */}
        <section>
          <div className="container">
            <div className="col-12">
              <motion.h2
                className="slider-heading"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                What we do
              </motion.h2>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6 col-lg-3 b2b-section-second b2b-border1">
                  <div class="op3">
                    <img
                      src="assest/photos/b2b/icon-main/b2c-main-icon1.png"
                      alt=""
                    />
                    <h2 class="b2b-slider-img5">
                      Search engine <br />
                      optimization (SEO)
                    </h2>
                  </div>
                </div>
                <div className="col-6 col-lg-3 b2b-section-second b2b-border1">
                  <div class="op3">
                    <img
                      src="assest/photos/b2b/icon-main/b2c-main-icon2.png"
                      alt=""
                    />
                    <h2 class="b2b-slider-img5">
                      Pay-per-click (PPC)
                      <br /> advertising
                    </h2>
                  </div>
                </div>
                <div className="col-6 col-lg-3 b2b-section-second b2b-border1">
                  <div class="op3">
                    <img
                      src="assest/photos/b2b/icon-main/b2c-main-icon3.png"
                      alt=""
                    />
                    <h2 class="b2b-slider-img5">Email marketing</h2>
                  </div>
                </div>
                <div className="col-6 col-lg-3 b2b-section-second b2b-border1">
                  <div class="op3">
                    <img
                      src="assest/photos/b2b/icon-main/b2c-main-icon4.png"
                      alt=""
                    />
                    <h2 class="b2b-slider-img5">
                      Social media
                      <br /> marketing
                    </h2>
                  </div>
                </div>

                <div className="col-6 col-lg-3 b2b-section-second b2b-border1">
                  <div class="op3">
                    <img
                      src="assest/photos/b2b/icon-main/b2c-main-icon5.png"
                      alt=""
                    />
                    <h2 class="b2b-slider-img5">
                      Social media <br />
                      advertising
                    </h2>
                  </div>
                </div>
                <div className="col-6 col-lg-3 b2b-section-second b2b-border1">
                  <div class="op3">
                    <img
                      src="assest/photos/b2b/icon-main/b2c-main-icon6.png"
                      alt=""
                    />
                    <h2 class="b2b-slider-img5">Content marketing</h2>
                  </div>
                </div>
                <div className="col-6 col-lg-3 b2b-section-second b2b-border1">
                  <div class="op3">
                    <img
                      src="assest/photos/b2b/icon-main/b2c-main-icon7.png"
                      alt=""
                    />
                    <h2 class="b2b-slider-img5">
                      Website design and <br />
                      development
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* b2b second section */}
        {/* our client start */}
        <section className="b2b-our-client-section">
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
              <Slider {...settings4}>
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
        {/* b2b section hover-effect section start */}
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <motion.h2
                  className="slider-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Industries where we Excel
                </motion.h2>
              </div>
              <div className="col-12 col-md-4 col-lg-4 b2b-industrial-div">
                <img
                  className="img-fluid w-100 b2b-industrial"
                  src="assest/photos/b2b/b2c-industrial-img1.png"
                />
                <div className="b2b-industrial-text">Real Estate</div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 b2b-industrial-div">
                <img
                  className="img-fluid b2b-industrial"
                  src="assest/photos/b2b/b2c-industrial-img2.png"
                />
                <div className="b2b-industrial-text">Health Care</div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 b2b-industrial-div">
                <img
                  className="img-fluid b2b-industrial"
                  src="assest/photos/b2b/b2c-industrial-img3.png"
                />
                <div className="b2b-industrial-text">E-Commerce</div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 b2b-industrial-div">
                <img
                  className="img-fluid b2b-industrial"
                  src="assest/photos/b2b/b2c-industrial-img4.png"
                />
                <div className="b2b-industrial-text">Lifestyle</div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 b2b-industrial-div">
                <img
                  className="img-fluid b2b-industrial"
                  src="assest/photos/b2b/b2c-industrial-img5.png"
                />
                <div className="b2b-industrial-text">Interiors & Furniture</div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 b2b-industrial-div">
                <img
                  className="img-fluid b2b-industrial"
                  src="assest/photos/b2b/b2c-industrial-img6.png"
                />
                <div className="b2b-industrial-text">Education</div>
              </div>
            </div>
          </div>
        </section>
        {/* b2b section hover-effect section end*/}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div>
              <motion.h2
                className="slider-heading"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Quick Links For You
              </motion.h2>
              <Slider {...settings3}>
                <div className="slider-div2">
                  <h1 className="slider-img2">Branding</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Creative & <p className="d-block"> Content</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Organic <p className="d-block"> marketing</p>
                  </h1>
                </div>

                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Performance <p className="d-block"> marketing</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Social Media</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Web <p className="d-block"> Development</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Domain</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Web <p className="d-block"> Hosting</p>{" "}
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Security</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Email</h1>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* Quick Link section end */}
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
                Are you ready to boost
                <br /> your business ?
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

export default B2C;
