import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const PaidMarketing = () => {
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

  return (
    <>
      <Seo
        title="Paid social media agency in Bangalore | Hyderabad"
        description="Paid social media agency in bangalore and hyderabad. Explore the art of strategic advertising, data-driven campaigns, and optimized targeting that ensure your brand stands out and succeeds. "
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
            src="assest/photos/social-media/social-media-banner2.png"
            alt="G-Rank"
          />

          <motion.img
            className="social-banner-img mobile-none"
            src="assest/photos/social-media/social-media-img3.png"
            alt="G-Rank"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <div className="social-banner-div">
            {/* <h1>Paid Social</h1> */}
            <h1 className="waviy ">
              <span>Paid Social</span>
            </h1>

            <h2>Stand Out, Get Noticed​​</h2>

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
                  What is Paid Social Media?​
                </motion.h1>
              </div>
              <div className="col-12">
                <motion.h2
                  className="creative-header2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Paid media refers to advertising and promotional activities
                  that require monetary investment to reach a target audience
                  and achieve specific marketing objectives. It involves paying
                  for media placements on various platforms, such as television,
                  radio, print, outdoor billboards, websites, social media,
                  search engines, and other digital channels.​
                  <br />
                  At G-Rank, we use paid media as part of the overall marketing
                  strategy to raise brand awareness, drive traffic, generate
                  leads, increase conversions, and ultimately boost sales. It
                  allows us to reach a larger audience and target specific
                  customer segments effectively.​
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
                  src="assest/photos/social-media/social-sub-question-img.png"
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
                  Our Process
                </motion.h1>

                <motion.h2
                  className="social-question-header2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  At G-Rank, we take a meticulous and strategic approach to
                  delivering exceptional results for your brand. Our process
                  optimizes your paid media campaigns and drives measurable ROI.
                  Our team thoroughly analyses your target audience, industry
                  landscape, and competitors to gain deep insights into your
                  market. This helps us create a tailored strategy to maximize
                  your brand's visibility and engagement. Our experienced team
                  also craft a comprehensive media plan that aligns with your
                  goals and budget. We leverage our extensive network of
                  advertising platforms to ensure your ads reach the right
                  audience at the right time, maximizing your reach and impact.
                  Throughout the campaign, we continuously monitor and optimize
                  your ads, making data-driven decisions to improve performance
                  and achieve higher conversions. Our agency's expertise ensures
                  your advertising campaigns are executed flawlessly, delivering
                  exceptional results and helping your brand stay ahead in a
                  competitive market.​
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
                Our Paid Social Media Services​
              </motion.h1>
            </div>
            <div className="col-12">
              <motion.h2
                className="social-header2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                We provide a wide range of services related to Paid Media.
                <br />
                Our services include:
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
        {/* what we do start */}
        <div className="container-fluid social-media-what">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 ">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" branding-consulting-what-heading"
              >
                <h1>What</h1>
                <h2>we Do</h2>
              </motion.div>
              <div className="branding-consulting-what-text">
                <p>Develop strategies for paid social media campaigns</p>
                <p>Define precise demographics for targeted ads</p>
                <p>Design compelling and optimized ad creatives</p>
                <p>Determine budget allocation for different campaigns</p>
                <p>Choose suitable social media platforms for ads</p>
                <p>Select placements to reach the intended audience</p>
                <p>Optimize bids for maximum return on investment (ROI)</p>
                <p>Write compelling and concise captions for posts</p>
                <p>Set up and monitor conversion tracking goals</p>
                <p>Develop retargeting strategies for past visitors</p>
                <p>Track metrics to assess campaign performance</p>
                <p>Adjust campaigns based on performance insights</p>
                <p>Stay updated on current social media trends</p>
                <p>Stay updated on platform changes and trends</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 ">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-yellow.png"
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

export default PaidMarketing;
