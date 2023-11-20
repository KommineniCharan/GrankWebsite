import React from "react";
import Header from "../header2/Header";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Seo from "../seo/Seo";

const Ramky = () => {
  const settings10 = {
    className: "center-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
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
        title="Ramky"
        description="Beginner friendly page for learning React Helmet."
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
            src="assest/photos/case-studies/ramky-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/case-studies/ramky-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="case-sub-banner-div" style={{ color: "#1665A8" }}>
            <h2>Real Estate Industry</h2>
          </div>
          <div className="case-sub-banner-div2" style={{ color: "#1665A8" }}>
            <h2>Builders & Development</h2>
          </div>
        </div>
        {/* banner end */}
        {/* section2 Start */}
        <section className="web-section2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 align-self-center">
                <img
                  className="img-fluid w-100"
                  src="assest/photos/case-studies/sub-banner2.png"
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
                      About the Client
                    </motion.h1>
                    <p className="section2-web-develop-passage">
                      One of the leading Real Estate giants of Hyderabad, Ramky
                      Estates and Farms Limited is a premium real estate company
                      that builds apartments, villas, plot and many more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section2 end */}
        <section className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 p-0">
                <img
                  className="img-fluid w-100 sub-banner-img"
                  src="assest/photos/yellow-action-back.png"
                  alt="G-Rank"
                />
                <div className="sub-banner-div">
                  <h1>6</h1>
                  <h2>Years of Association</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                Projects
              </motion.h1>
            </div>

            <div className="col-12">
              <Slider {...settings10}>
                <div className="icon-slider2">
                  <img
                    className="img-fluid  "
                    src="assest/photos/case-studies/ramky-icon1.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider2">
                  <img
                    className="img-fluid  "
                    src="assest/photos/case-studies/ramky-icon2.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider2">
                  <img
                    className="img-fluid  "
                    src="assest/photos/case-studies/ramky-icon3.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider2">
                  <img
                    className="img-fluid  "
                    src="assest/photos/case-studies/ramky-icon4.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider2">
                  <img
                    className="img-fluid  "
                    src="assest/photos/case-studies/ramky-icon5.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="icon-slider2">
                  <img
                    className="img-fluid  "
                    src="assest/photos/case-studies/ramky-icon6.png"
                    alt="G-Rank"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* icon slider end*/}
        {/* what we offer start */}
        <section className="challenge-sec">
          <div className="container">
            <div className="row">
              <div class="col-12 col-lg-6">
                <h1 class="social-header">Challenges:</h1>
              </div>
              <div className="col-12 col-lg-6 what-we-offer-div align-self-center case-padding-none">
                <p>
                  To reach out to the real estate audience for branding,
                  awareness and thereby increase leads, conversions and sales.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h1 class="social-header">What We Offered:</h1>
              </div>
              <div className="col-12 col-lg-6 what-we-offer-div" id="order2">
                <p> Google SEO Keywords</p>
                <p>Google Remarketing</p>
                <p>Website Designing, Development & Hosting</p>
                <p>Google Adwords </p>
                <p>Remarketing</p>
                <p>Banner Ads</p>
                <p>G-Liv Serv (24x7 online chat assistance)</p>
                <p>Social Media Optimisation</p>
              </div>
              <div className="col-12 col-lg-6" id="order1">
                <img
                  className="img-fluid "
                  src="assest/photos/case-studies/what-we-offer-img2.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h1 class="social-header">Ramky One Odyssey:</h1>
              </div>

              <div className="col-12  result-img">
                <img
                  className="img-fluid "
                  src="assest/photos/case-studies/result-graph8.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-12 result-text">
                <h1>
                  Ramky One Odyssey,
                  <br />
                  <br />
                  Over a course of 1.5 years, from 2022,
                  <br />
                  leads increased from 2720 in the first half of 2022 to 2936 in
                  the second half of the year.
                  <br />
                  Total Leads : 5656
                </h1>
                <h2>10%</h2>
                <h3>
                  increase in leads (from 1st half of 2022 to second half)
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h1 class="social-header">Ramky One Harmony:</h1>
              </div>

              <div className="col-12  result-img">
                <img
                  className="img-fluid"
                  src="assest/photos/case-studies/result-graph9.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-12 result-text">
                <h1>
                  Ramky One Harmony,
                  <br />
                  <br />
                  Over a course of 1.5 years, leads increased from 2143
                  <br />
                  in the first quarter of 2022 to 2170 in the second quarter to
                  2900
                  <br />
                  in the third quarter of the year.
                  <br />
                  Total Leads : 7213 36%
                </h1>
                <h2>36%</h2>
                <h3>increase in leads</h3>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="">
          <div className="container">
            <div className="row">
              <div class="col-12">
                <h1 class="social-header">Ramky One Orbit:</h1>
              </div>

              <div className="col-12  result-img">
                <img
                  className="img-fluid "
                  src="assest/photos/case-studies/result-graph10.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
        {/* what we offer start */}
        <section className="result-text-section">
          <div className="container">
            <div className="row">
              <div className="col-12 result-text">
                <h1>
                  Ramky One Orbit,
                  <br />
                  <br />
                  Over a course of 1 year, leads took a<br />
                  spectacular jump from 461 in the third quarter of 2022 to 2586
                  in the
                  <br />
                  fourth quarter of the year.
                  <br />
                  Total Leads : 3047
                </h1>
                <h2>460%</h2>
                <h3>
                  increase in leads (from 3rd quarter of 2022 to 4th quarter of
                  2022)
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}
      </section>
    </>
  );
};

export default Ramky;
