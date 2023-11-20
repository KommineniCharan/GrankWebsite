import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";
const Socialmedia = () => {
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
        title="Social Media Agency in Bangalore | Hyderabad"
        description="Social media agency in bangalore and hyderabad. Explore the art of building connections, sparking conversations, and fostering engagement that propels your brand forward"
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
            src="assest/photos/social-media/social-media-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/social-media/social-media-banner1.png"
            alt="G-Rank"
          />

          <motion.img
            className="social-banner-img mobile-none"
            src="assest/photos/social-media/social-banner-img1.png"
            alt="G-Rank"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <div className="social-banner-div">
            <h1 className="waviy ">
              <span>Social Media</span>
            </h1>

            <h2>Advertising Like Never Before</h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">LEARN MORE</a>
            </motion.h3>
          </div>
        </div>
        {/* banner end */}

        {/* text section start */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="social-header"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Your Social Media Success <br />
                  starts Here
                </motion.h1>
              </div>
              <div className="col-12">
                <motion.h2
                  className="creative-header2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  In today's ever-changing social media landscape, staying
                  updated on platform evolution and constantly seeking ways to
                  optimize your strategies is crucial.
                  <br /> At G-Rank, we provide comprehensive services tailored
                  to meet your social media marketing needs. Our dedicated team
                  will be with you every step of the way, ensuring that your
                  social media presence is cohesive, engaging, and ultimately
                  leads to success.
                </motion.h2>
              </div>
            </div>
          </div>
        </section>
        {/* text section start */}
        {/* blue grey start */}
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5 social-question-div">
                <img
                  className="img-fluid  shakex"
                  src="assest/photos/social-media/social-question.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-7 col-lg-7 social-question-text">
                <motion.h1
                  className="social-question-header"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Why Choose G-Rank?
                </motion.h1>

                <motion.h2
                  className="social-question-header2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  At G-Rank, we understand that social media is not just about
                  posting content; it's about making an impact. With countless
                  options available, choosing the right platform for your social
                  media needs can be overwhelming. Our powerful suite of tools
                  and features enables you to effortlessly manage and optimize
                  your social media strategy, giving you a competitive edge in
                  the digital landscape. We pride ourselves on providing
                  exceptional customer support. Our team of experts is always
                  ready to assist you, ensuring you receive the guidance and
                  assistance you need along your social media journey. Don't
                  settle for mediocrity when you can achieve greatness. Choose
                  G-Rank and elevate your social media presence to new heights.
                </motion.h2>
              </div>
            </div>
          </div>
        </section>

        {/* blue grey end*/}
        {/* icon slider start*/}
        <div className="container-fluid slider-icon-div">
          <div className="row ">
            <div className="col-12">
              <motion.h1
                className="social-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Our Social Media Services
              </motion.h1>
            </div>
            <div className="col-12">
              <motion.h2
                className="social-header2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                We provide a wide range of services related to Social Media.
                <br /> Our services include:
              </motion.h2>
            </div>
            <div className="col-12">
              <Slider {...settings10}>
                <div className="icon-slider">
                  <img
                    className="img-fluid  "
                    src="assest/photos/social-media/facebook.png"
                    alt="G-Rank"
                  />
                  <h5>Facebook</h5>
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid  "
                    src="assest/photos/social-media/linkten.png"
                    alt="G-Rank"
                  />
                  <h5>Linkedin</h5>
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid "
                    src="assest/photos/social-media/pexel.png"
                    alt="G-Rank"
                  />
                  <h5>Pexel</h5>
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid  "
                    src="assest/photos/social-media/q-icon.png"
                    alt="G-Rank"
                  />
                  <h5>Quora</h5>
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid "
                    src="assest/photos/social-media/insta.png"
                    alt="G-Rank"
                  />
                  <h5>Instagram</h5>
                </div>
                <div className="icon-slider">
                  <img
                    className="img-fluid "
                    src="assest/photos/social-media/twitter.png"
                    alt="G-Rank"
                  />
                  <h5>Twitter</h5>
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

export default Socialmedia;
